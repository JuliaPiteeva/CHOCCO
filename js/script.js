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
    for (var k = 0; k < menuContentArray.length; k++) {
      menuContentArray[k].classList.remove("menu__desc-content--active");
    }
    this.nextElementSibling.classList.add("menu__desc-content--active");
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
var accordeonIitem = document.getElementsByClassName("accordeon__item");

for (var i = 0; i < teamLinkArray.length; i++) {
  teamLinkArray[i].addEventListener("click", function(e) {
    let thisActive = this.parentNode;
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
