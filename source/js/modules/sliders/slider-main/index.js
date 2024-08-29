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


    const setTabIndex = () => {
      swiperMain.slides[swiperMain.activeIndex].querySelector('a').setAttribute('tabindex', '0');
    };

    for (const link of swiperLinks) {
      link.setAttribute('tabindex', '-1');
      setTabIndex();
    }

    swiperMain.on('activeIndexChange', () => {
      for (const link of swiperLinks) {
        link.setAttribute('tabindex', '-1');
      }
      setTabIndex();
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
