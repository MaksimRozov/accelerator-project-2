import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const sliderAdvantages = () => {

  if (window.innerWidth > 1439) {
    const advantagesCarousel = document.querySelector('.advantages__carousel');

    const cardAdvantagesClassElement = document.querySelectorAll('.card-advantages');

    cardAdvantagesClassElement.forEach((element) => {
      element.classList.add('swiper-slide');
    });

    const sliderWrapper = document.createElement('div');

    sliderWrapper.classList.add('advantages__slider', 'swiper');
    const wrapper = document.createElement('div');

    wrapper.classList.add('swiper-wrapper');

    while (advantagesCarousel.firstChild) {
      const child = advantagesCarousel.firstChild;
      wrapper.append(child);
    }

    sliderWrapper.append(wrapper);

    advantagesCarousel.append(sliderWrapper);

    const advantagesSliderElement = document.querySelector('.advantages__slider');

    if (advantagesSliderElement) {
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper(advantagesSliderElement, {
        modules: [Navigation],
        grabCursor: false,
        watchOverflow: true,
        speed: 1000,
        loop: true,

        navigation: {
          nextEl: '.advantages__carousel-next',
          prevEl: '.advantages__carousel-prev',
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
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },

      });
    }
  }
};


export { sliderAdvantages };
