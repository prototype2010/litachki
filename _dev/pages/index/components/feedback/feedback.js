import Swiper from 'swiper/dist/js/swiper.esm.bundle';


document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.feedback__slider', {

        grabCursor: true,
        slidesPerView: 4,
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
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
            prevEl: '.feedback__button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 5
            // },
            540: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30
            },

        }
    });
});