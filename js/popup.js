const closeBtn = document.querySelector("js-close-btn");
const popup = document.querySelector(".js-popup-call");

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
})