import {fadeIn, fadeOut} from "./fadein-fadeout.js";

const showMoreBtn = document.querySelector(".js-show-more");
const allRatingCards = document.querySelectorAll(".rating__item");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.classList.contains("js-active")) {
      allRatingCards.forEach((el) => {
        el.classList.remove("show-card");
        //fadeOut(el, 1000, "show-card");
      });

      showMoreBtn.classList.remove("js-active");
      showMoreBtn.textContent = "Смотреть больше товаров";
    } else {
      allRatingCards.forEach((el) => {
        //el.classList.add("show-card");
        fadeIn(el, 1000, "show-card");
      });

      showMoreBtn.classList.add("js-active");
      showMoreBtn.textContent = "Свернуть";
    }
  });
}
