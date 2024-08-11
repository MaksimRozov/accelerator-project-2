import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const mainCarousel = document.querySelector('.main-carousel');

const mainSlider = () => {
  if (mainCarousel) {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(mainCarousel, {
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
        bulletElement: 'button type="button"'
      },

    });
  }
};


export { mainSlider };
