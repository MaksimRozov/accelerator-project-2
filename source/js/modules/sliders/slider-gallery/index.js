import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const gallerySwiperElement = document.querySelector('.gallery__slider');

const sliderGallery = () => {
  if (gallerySwiperElement) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(gallerySwiperElement, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: true,

      navigation: {
        nextEl: '.gallery__carousel-next',
        prevEl: '.gallery__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
          allowTouchMove: true
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 5,
          allowTouchMove: true
        },

        1440: {
          enabled: false
        }
      },

    });
  }
};


export { sliderGallery };
