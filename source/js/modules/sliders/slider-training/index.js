import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const trainingCarouselElement = document.querySelector('.training-carousel ');

const sliderTraining = () => {
  if (trainingCarouselElement) {
    // eslint-disable-next-line no-unused-vars
    new Swiper(trainingCarouselElement, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      navigation: {
        nextEl: '.training__button-next',
        prevEl: '.training__button-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },

      breakpoints: {
        320: {
          initialSlide: 2,
          slidesPerView: 1,
          spaceBetween: 15,

        },

        768: {
          initialSlide: 0,
          slidesPerView: 3,
          spaceBetween: 20,
          simulateTouch: false,
        },

        1440: {
          initialSlide: 0,
          slidesPerView: 4,
          spaceBetween: 20,
        }
      },

    });
  }
};


export { sliderTraining };
