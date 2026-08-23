function toggleNav() {
    const navMenu = document.getElementById('nav-menu');
    const navButton = document.querySelector('.nav-button');
    const isOpen = navMenu.classList.toggle('is-open');

    navButton.setAttribute('aria-expanded', String(isOpen));
    navButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    navButton.textContent = isOpen ? '×' : '☰';
}

document.querySelectorAll('#nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        const navButton = document.querySelector('.nav-button');

        navMenu.classList.remove('is-open');
        navButton.setAttribute('aria-expanded', 'false');
        navButton.setAttribute('aria-label', 'Open navigation');
        navButton.textContent = '☰';
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navButton = document.querySelector('.nav-button');

        navMenu.classList.remove('is-open');
        navButton.setAttribute('aria-expanded', 'false');
        navButton.setAttribute('aria-label', 'Open navigation');
        navButton.textContent = '☰';
        navButton.focus();
    }
});
