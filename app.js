const menuToggle = document.querySelector('.menu_toggle');
// pilihilah di document (html) element yg memiliki class menu_toggle.  Tp yg dipilih yg pertama
const navul = document.querySelector('nav ul');
const body = document.querySelector('body');
const menuLink = document.querySelectorAll('nav ul li a');
const main = document.querySelector('.main');
const navbar = document.querySelector('nav');
const imgClose = document.querySelector('.img-close');
const imgOpen = document.querySelector('.img-open');

menuToggle.addEventListener('click', () => {
  // is this higher order function.  Means on click run the following functions
  navul.classList.toggle('active');
  menuToggle.classList.toggle('active');
  body.classList.toggle('stop-scrolling');
  main.classList.toggle('blur');
  navbar.classList.remove('scroll-active');
  imgClose.classList.toggle('active');
  imgOpen.classList.toggle('active');
})

menuLink.forEach((link) => link.addEventListener('click', () => {
  navul.classList.remove('active');
  document.querySelector('.menu_toggle input').checked = false;
  body.classList.remove('stop-scrolling');
  main.classList.remove('blur');
  imgClose.classList.toggle('active');
  imgOpen.classList.toggle('active');
}));

window.addEventListener('scroll', () => {
  const windowPosition = window.scrollY > 0;
  navbar.classList.toggle('scroll-active', windowPosition);
});

const navLi = document.querySelectorAll('nav ul li a');
const section = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset > sectionTop - sectionHeight / 5 && window.scrollY > 450) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  })
})

