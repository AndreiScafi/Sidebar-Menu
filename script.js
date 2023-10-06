/* Hamburger Menu */
const container = document.querySelector('.container');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('change');
})

/* End of Hamburger Menu */

/* Sub-Nav-Link-Menu */

const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (e) => {
    const element = e.target.parentElement;

    if (element.classList[0] === 'nav-link') {
        element.nextElementSibling.classList.toggle('active');
        element.classList.toggle('active');
    }
})

/* End of Sub-Nav-Link-Menu */