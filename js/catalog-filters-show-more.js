import { fadeIn, fadeOut } from "./fadein-fadeout.js";
const limitShowItems = 9;

const showMore = (el) => {
  const showMoreBtn = el.target;
  const container = showMoreBtn.closest(".js-items-container");
  const items = container.querySelectorAll(".catalog-filter__item");

  if (showMoreBtn.classList.contains("js-active")) {
    if (container) {
      items.forEach((el) => {
        el.classList.remove("show-item");
      });

      showMoreBtn.classList.remove("js-active");
      showMoreBtn.textContent = `еще +${items.length - limitShowItems}`;
    }
  } else {
    items.forEach((el) => {
      fadeIn(el, 1000, "show-item");
    });

    showMoreBtn.classList.add("js-active");
    showMoreBtn.textContent = "Скрыть";
  }
};

const allItems = document.querySelectorAll(".js-catalog-more");
allItems.forEach((el) => {
  el.addEventListener("click", (el) => showMore(el));
});
