const burger = document.querySelector(".js-burger");
const headerNav = document.querySelector(".header__nav");

function closeMenu() {
  burger.classList.remove("active");
  headerNav.classList.remove("active");
}

function openMenu() {
  burger.classList.add("active");
  headerNav.classList.add("active");
}

if (burger) {
  document.body.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.closest(".active")) {
      closeMenu();
    }
  });

  burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  window.addEventListener("resize", () => {
    closeMenu();
  });
}
