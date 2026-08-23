import Swiper from "swiper";
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const mobileBreakpoint = window.matchMedia ('(min-width: 768px)');
let menuInstance = undefined;

function initOrDestroySwiper () {
  if (mobileBreakpoint.matches) {
    if (menuInstance !== undefined) {
      menuInstance.destroy(true, true);
      menuInstance = undefined;
    }
  } else {
    if (menuInstance === undefined) {
      menuInstance = new Swiper ('.menu-list', {
        modules: [Pagination, Autoplay],
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 3000
        },
        // pagination: {
        //   el: '.menu-list .swiper-pagination',
        //   clickable: true,
        // },
      });
    }
  }
}
initOrDestroySwiper();
mobileBreakpoint.addEventListener('change', initOrDestroySwiper);


let brandsInstance = undefined;

function initOrDestroyBrandsSwiper () {
  if (mobileBreakpoint.matches) {
    if (brandsInstance !== undefined) {
      brandsInstance.destroy(true, true);
      brandsInstance = undefined;
    }
  } else {
    if (brandsInstance === undefined) {
      brandsInstance = new Swiper ('.brands__list', {
        modules: [Pagination, Autoplay],
        slidesPerView: 1.5,
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.brands__list .swiper-pagination',
          clickable: true,
        },
      });
    }
  }
}
initOrDestroyBrandsSwiper();
mobileBreakpoint.addEventListener('change', initOrDestroyBrandsSwiper);


let devicesInstance = undefined;

function initOrDestroyDevicesSwiper () {
  if (mobileBreakpoint.matches) {
    if (devicesInstance !== undefined) {
      devicesInstance.destroy(true, true);
      devicesInstance = undefined;
    }
  } else {
    if (devicesInstance === undefined) {
      devicesInstance = new Swiper ('.swiper-devices', {
        modules: [Pagination, Autoplay],
        slidesPerView: 1.5,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-devices .swiper-pagination',
          clickable: true,
        },
      });
    }
  }
}
initOrDestroyDevicesSwiper();
mobileBreakpoint.addEventListener('change', initOrDestroyDevicesSwiper);

let pricesInstance = undefined;

function initOrDestroyPricesSwiper () {
  if (mobileBreakpoint.matches) {
    if (pricesInstance !== undefined) {
      pricesInstance.destroy(true, true);
      pricesInstance = undefined;
    }
  } else {
    if (pricesInstance === undefined) {
      pricesInstance = new Swiper ('.prices__list', {
        modules: [Pagination, Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.prices__list .swiper-pagination',
          clickable: true,
        },
      });
    }
  }
}
initOrDestroyPricesSwiper();
mobileBreakpoint.addEventListener('change', initOrDestroyPricesSwiper);
