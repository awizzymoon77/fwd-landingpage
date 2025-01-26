function toggleMenu() {
    const menu = document.getElementById('header-menu');
    const expanded = menu.getAttribute('aria-expanded') === 'true' || false;
    console.log(`Menu expanded: ${expanded}`); // Log current expanded state
    menu.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('menu-visible');
    console.log(`Menu class list: ${menu.classList}`); // Log class list after toggling
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
