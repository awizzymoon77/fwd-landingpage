function toggleMenu() {
        const menu = document.getElementById('header-menu');
        const expanded = menu.getAttribute('aria-expanded') === 'true' || false;
        menu.setAttributeNode('aria-expanded' , !expanded);
        menu.classList.toggle('menu-toggle');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);