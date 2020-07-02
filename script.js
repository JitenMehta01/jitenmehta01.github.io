// toggle function for mobile menu only
const toggleButton = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.mobileMenu')

toggleButton.addEventListener('click', e =>{
  mobileMenu.classList.toggle('menu-open');
})
