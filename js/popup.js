const popup = document.querySelector(".js-popup-call");
const closeBtn = document.querySelector(".js-close-btn");
const body = document.querySelector("body");

const hidePopup = () => {
  body.style.overflow = "auto";
  popup.classList.remove("active");
};

const showPopup = () => {
  body.style.overflow = "hidden";
  popup.classList.add("active");
};

const handlerActive = (event) => {
  if (!event.target.closest(".js-content")) {
    hidePopup();
  }
};

if (popup && closeBtn) {
  popup.addEventListener("click", handlerActive);
  closeBtn.addEventListener("click", hidePopup);
}
