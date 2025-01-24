const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-navigation');

// Toggle Menu Visibility
menuToggle.addEventListener('click', () => {
    siteNavigation.classList.toggle('toggled');
});