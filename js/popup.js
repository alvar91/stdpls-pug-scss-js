const popup = document.querySelector(".js-popup-call");
const closeBtn = document.querySelector(".js-close-btn");
const body = document.querySelector("body");

const hidePopup = (popup) => {
  body.style.overflow = "auto";
  popup.classList.remove("active");
};

const showPopup = (popup) => {
  body.style.overflow = "hidden";
  popup.classList.add("active");
};

const handlerActive = (event, popup) => {
  if (!event.target.closest(".js-content")) {
    hidePopup(popup);
  }
};

if (popup && closeBtn) {
  popup.addEventListener("click", (e) => handlerActive(e, popup));
  closeBtn.addEventListener("click", () => hidePopup(popup));
}

// Form popup
const popupForm = document.querySelector(".js-popup-form");
const closeBtnForm = document.querySelector(".js-close-btn-form");
const buyBtn = document.querySelector(".js-btn-buy");

if (buyBtn && popupForm && closeBtnForm) {
  buyBtn.addEventListener("click", () => showPopup(popupForm));

  popupForm.addEventListener("click", (e) => handlerActive(e, popupForm));
  closeBtnForm.addEventListener("click", () => hidePopup(popupForm));
}

// Slider popup
const popupSlider = document.querySelector(".js-popup-slider");
const closeBtnSlider = document.querySelector(".js-close-btn-slider");
const initialSlider = document.querySelector(".product-slider");

if (initialSlider && popupSlider && closeBtnSlider) {
  initialSlider.addEventListener("click", () => showPopup(popupSlider));

  popupSlider.addEventListener("click", (e) => handlerActive(e, popupSlider));
  closeBtnSlider.addEventListener("click", () => hidePopup(popupSlider));
}
