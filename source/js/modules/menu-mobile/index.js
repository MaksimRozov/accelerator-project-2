import { bodyElement, menuElement, buttonBurger, menuLinks } from './variables';

const toggleClass = () => {
  const isOpen = menuElement.classList.toggle('main-header__navigation--open');
  bodyElement.classList.toggle('page__body--lock', isOpen);
  buttonBurger.classList.toggle('main-header__burger--open', isOpen);
};

const removeClass = () => {
  menuElement.classList.remove('main-header__navigation--open');
  bodyElement.classList.remove('page__body--lock');
  buttonBurger.classList.remove('main-header__burger--open');
};

const initNav = () => {
  if (!buttonBurger) {
    return;
  }

  buttonBurger.addEventListener('click', toggleClass);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      removeClass();
    });
  });
};

export { initNav };
