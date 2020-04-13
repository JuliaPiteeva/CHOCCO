const left = document.querySelector(".left__link");
const right = document.querySelector(".right__link");
const items = document.querySelector(".slider__list");

right.addEventListener("click", function (e) {
  e.preventDefault();
  loop("right", e);
});

left.addEventListener("click", function (e) {
  e.preventDefault();
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.appendChild(items.firstElementChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}
