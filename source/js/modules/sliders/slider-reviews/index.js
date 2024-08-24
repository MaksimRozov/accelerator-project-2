import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const reviewsSwiperElement = document.querySelector('.reviews__slider');

const sliderReviews = () => {
  if (reviewsSwiperElement) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(reviewsSwiperElement, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: '.reviews__carousel-next',
        prevEl: '.reviews__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
          spaceBetween: 15,

        },

        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          allowTouchMove: true

        },

        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },

    });
  }
};


export { sliderReviews };
