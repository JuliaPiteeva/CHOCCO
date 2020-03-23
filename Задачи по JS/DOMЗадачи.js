const element = document.createElement("div"); /////////Задание 1
document.body.appendChild(element);
element.textContent = "Этот элемент создан при помощи DOM API";

const element2 = document.createElement("div"); /////////Задание 2
element2.classList.add("inner");
element2.textContent = "Этот элемент тоже создан при помощи DOM API";
element.appendChild(element2);
element2.style.color = "red"; /////////Задание 3

const element3 = document.createElement("div"); /////////Задание 4
document.body.appendChild(element3);
element3.textContent = "Этот элемент создан при помощи DOM API";
element3.addEventListener("click", function() {
  console.log("Этот текст говорит о том, что я всё сделал правильно");
});

const element4 = document.createElement("a"); /////////Задание 5
element4.href = "https://loftschool.com";
document.body.appendChild(element4);
element4.textContent = "Ссылка";

element4.addEventListener("click", function() {
  event.preventDefault();
  console.log(event);
  console.log("Я кликнул на ссылку " + element4.href);
});

const input = document.createElement("input"); /////////Задание 6
document.body.appendChild(input);

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Нажми";
button.addEventListener("click", function() {
  event.preventDefault();
  console.log(input.value);
});

/////////Задание 7 SLIDER

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

var currentValue;

right.addEventListener("click", function() {
  event.preventDefault();
  currentValue = getComputedStyle(items).marginLeft; //извлекаем текущее значение левого отступа
  let parsed = parseInt(currentValue, 10); // переводим в десяточное число
  let currentValueAbs = Math.abs(parsed); //модуль

  if (currentValueAbs < 500) {
    // не допускаем увеличение отступа больше 500px
    var marginLeftNumber = currentValueAbs + 100; //суммируем текущее значение с шагом 100
    var marginLeft = "-" + marginLeftNumber + "px"; // склеиваем в строку
    items.style.marginLeft = marginLeft; // передаем новое значение отступа
  }

  // напишите здесь код, который сдвигает items на 100px вправо
  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
});

left.addEventListener("click", function() {
  event.preventDefault();
  currentValue = getComputedStyle(items).marginLeft;
  console.log(currentValue); //извлекаем текущее значение левого отступа
  let parsed = parseInt(currentValue, 10); // переводим в десяточное число
  let currentValueAbs = Math.abs(parsed); //модуль

  if (currentValueAbs > 0) {
    // не допускаем увеличение отступа больше 500px
    var marginLeftNumber = currentValueAbs - 100; //убавляем текущее значение с шагом 100
    var marginLeft = "-" + marginLeftNumber + "px"; // склеиваем в строку
    items.style.marginLeft = marginLeft; // передаем новое значение отступа
  }
  // напишите здесь код, который сдвигает items на 100px влево
  // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
});
