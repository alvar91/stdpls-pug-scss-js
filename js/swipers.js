import Swiper from "swiper/bundle";
// import ProgressBar from "progressbar.js";

const duration = 3000;

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
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className} js-bullet-promo">
        <svg class="swiper-pagination-progress" viewbox="-2 -2 20 20">
          <circle class="swiper-pagination-progress__background" r="7" cx="7" cy="7" fill="none" />
          <circle class="swiper-pagination-progress__circle" r="7" cx="7" cy="7" fill="none"/>
        </svg>
      </button>`;
    },
  },

  autoplay: {
    delay: duration,
  },
});

const promoBullets = document.querySelectorAll(".js-bullet-promo");

// const progressBars = Array.from(promoBullets).map((node) => {
//   return new ProgressBar.Circle(node, {
//     strokeWidth: 10,
//     easing: "easeInOut",
//     duration: duration,
//     color: "#FF862F",
//     trailColor: "#FFF",
//     trailWidth: 10,
//     svgStyle: null,
//   });
// });

swiperPromo.on("slideChangeTransitionStart", function () {
  //progressBars[swiperPromo.realIndex].animate(1.0);
});

swiperPromo.on("slideChangeTransitionEnd", function () {
  // progressBars.forEach((item, index) => {
  //   if (index !== swiperPromo.realIndex) {
  //     item.animate(0);
  //   }
  // });
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

const usefulSwiper = new Swiper(".js-useful-swiper", {
  direction: "horizontal",
  slidesPerColumn: 1,
  slidesPerView: "auto",
  spaceBetween: 32,

  navigation: {
    nextEl: ".js-useful-next",
    prevEl: ".js-useful-prev",
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

const catalogSwiper = new Swiper(".js-catalog-products-swiper", {
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
});

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





const productSliderNav = new Swiper('.slider-nav', {
  slideClass: 'slider-nav__item',
  direction: 'horizontal',
  freeMode: true,
  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    890: {
      spaceBetween: 20,
      slidesPerView: 'auto',
    },
    695: {
      slidesPerView: 'auto',
      direction: 'vertical',
      spaceBetween: 20,
    },
    320: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  }
});

const productSlider = new Swiper('.product-slider', {
  slideClass: 'product-slider__item',
  slidesPerView: 1,
  initialSlide: 4,
  spaceBetween: 10,
  mousewheel: true,
  grabCursor: true,
  thumbs: {
    swiper: productSliderNav
  }
});