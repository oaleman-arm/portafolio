const mobileMenu = document.querySelector('.menu__mobile');
const openMenuButton = document.querySelector('.open__menu');
const closeMenuButton = document.querySelector('.close__menu');

openMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
