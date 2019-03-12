import Swiper from 'swiper/dist/js/swiper.esm.bundle';


document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.feedback__slider', {

        grabCursor: true,
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        initialSlide: 1,
        speed: 400,
        touchEventsTarget: 'container',
        longSwipes: true,
        touchRatio: 2,
        simulateTouch: true,

        navigation: {
            nextEl: '.feedback__button-next',
            prevEl: '.feedback__button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
    });
});