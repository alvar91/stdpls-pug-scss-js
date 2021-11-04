import Swiper from "swiper/bundle";
// import ProgressBar from "progressbar.js";

const duration = 3000;

const swiperPromo = new Swiper(".js-promo-swiper", {
  resizeObserver: true,
  updateOnWindowResize: true,
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
  resizeObserver: true,
  updateOnWindowResize: true,
  direction: "horizontal",
  slidesPerColumn: 1,
  slidesPerView: "auto",
  spaceBetween: 32,
  autoHeight: true,

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
  resizeObserver: true,
  updateOnWindowResize: true,
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
  resizeObserver: true,
  updateOnWindowResize: true,
  direction: "horizontal",
  slidesPerColumnFill: "row",

  breakpoints: {
    1: {
      slidesPerGroup: 2,
      slidesPerColumn: 3,
      spaceBetween: 16,
      slidesPerView: 2
    },
    768: {
      slidesPerGroup: 3,
      slidesPerColumn: 3,
      spaceBetween: 32,
      slidesPerView: 2
    },
    1030: {
      slidesPerGroup: 3,
      slidesPerColumn: 3,
      slidesPerView: 3,
      spaceBetween: 32
    },
    1080: {
      slidesPerGroup: 3,
      slidesPerColumn: 3,
      spaceBetween: 32,
      slidesPerView: 3
    },
    1920: {
      slidesPerGroup: 3,
      slidesPerColumn: 3,
      slidesPerView: 3,
      spaceBetween: 35
    }
  },

  pagination: {
    el: ".catalog-pagination.swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const productSliderNav = new Swiper(".slider-nav", {
  resizeObserver: true,
  updateOnWindowResize: true,
  slideClass: "slider-nav__item",
  direction: "horizontal",
  freeMode: true,
  breakpoints: {
    1025: {
      direction: "horizontal",
      slidesPerView: 4,
      spaceBetween: 20,
    },
    890: {
      direction: "vertical",
      spaceBetween: 20,
      slidesPerView: 4,
    },
    695: {
      slidesPerView: 4,
      direction: "vertical",
      spaceBetween: 20,
    },
    320: {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 5,
    },
  },
});

const productSlider = new Swiper(".product-slider", {
  resizeObserver: true,
  updateOnWindowResize: true,
  slideClass: "product-slider__item",
  slidesPerView: 1,
  initialSlide: 4,
  spaceBetween: 10,
  mousewheel: true,
  grabCursor: true,
  thumbs: {
    swiper: productSliderNav,
  },
});

const sliderThumbs = new Swiper('.modal-thumbs__slider-container', {
  resizeObserver: true,
  updateOnWindowResize: true,
  slideClass: 'modal-thumbs__slide',
  spaceBetween: 10,
  direction: 'horizontal',
  freeMode: true,
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    695: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: ".js-slider-next",
    nextEl: ".js-slider-prev",
  },
});

const sliderImages = new Swiper('.modal-slider__container', {
  resizeObserver: true,
  updateOnWindowResize: true,
  slideClass: 'modal-slider__item',
  slidesPerView: 1,
  initialSlide: 4,
  spaceBetween: 10,
  mousewheel: true,
  navigation: {
    nextEl: '.modal-thumbs__btn-next',
    prevEl: '.modal-thumbs__btn-prev',
  },
  grabCursor: true,
  thumbs: {
    swiper: sliderThumbs
  },
});

const productSwiper = new Swiper(".js-product-swiper", {
  resizeObserver: true,
  updateOnWindowResize: true,
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
    nextEl: ".js-product-next",
    prevEl: ".js-product-prev",
  },
});
