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

const nutritionLink = document.querySelector(".bar__nutrition-link");
nutritionLink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("На данный момент работает только по hover");
});
