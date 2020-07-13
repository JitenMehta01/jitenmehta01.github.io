// toggle function for mobile menu only
const toggleButton = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.mobileMenu')

toggleButton.addEventListener('click', e =>{
  mobileMenu.classList.toggle('menu-open');
});


 // closes menu when clicked outside

 window.addEventListener('click', e =>{
  const toggleSpan = document.querySelector('.navbar-toggler-icon');
  if (e.target === toggleSpan) {
    return;
  } else {
    mobileMenu.classList.remove('menu-open');
  }
});
