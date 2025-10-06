'use strict';

// Navbar Responsiveness and interactivity begins
const menuBtn = document.querySelector('.btn');
const menu = document.querySelector('header ul');
const closeBtn = document.querySelector('header ul i');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('nav-active');
});

const closeMenu = () => menu.classList.remove('nav-active');

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

document.addEventListener('click', e => {
  if (
    !menu.contains(e.target) &&
    !menuBtn.contains(e.target) &&
    !closeBtn.contains(e.target)
  ) {
    closeMenu();
  }
});
// Navbar Responsivness and interactivity ends
