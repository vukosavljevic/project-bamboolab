const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__list');
const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar__png');
const getButton = document.querySelector('.navbar__item-button');
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const about = document.querySelector('.about');
const examples = document.querySelector('.examples');
const slider = document.querySelector('.slider');
const contactForm = document.querySelector('.contact-form');
const information = document.querySelector('.information');
const footer = document.querySelector('.footer');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle("navbar-bg-color");
    navbarLogo.classList.toggle("navbar-logo-remove");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    getButton.classList.toggle("active");
    header.classList.toggle("fixed");
    hero.classList.toggle("deactivate");
    about.classList.toggle("deactivate");
    examples.classList.toggle("deactivate");
    slider.classList.toggle("deactivate");
    contactForm.classList.toggle("deactivate");
    information.classList.toggle("deactivate");
    footer.classList.toggle("deactivate");
})