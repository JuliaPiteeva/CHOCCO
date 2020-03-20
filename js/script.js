const hamburgerOpen = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerOpen.addEventListener("click", function() {
  hamburgerMenu.style.display = "block";
});
const hamburgerClose = document.querySelector(".hamburger-menu__close");
hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerClose.addEventListener("click", function() {
  hamburgerMenu.style.display = "none";
});
