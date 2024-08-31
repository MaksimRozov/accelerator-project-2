const bodyElement = document.querySelector('.page__body');
const headerElement = document.querySelector('.main-header');
const menuElement = headerElement.querySelector('.menu');
const buttonBurger = headerElement?.querySelector('.main-header__burger');
const menuLinks = headerElement?.querySelectorAll('.menu__link');


const initNav = () => {
  if (!headerElement || !buttonBurger || !menuLinks) {
    return;
  }

  const toggleNav = () => {
    const isOpen = menuElement.classList.toggle('main-header__navigation--open');
    bodyElement.classList.toggle('page__body--lock', isOpen);
    buttonBurger.classList.toggle('main-header__burger--open', isOpen);
  };

  buttonBurger.addEventListener('click', toggleNav);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuElement.classList.remove('main-header__navigation--open');
      bodyElement.classList.remove('page__body--lock');
      buttonBurger.classList.remove('main-header__burger--open');
    });
  });
};

export { initNav };
