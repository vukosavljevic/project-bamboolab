const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__list');
const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar__png');
const getButton = document.querySelector('.navbar__item-button');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle("navbar-bg-color");
    navbarLogo.classList.toggle("navbar-logo-remove");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    getButton.classList.toggle("active");
    header.classList.toggle("fixed");
})