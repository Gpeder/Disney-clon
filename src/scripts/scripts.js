const acordions = document.querySelectorAll('.accordion');

acordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.acordion-body');
        body.classList.toggle('active');
    });
});
