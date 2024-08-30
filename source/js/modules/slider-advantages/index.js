import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const createButton = (title, addClassMain, ...secondClasses) => {
  const createButtonTag = document.createElement('button');
  createButtonTag.setAttribute('type', 'button');
  createButtonTag.innerHTML = `<span class="visually-hidden">${title}</span>`;
  createButtonTag.classList.add(`${addClassMain}`, 'arrow-style-slider__button', ...secondClasses);
  return createButtonTag;
};

const createButtonControl = () => {
  const controlPanel = document.createElement('div');
  controlPanel.classList.add('advantages__carousel-control-panel', 'arrow-style-slider');
  const buttonPrev = createButton('Назад', 'advantages__carousel-prev', 'arrow-style-slider__button', 'arrow-style-slider__button--prev');
  const buttonNext = createButton('Вперед', 'advantages__carousel-next', 'arrow-style-slider__button', 'arrow-style-slider__button--next');
  controlPanel.append(buttonPrev, buttonNext);
  return controlPanel;
};

const sliderAdvantages = () => {

  if (window.innerWidth > 1439) {
    const controlPanel = createButtonControl();
    const advantagesSwiper = document.querySelector('.advantages__swiper');
    const advantagesCarousel = document.querySelector('.advantages__carousel');
    const cardAdvantagesClassElement = document.querySelectorAll('.card-advantages');
    const fragmentElement = document.createDocumentFragment();
    advantagesSwiper.append(controlPanel);

    cardAdvantagesClassElement.forEach((element) => {
      element.classList.add('advantages__item', 'swiper-slide');
      const copySlide = element.cloneNode(true);
      fragmentElement.appendChild(copySlide);
    });

    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('advantages__slider', 'swiper');

    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-wrapper');

    while (advantagesCarousel.firstChild) {
      const children = advantagesCarousel.firstChild;
      wrapper.append(children, fragmentElement);
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
          1440: {
            enabled: true,
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true,
            slidesPerView: 'auto',
            slidesPerGroup: 2,
            initialSlide: 3,
          }
        },

      });
    }
  }
};


export { sliderAdvantages };
