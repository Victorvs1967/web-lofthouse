const MENU_OPENED_CLASS = 'mobile__menu_opened';

// Burger menu support
const body = document.querySelector('body'),
  control = document.querySelector('.burger-menu__control'),
  burger = document.querySelector('.burger__open'),
  close = document.querySelector('.burger__close'),
  header = document.querySelector('.header__top'),
  logo = document.querySelector('.header__top_logo'),
  links = document.querySelectorAll('.header__top_nav_menu-item');

let menu_opened = false;

const openMenu = () => {
  menu_opened = true;
  body.classList.add(MENU_OPENED_CLASS);
  burger.style.display = 'none';
  close.style.display = 'block';
  header.classList.add('mobile-nav');
};

const closeMenu = () => {
  menu_opened = false;
  body.classList.remove(MENU_OPENED_CLASS);
  burger.style.display = 'block';
  close.style.display = 'none';
  header.classList.remove('mobile-nav');
};

export const burgerMenu = () => {
  control.addEventListener('click', () => menu_opened ? closeMenu() : openMenu());
  // control.addEventListener('click', () => body.clasList.contains(MENU_OPENED_CLASS) ? closeMenu() : openMenu());
  // logo.addEventListener('click', () => closeMenu());
  [ logo, ...links ].forEach(link => link.addEventListener('click', () => closeMenu()));
};