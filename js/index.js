import Choices from "choices.js";
import Swiper from "swiper/bundle";
import noUiSlider from "nouislider";

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const choices = new Choices("[data-trigger]", {
    searchEnabled: false,
    itemSelectText: "",
  });

  const selectchoices = new Choices("#header-bottom__select", {
    searchEnabled: false,
    itemSelectText: "",
  });

  const swiperPromo = new Swiper(".js-promo-swiper", {
    direction: "horizontal",
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },

    // autoplay: {
    //   delay: 3000,
    // },
  });

  const offersSwiper = new Swiper(".js-special-offers-swiper", {
    direction: "horizontal",
    slidesPerColumn: 1,
    slidesPerView: "auto",
    spaceBetween: 32,

    navigation: {
      nextEl: ".js-special-offers-next",
      prevEl: ".js-special-offers-prev",
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
      },
      570: {
        slidesPerGroup: 2,
      },
      1023: {
        slidesPerGroup: 3,
      },
    },
  });

  const usefulSwiper = new Swiper(".useful__swiper.swiper-container", {
    direction: "horizontal",
    slidesPerColumn: 1,
    slidesPerView: "auto",
    spaceBetween: 32,

    navigation: {
      nextEl: ".useful__button_next",
      prevEl: ".useful__button_prev",
    },

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        spaceBetween: 16,
      },
      570: {
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1023: {
        slidesPerGroup: 3,
      },
    },
  });

  const catalogSwiper = new Swiper(
    ".swiper-container.catalog_products__field",
    {
      direction: "horizontal",
      slidesPerColumnFill: "row",

      breakpoints: {
        1: {
          slidesPerGroup: 2,
          slidesPerColumn: 3,
          spaceBetween: 16,
          slidesPerView: 2,
        },

        767: {
          slidesPerGroup: 2,
          slidesPerColumn: 3,
          spaceBetween: 32,
          slidesPerView: 2,
        },

        1023: {
          slidesPerGroup: 3,
          slidesPerColumn: 3,
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },

      pagination: {
        el: ".catalog_pagination.swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    }
  );

  const productSwiper = new Swiper(".swiper-container.product__swiper", {
    direction: "horizontal",

    breakpoints: {
      300: {
        slidesPerGroup: 2,
        slidesPerColumn: 1,
        slidesPerView: "auto",
        spaceBetween: 16,
      },

      767: {
        slidesPerGroup: 2,
        slidesPerColumn: 1,
        slidesPerView: "auto",
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: ".product__button_next",
      prevEl: ".product__button_prev",
    },
  });

  const modalSwiperThumbs = new Swiper(".swiper-container.slider__thumbs", {
    direction: "horizontal",

    breakpoints: {
      319: {
        spaceBetween: 63,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      400: {
        spaceBetween: 78,
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      769: {
        spaceBetween: 78,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },

      1230: {
        spaceBetween: 78,
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },

    navigation: {
      nextEl: ".slider__thumbs_next",
      prevEl: ".slider__thumbs_prev",
    },
  });

  const modalSwiper = new Swiper(".swiper-container.modal__slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    slidesPerGroup: 1,

    thumbs: {
      swiper: modalSwiperThumbs,
    },
  });


  const showMoreBtn = document.querySelector(".js-show-more");
  const allRatingCards = document.querySelectorAll(".rating__item");

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      if (showMoreBtn.classList.contains("js-active")) {
        allRatingCards.forEach((el) => {
          el.classList.remove("show-card");
        });

        showMoreBtn.classList.remove("js-active");
        showMoreBtn.textContent = "Смотреть больше товаров";
      } else {
        allRatingCards.forEach((el) => {
          el.classList.add("show-card");
        });

        showMoreBtn.classList.add("js-active");
        showMoreBtn.textContent = "Свернуть";

      }
    });
  }

  const rangeSlider = document.querySelector(".fiter__range");
  const rangeInputs = document.querySelectorAll(".input_number");

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [2000, 250000],
      connect: true,
      step: 25000,
      keyboardSupport: true,
      range: {
        min: [2000],
        max: [250000],
      },
    });

    rangeSlider.noUiSlider.on("update", (values, handle) => {
      rangeInputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (index, value) => {
      let arr = [null, null];
      arr[index] = value;

      rangeSlider.noUiSlider.set(arr);
    };

    rangeInputs.forEach((item, i) => {
      item.addEventListener("change", (e) => {
        setRangeSlider(i, e.currentTarget.value);
      });
    });
  }

  const handles = document.querySelectorAll(".noUi-handle");
  const noUiLine = document.querySelector(".noUi-connect");

  handles.forEach((el) => {
    el.addEventListener("focus", () => {
      noUiLine.style.background = "#7033ac";
    });
  });

  handles.forEach((el) => {
    el.addEventListener("blur", () => {
      noUiLine.style.background = "#a65cf0";
    });
  });

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

  const feedbackName = document.querySelector(".feedback__name");
  const nameAlert = document.querySelector(".name_alert");
  const feedbackForm = document.querySelector(".feedback__form");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (feedbackName.value.match(/\w/g)) {
        nameAlert.style.color = "#ff6972";
        feedbackName.classList.add("alert");
      } else {
        nameAlert.style.color = "transparent";
        feedbackName.classList.remove("alert");
        feedbackForm.reset();
        modalField.classList.add("active");
        disableScroll();
        setTimeout(() => {
          modalField.classList.remove("active");
          anableScroll();
        }, 3000);
      }
    });
  }

  const filterOpen = document.querySelectorAll(".filters__open_btn");
  const filterDropdown = document.querySelectorAll(".tablet_filter__inner");

  filterOpen.forEach((item, i) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      filterDropdown[i].classList.toggle("active");
    });
  });

  const checkboxIinputs = document.querySelectorAll(".filter_checkbox");
  const optionsField = document.querySelector(".catalog__options");
  const checkboxName = document.querySelectorAll(".checkbox_name");
  const checkboxCost = document.querySelectorAll(".checkbox_cost");

  const openHiddenFilters = (btnSelector, hiddenCategory, string) => {
    const button = document.querySelectorAll(btnSelector);
    const hiddenCheckboxes = document.querySelectorAll(hiddenCategory);
    if (button) {
      button.forEach((element) => {
        element.addEventListener("click", () => {
          element.classList.toggle("active");
          if (element.classList.contains("active")) {
            element.textContent = "Свернуть";
          } else {
            element.textContent = string;
          }
          let toggleSelector = hiddenCategory.slice(1);
          hiddenCheckboxes.forEach((item) => {
            item.classList.toggle(toggleSelector);
          });
        });
      });
    }
  };

  openHiddenFilters(
    ".filter__category__btn",
    ".filter_category__hidden",
    "+ еще 12"
  );
  openHiddenFilters(".filter__color__btn", ".filter__color_hidden", "+ еще 7");

  class Option {
    constructor(selector, checkboxName, parentSelector) {
      this.selector = selector;
      this.checkboxName = checkboxName;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const el = document.createElement("span");
      el.classList.add(this.selector);
      el.innerHTML = `${this.checkboxName}
          <button class="catalog__option_btn btn_reset">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.42872 0.238643L6.75487 5.42386C7.08171 5.74206 7.08171 6.25794 6.75487 6.57614L1.42872 11.7614C1.10188 12.0795 0.571969 12.0795 0.245129 11.7614C-0.0817098 11.4432 -0.0817098 10.9273 0.24513 10.6091L4.97949 6L0.24513 1.39091C-0.0817089 1.07272 -0.0817089 0.556834 0.24513 0.238643C0.57197 -0.0795478 1.10188 -0.0795477 1.42872 0.238643Z" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.5713 0.238643L5.24513 5.42386C4.91829 5.74206 4.91829 6.25794 5.24513 6.57614L10.5713 11.7614C10.8981 12.0795 11.428 12.0795 11.7549 11.7614C12.0817 11.4432 12.0817 10.9273 11.7549 10.6091L7.02051 6L11.7549 1.39091C12.0817 1.07272 12.0817 0.556834 11.7549 0.238643C11.428 -0.0795478 10.8981 -0.0795477 10.5713 0.238643Z" />
            </svg>
          </button>`;
      this.parent.append(el);
    }
  }

  const checkedFalse = () => {
    checkboxIinputs.forEach((item) => (item.checked = false));
  };

  checkboxIinputs.forEach((item, i) => {
    item.addEventListener("click", () => {
      let currentName;
      checkboxName.forEach((item) => {
        if (item) {
          currentName = checkboxName[i].textContent;
        }
      });

      if (item.checked == true) {
        if (item.classList.contains("checkbox_category")) {
          new Option("lime_color", currentName, ".catalog__options").render();
        } else if (item.classList.contains("checkbox_sale")) {
          new Option(
            "pink_violet_color",
            currentName,
            ".catalog__options"
          ).render();
        } else if (item.classList.contains("checkbox_color")) {
          new Option("md_grey", currentName, ".catalog__options").render();
        }
      }
      setTimeout(checkedFalse, 3000);
    });
  });

  checkboxCost.forEach((item) => {
    item.addEventListener("change", () => {
      const inputValue = item.value;
      const el = document.createElement("span");
      el.classList.add("bone_color");
      el.innerHTML = `До ${inputValue}
          <button class="catalog__option_btn btn_reset">
            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.42872 0.238643L6.75487 5.42386C7.08171 5.74206 7.08171 6.25794 6.75487 6.57614L1.42872 11.7614C1.10188 12.0795 0.571969 12.0795 0.245129 11.7614C-0.0817098 11.4432 -0.0817098 10.9273 0.24513 10.6091L4.97949 6L0.24513 1.39091C-0.0817089 1.07272 -0.0817089 0.556834 0.24513 0.238643C0.57197 -0.0795478 1.10188 -0.0795477 1.42872 0.238643Z" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.5713 0.238643L5.24513 5.42386C4.91829 5.74206 4.91829 6.25794 5.24513 6.57614L10.5713 11.7614C10.8981 12.0795 11.428 12.0795 11.7549 11.7614C12.0817 11.4432 12.0817 10.9273 11.7549 10.6091L7.02051 6L11.7549 1.39091C12.0817 1.07272 12.0817 0.556834 11.7549 0.238643C11.428 -0.0795478 10.8981 -0.0795477 10.5713 0.238643Z" />
            </svg>
          </button>`;
      document.querySelector(".catalog__options").append(el);
      item.value = "";
    });
  });

  if (optionsField) {
    optionsField.addEventListener("click", (e) => {
      const target = e.target.parentElement;
      if (
        target.classList.contains("catalog__option_btn") ||
        target.tagName == "svg"
      ) {
        target.closest("span").remove();
      }
    });
  }

  const modalForm = document.querySelector(".modal__form");
  const modalThank = document.createElement("div");
  const modalWindow = document.querySelector(".modal");
  const modalInner = document.querySelector(".modal__inner");
  const productBtn = document.querySelector(".product__btn");
  const modalField = document.querySelector(".modal__field");
  const body = document.querySelector("body");
  const modalCloseBtn = document.querySelector(".modal__close_btn");
  const productImg = document.querySelector(".product__main_img");
  const modalSlider = document.querySelector(".modal__slider__field");
  const modalSliderCloseBtn = document.querySelector(".modal__slider__btn");
  const modalSliderField = document.querySelector(".modal__slider__field");
  const modalFixed = document.querySelectorAll(".fixed");

  const disableScroll = () => {
    const scrollWidth = window.innerWidth - document.body.clientWidth + "px";
    body.style.overflow = "hidden";
    modalFixed.forEach((el) => {
      el.paddingRight = scrollWidth;
    });
    document.body.style.paddingRight = scrollWidth;
  };

  const anableScroll = () => {
    body.style.overflow = "auto";
    modalFixed.forEach((el) => {
      el.paddingRight = 0;
    });
    document.body.style.paddingRight = 0;
  };

  if (productImg) {
    productImg.addEventListener("click", () => {
      modalSlider.classList.toggle("hidden");
      disableScroll();
    });
  }

  if (modalSliderCloseBtn) {
    modalSliderCloseBtn.addEventListener("click", () => {
      modalSlider.classList.toggle("hidden");
      anableScroll();
    });
  }

  if (modalSliderField) {
    modalSliderField.addEventListener("click", (e) => {
      const target = e.target;
      if (target == modalSliderField) {
        modalSlider.classList.toggle("hidden");
        anableScroll();
      }
    });
  }

  if (productBtn) {
    productBtn.addEventListener("click", () => {
      modalField.classList.add("active");
      disableScroll();
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      modalField.classList.remove("active");
      anableScroll();
    });
  }

  if (modalField) {
    modalField.addEventListener("click", (e) => {
      if (e.target == modalField) {
        modalField.classList.remove("active");
        anableScroll();
      }
    });
  }

  modalThank.classList.add("modal__thank");
  modalThank.innerHTML = `<div class="modal__thank__img">
    <svg viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.08411 20.6446C9.11043 20.6446 9.86916 17.0981 9.86916 14.2587C10.3474 14.2587 14.1267 14.2587 15.8505 14.2587C25.2271 14.2587 25.2295 0.96875 16.1495 0.96875C13.6798 0.96875 12.0891 2.46863 11.6633 2.99113C6.59708 2.99113 5.98131 5.64294 5.98131 10.792C5.98131 11.7854 5.98131 15.0144 5.98131 15.5118C5.98131 16.7225 5.49563 17.508 4.18662 17.508C3.06901 17.508 2.53967 16.5166 2.09316 15.1254C1.86049 15.2506 0.22669 16.1359 0 16.281C0.494354 17.6708 1.0237 20.6446 5.08411 20.6446ZM10.7765 8.76935C12.3104 8.76935 12.4408 11.0806 10.668 11.0806C9.17353 11.0806 9.21241 8.76935 10.7765 8.76935ZM16.1498 15.6955C14.8534 15.6955 11.0654 15.4143 11.0654 15.4143V22.5398L14.6542 22.5912L15.5514 17.4367L26.9159 17.2228L27.2153 22.8741L31.4022 22.9257C31.4022 22.9257 32 11.8567 32 9.63608C32 5.51717 30.1604 3.18592 26.0187 2.99113C24.9809 2.94236 23.6232 2.74842 22.729 2.70221C26.6267 7.45342 23.5254 15.6955 16.1498 15.6955ZM23.3274 18.5846L23.6262 22.7714L26.0187 22.823L25.7196 18.5846H23.3274ZM15.8505 22.6431L18.243 22.6944L18.8408 18.5846H16.7474L15.8505 22.6431Z" fill="#FF862F"/>
    </svg>
    </div>
    <div class="modal__thank__text">Спасибо, мы вам перезвоним!</div>`;

  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      modalWindow.prepend(modalThank);
      modalWindow.classList.add("thank");
      modalInner.style.display = "none";

      setTimeout(() => {
        modalThank.remove();
        modalWindow.classList.remove("thank");
        modalInner.style.display = "block";
        modalForm.reset();
        modalField.classList.remove("active");
        anableScroll();
      }, 3000);
    });
  }

  const map = document.getElementById("map");

  if (map) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map(
          "map",
          {
            center: [55.75, 37.62],
            zoom: 14,
          },
          {
            searchControlProvider: "yandex#search",
          }
        ),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemarkWithContent = new ymaps.Placemark(
          [55.752831393462664, 37.63848494650637],
          {
            balloonContent: `
          <div class="balloon">
          <h4>SitDownPls на Солянке </h4>
          <address>м. Китай-город, ул. Солянка, д.24</address>
          <a href="tel:+74958854547" class="tel_number">
            <svg width="100%" height="100%" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z" />
            </svg>
            <span>+7 (495) 885-45-47</span>
          </a>
          <div class="worktime">
            <span class="grey_text">Часы работы:</span>
            с 10:00 до 21:00
          </div>
          <div class="balloon__descr">
            <span class="grey_text">Что здесь:</span>
            шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
          </div>
        </div>
        `,
          },
          {
            iconLayout: "default#imageWithContent",
            iconImageHref: "./img/svg/mapIcon.svg",
            iconImageSize: [32, 22],
            iconImageOffset: [-20, 0],
            iconContentOffset: [0],
            iconContentLayout: MyIconContentLayout,
          }
        );

      const myPlacemark = new ymaps.Placemark(
        [55.76147157505062, 37.65023838640963],
        {
          balloonContent: "Второй баллун",
        },
        {
          iconLayout: "default#imageWithContent",
          iconImageHref: "./img/svg/mapIcon.svg",
          iconImageSize: [32, 22],
          iconImageOffset: [-20, 0],
          iconContentOffset: [0],
          iconContentLayout: MyIconContentLayout,
        }
      );

      myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
    });
  }
});
