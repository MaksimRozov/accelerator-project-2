import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const mainCarouselElement = document.querySelector('.main-carousel');
const swiperLinks = mainCarouselElement.querySelectorAll('a[href]');


const sliderMain = () => {
  if (mainCarouselElement) {
    // eslint-disable-next-line no-unused-vars
    const swiperMain = new Swiper(mainCarouselElement, {
      modules: [Pagination],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: true,
      pagination: {
        el: '.main-carousel__pagination',
        bulletClass: 'main-carousel__dots',
        bulletActiveClass: 'main-carousel__dots--active',
        clickable: true,
        bulletElement: 'button type="button" tabindex="0"'
      },

    });

    const bulletElements = document.querySelectorAll('.main-carousel__dots');

    bulletElements.forEach((button, index) => {
      button.innerHTML = `<span class="visually-hidden">Переход на слайдер номер ${index + 1}</span>`;
    });

    const setTabIndex = (activeIndex) => {
      swiperLinks.forEach((link, index) => {
        link.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
      });
    };

    // Устанавливаем tabindex для первого слайда по умолчанию
    setTabIndex(swiperMain.activeIndex);

    swiperMain.on('activeIndexChange', () => {
      setTabIndex(swiperMain.activeIndex);
    });

  }
};


// for (const link of swiperLinks) {
//   link.setAttribute('tabindex', '-1');
//   setTabIndex();
// }

// swiper.on('activeIndexChange', () => {
//   for (const link of swiperLinks) {
//     link.setAttribute('tabindex', '-1');
//   }
//   setTabIndex();
// });


export { sliderMain };
