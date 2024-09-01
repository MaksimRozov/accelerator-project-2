import { sliderMain } from './modules/sliders/slider-main';
import { initNav } from './modules/menu-mobile';
import { sliderTours } from './modules/sliders/slider-tours';
import { sliderTraining } from './modules/sliders/slider-training';
import { sliderReviews } from './modules/sliders/slider-reviews';
import { sliderGallery } from './modules/sliders/slider-gallery';
import { sliderAdvantages } from './modules/slider-advantages';
import { validateForm } from './modules/form';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    sliderMain();
    initNav();
    sliderTours();
    sliderTraining();
    sliderReviews();
    sliderGallery();
    sliderAdvantages();
    validateForm();
  });
});
