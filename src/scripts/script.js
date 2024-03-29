/////////////////// Секция "hero" открытие и закрытие полноэкранного меню//////////////////
const hamburgerOpen = document.querySelector(".hamburger-link");
var hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerOpen.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerMenu.style.display = "block";
});

const hamburgerClose = document.querySelector(".svg-container");
hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerClose.addEventListener("click", function () {
  hamburgerMenu.style.display = "none";
});

///////////////// Секция "slider" , кеопка состава батончика//////////////////////////

const nutritionLinks = document.querySelectorAll(".bar__nutrition-link");
const nutritionShows = document.querySelectorAll(".nutrition");

for (var i = 0; i < nutritionLinks.length; i++) {
  nutritionLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle("nutrition--active");
  });
}

///////////////////////// Секция "menu" аккордеон/////////////////////////////////

const menulinkArray = document.getElementsByClassName("menu__link");
const menuContentArray = document.getElementsByClassName("menu__desc-content");
const closeBtn = document.getElementsByClassName("close");

for (var i = 0; i < menulinkArray.length; i++) {
  menulinkArray[i].addEventListener("click", function (e) {
    e.preventDefault();
    const thisActive = this.nextElementSibling;
    for (var k = 0; k < menuContentArray.length; k++) {
      if (
        k != i &&
        !thisActive.classList.contains("menu__desc-content--active")
      ) {
        menuContentArray[k].classList.remove("menu__desc-content--active");
      }
    }
    if (!thisActive.classList.contains("menu__desc-content--active")) {
      thisActive.classList.add("menu__desc-content--active");
    } else {
      thisActive.classList.remove("menu__desc-content--active");
    }
  });
}

var menuContentCloseArray = document.getElementsByClassName("close");
for (var i = 0; i < menuContentCloseArray.length; i++) {
  menuContentCloseArray[i].addEventListener("click", function (e) {
    var closeDesc = this.parentNode;
    var closeDesc2 = closeDesc.parentNode;
    closeDesc2.classList.remove("menu__desc-content--active");
  });
}
////////////////////////Секция "team" аккордеон///////////////////////////
const teamLinkArray = document.getElementsByClassName("accordeon__title");
const accordeonIitem = document.getElementsByClassName("accordeon__item");

for (var i = 0; i < teamLinkArray.length; i++) {
  teamLinkArray[i].addEventListener("click", function (e) {
    e.preventDefault();
    const thisActive = this.parentNode;
    for (var k = 0; k < accordeonIitem.length; k++) {
      if (k != i && !thisActive.classList.contains("accordeon--visible")) {
        accordeonIitem[k].classList.remove("accordeon--visible");
      }
    }
    if (!thisActive.classList.contains("accordeon--visible")) {
      thisActive.classList.add("accordeon--visible");
    } else {
      thisActive.classList.remove("accordeon--visible");
    }
  });
}

///////////////////////////////Отправка данных из формы на сервер///////////////////////////////////////

const myForm = document.querySelector("#form");
const send = document.querySelector(".button");
const body = document.querySelector("body");

send.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateForm(myForm)) {
    //создаем объект с введенными данными
    var formData = new FormData();
    formData.append("name", myForm.elements.phone.value);
    formData.append("phone", myForm.elements.phone.value);
    formData.append("comment", myForm.elements.comment.value);
    formData.append("to", "a@a.a");

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json"; //будем ожидать от сервера, данные в формате json
    xhr.open("POST", "https://webdev-api.loftschool.com/sendmail"); // метод отправки, путь до сервера
    xhr.send(formData); // - метод, выполняет ф-ю отправки указанных данных. Переводим наш объект в строку и отправляем
    xhr.addEventListener("load", () => {
      if (xhr.response.status) {
        //в случае успеха, выражение вернет true
        overlay.open();
        body.classList.add("lock");
        overlay.setContent("Сообщение отправлено");

        myForm.elements.name.value = "";
        myForm.elements.phone.value = "";
        myForm.elements.comment.value = "";
      } else {
        overlay.open();
        body.classList.add("lock");
        overlay.setContent(xhr.response.message);
      }
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.phone)) {
    valid = false;
  }
  if (!validateField(form.elements.comment)) {
    valid = false;
  }
  return valid;
}
function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

/////////////////////////////////////OVERLAY//////////////////////////////////////////

const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);
overlay.setContent("Сообщение отправлено");

function createOverlay(template) {
  const fragment = document.createElement("div"); //создаем временный контейнер

  fragment.innerHTML = template; //Помещаем во временный контейнер шаблон

  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".content");
  const closeElement = fragment.querySelector(".overlay-close");

  overlayElement.addEventListener("click", (e) => {
    if (e.target === overlayElement) {
      closeElement.click(); //эмулируем нажатие на кнопку закрыть
    }
  });

  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
    body.classList.remove("lock");
  });

  return {
    open() {
      document.body.appendChild(overlayElement);
    },
    close() {
      closeElement.click();
    },
    setContent(content) {
      contentElement.innerHTML = content;
    },
  };
}
///////////////////////reviews/////////////////////////////////////////////////////

const leftIcon = document.querySelector("#left");
const middleIcon = document.querySelector("#middle");
const rightIcon = document.querySelector("#right");
const reviewsItems = document.querySelectorAll(".reviews__item");
const links = document.querySelectorAll(".reviews__link");

var slideIndex = 1;

leftIcon.addEventListener("click", function (e) {
  e.preventDefault();
  slideIndex = 0;
  showSlides(slideIndex);
});

middleIcon.addEventListener("click", function (e) {
  e.preventDefault();
  slideIndex = 1;
  showSlides(slideIndex);
});

rightIcon.addEventListener("click", function (e) {
  e.preventDefault();
  slideIndex = 2;
  showSlides(slideIndex);
});

function showSlides(index) {
  for (var i = 0; i < reviewsItems.length; i++) {
    if (
      reviewsItems[i].classList.contains("reviews__item--active") &&
      links[i].classList.contains("reviews__link--active")
    ) {
      reviewsItems[i].classList.remove("reviews__item--active");
      links[i].classList.remove("reviews__link--active");
    }
    reviewsItems[index].classList.add("reviews__item--active");
    links[index].classList.add("reviews__link--active");
  }
}
var k = 0;
var timerId = setInterval(function () {
  showSlides(k);
  k++;
  if (k === 3) {
    k = 0;
  }
}, 3000);
