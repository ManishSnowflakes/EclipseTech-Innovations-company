// JavaScript to toggle the mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  