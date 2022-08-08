const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__list');
const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar__png');
const getButton = document.querySelector('.navbar__item-button');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle("navbar-bg-color");
    navbarLogo.classList.toggle("navbar-logo-remove");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    getButton.classList.toggle("active");
})