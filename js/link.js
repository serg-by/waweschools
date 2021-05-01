/* eslint-disable */
(function () {
const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav__link').forEach((link) => {
                link.classList.toggle(
                    'nav__link--active',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.7,
});

document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section),
);

document.querySelector('.nav-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
        event.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(event.target)).offsetTop,
            behavior: 'smooth',
        });
    }
});

}());

