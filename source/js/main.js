// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


import { mainSlider } from './modules/sliders/main-slider';
import { initNav } from './modules/menu-mobile';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    mainSlider();
    initNav();
  });
});
