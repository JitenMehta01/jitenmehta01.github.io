// toggle function for mobile menu only
const toggleButton = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.mobileMenu')

toggleButton.addEventListener('click', e =>{
  mobileMenu.classList.toggle('menu-open');
});


 // closes menu when clicked outside

window.addEventListener('click', e =>{
  if(mobileMenu.classList[5] === 'menu-open' && e.target.className === 'main-content'){
  mobileMenu.classList.remove('menu-open')
  }
})
