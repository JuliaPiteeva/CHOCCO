// Секция "hero" открытие и закрытие полноэкранного меню
const hamburgerOpen = document.querySelector(".hamburger-link");
var hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerOpen.addEventListener("click", function(e) {
  e.preventDefault();
  hamburgerMenu.style.display = "block";
});
const hamburgerClose = document.querySelector(".svg-container");
hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerClose.addEventListener("click", function() {
  hamburgerMenu.style.display = "none";
});

// Секция "slider" , кеопка состава батончика

const nutritionLink = document.querySelector(".bar__nutrition-link");
nutritionLink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("На данный момент работает только по hover");
});

// Секция "menu" аккордеон

var menulinkArray = document.getElementsByClassName("menu__link");
var menuContentArray = document.getElementsByClassName("menu__desc-content");

for (var i = 0; i < menulinkArray.length; i++) {
  menulinkArray[i].addEventListener("click", function(e) {
    e.preventDefault();
    var openDesc = this.nextElementSibling;
    openDesc.classList.toggle("menu__desc-content--active");
  });
}

var menuContentCloseArray = document.getElementsByClassName("close");
for (var i = 0; i < menuContentCloseArray.length; i++) {
  menuContentCloseArray[i].addEventListener("click", function(e) {
    var closeDesc = this.parentNode;
    var closeDesc2 = closeDesc.parentNode;
    closeDesc2.classList.remove("menu__desc-content--active");
  });
}
// Секция "team" аккордеон
var teamLinkArray = document.getElementsByClassName("accordeon__title");

for (var i = 0; i < teamLinkArray.length; i++) {
  teamLinkArray[i].addEventListener("click", function(e) {
    var openElem = this.parentNode;
    openElem.classList.toggle("accordeon--visible");
  });
}
