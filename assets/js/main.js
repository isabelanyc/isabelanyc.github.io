function toggleNav() {
    var navMenu = document.getElementById('nav-menu');
    var navButton = document.querySelector('.nav-button');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        navButton.textContent = 'Menu';
    } else {
        navMenu.style.display = 'block';
        navButton.textContent = 'Close';
    }
}
