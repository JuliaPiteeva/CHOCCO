////////////////OnePageScroll////////////////////////////////////////////////////////////////////////////////

//1.Избавляемся от обычного скролла -  wrapper  - растягиваем тоолько на 100% высоты окна,
//hidden. maincontent - высоту 100%б его и будем двигать.
//2.Комплексную задачу - разбиваем на простые подзадачи
//3. Определяем, вверх скролим или вниз
//4.Определить, какая секция отображена. Текущая секция - наличие класса active
//5.Фукнция -которая будет определять куда скролить.
//6.Необходимо смещать активный класс
//7.Не можем скролить к несуществующим секциям.
//8. Перед скролом проверим, есть ли наша секция
//9. Тачпад генерирует много событий. Частые события.
//10. mobbile-detect js - библиотека. определить устройство и применить методы

const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countSectionPosition = (sectionEq) => {
  const position = sectionEq * -100;
  if (isNaN(position))
    console.error("Не верное значение в функции countSectionPosition");
  return position;
};

const resetActiveClass = (item, eq) => {
  item.eq(eq).addClass("active").siblings().removeClass("active");
};

const performTransition = (sectionEq) => {
  if (inScroll) return;
  inScroll = true;
  resetActiveClass(sections, sectionEq);
  resetActiveClass($(".point-nav__item"), sectionEq);
  display.css({
    transform: `translateY(${countSectionPosition(sectionEq)}%)`,
  });

  const transformEnded = display.on("transformend").length;
  if (transformEnded) {
    inScroll = false;
  }
};

const scroller = () => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  return {
    //объект с методами
    next() {
      if (nextSection.length) {
        //если есть секция, скроллим к ней
        performTransition(nextSection.index());
      }
    },
    prev() {
      if (prevSection.length) {
        performTransition(prevSection.index());
      }
    },
  };
};

$(window).on("wheel", (e) => {
  const deltaY = e.originalEvent.deltaY;
  const windowScroller = scroller();

  if (deltaY > 0) {
    windowScroller.next();
  }

  if (deltaY < 0) {
    windowScroller.prev();
  }
});

//////////////////////////////////// при нажатии на клавиши вверх/вниз/////////////////////////
//Убедимся, что нажатие кнопок произошло body
//Определяем блок с произошедшим событием. target-возвращает блок, на котором произошло событие, смотреть регистр
$(document).on("keydown", (e) => {
  const windowScroller = scroller();
  const tagName = e.target.tagName.toLowerCase();
  const userTypingInInputs = tagName === "input" || tagName === "textarea";

  if (userTypingInInputs) return;
  switch (e.keyCode) {
    case 38:
      windowScroller.prev();
      break;
    case 40:
      windowScroller.next();
      break;
  }
});

//////////////////////////////////переход по ссылкам и точкам////////////////////////
//Разные кнопки, по которым происходят одни и теже действия. Заводим дата атрибут data-scroll-to, с айди или классом.
//e.currentTarget значение элемента, на который событие было навешано
// attr берем номер секци куда скролить
$("[data-scroll-to]").on("click", (e) => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  performTransition(target);
});
//touchstart? touchmove, touchhend - можно реализовать перетягивание  drak
// реализация с помощью библиотеки  touchswipe
//добавляем условие проверки устройства
if (isMobile) {
  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirection;
      const windowScroller = scroller();

      if (direction === "up") scrollDirection = "next";
      if (direction === "down") scrollDirection = "prev";

      windowScroller[scrollDirection]();
    },
  });
}
// код не должен расти вправо, понятные имена переменных, не создавать длинных усовий, можно вынесли условие в переменную
//функция должна выполнять одну операцию
//проверять входные параметры, писать подсказки
//внутри функции приводить аргументы к нужным типам данных
//не доускать магических чисел
//следить за дубликацией кода
