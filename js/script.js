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

const nutritionLink = document.querySelectorAll(".bar__nutrition-link");
const nutritionShow = document.querySelectorAll(".nutrition");

for (var i = 0; i < nutritionLink.length; i++) {
  nutritionLink[i].addEventListener("click", function(event) {
    event.preventDefault();
    // this.nextElementSibling.classList.toggle("nutrition--active");
  });
}

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
// Секция Slider
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const items = document.querySelector(".slider__list");

// right.addEventListener("click", function(e) {
//   loop("right", e);
// });

// left.addEventListener("click", function(e) {
//   loop("left", e);
// });

// function loop(direction, e) {
//   e.preventDefault();
//   if (direction === "right") {
//     items.appendChild(items.firstElementChild);
//   } else {
//     items.insertBefore(items.lastElementChild, items.firstElementChild);
//   }
// }

const minRight = 0;
const maxRight = 930;
const step = 930;

let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function(e) {
  e.preventDefault();

  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
  // else {
  //   loop("right", e);
  // }
});

left.addEventListener("click", function(e) {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }
  //  else {
  //   loop("left", e);
  // }
});
