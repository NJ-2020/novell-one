const menuToggle = document.querySelector('.menu_toggle');
const navul = document.querySelector('nav ul');
const body = document.querySelector('body');
const menuLink = document.querySelector('nav ul li a');
const main = document.querySelector('.main');
const navbar = document.querySelector('nav');
const imgClose = document.querySelector('.img-close');
const imgOpen = document.querySelector('.img-open');

menuToggle.addEventListener("click", () => {
  navul.classList.toggle('active');
  menuToggle.classList.toggle('active');
  body.classList.toggle('stop-scrolling');
  main.classList.toggle('blur');
  navbar.classList.remove('scroll-active');
  imgClose.classList.toggle('active');
  imgOpen.classList.toggle('active');
})