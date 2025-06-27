const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.querySelector('.current-year');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

currentYear.textContent = new Date().getFullYear();
