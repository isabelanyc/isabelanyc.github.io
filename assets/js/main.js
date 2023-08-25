function toggleNav() {
    var navMenu = document.getElementById('nav-menu');
    var navButton = document.querySelector('.nav-button');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        navButton.style.width = '50px'; // Original width
        navButton.textContent = '| | |';
    } else {
        navMenu.style.display = 'block';
        navButton.style.width = '200px'; // Expanded width
        navButton.textContent = 'X';
    }
}

document.querySelectorAll('.project-entry').forEach(entry => {
    entry.innerHTML += '<p>Date: ' + new Date().toLocaleDateString() + '</p>';
});
