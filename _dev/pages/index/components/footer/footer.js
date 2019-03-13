import smoothscroll from 'smoothscroll';

document.addEventListener('DOMContentLoaded', () => {

    const footerLinks = document.querySelectorAll('.footer__navigation .footer__link ');
    const validLinks = [...footerLinks].filter(link => link.hasAttribute('href'));

    validLinks.forEach(link => {

        link.addEventListener('click', e => {
            e.preventDefault();
            smoothscroll(document.querySelector(link.getAttribute('href')));
        });
    });
});