import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const toursSwiperElement = document.querySelector('.tours__swiper');

const sliderTours = () => {
  if (toursSwiperElement) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(toursSwiperElement, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      navigation: {
        nextEl: '.tours__carousel-next',
        prevEl: '.tours__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
          spaceBetween: 15,

        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
          simulateTouch: false,

        },

        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },

    });
  }
};

export { sliderTours };
