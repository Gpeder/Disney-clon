const acordions = document.querySelectorAll('.accordion');

acordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.acordion-body');
        body.classList.toggle('active');
    });
});


const links = document.querySelectorAll('.section-filmes a');
const currentPath = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-hover');
    }
});
