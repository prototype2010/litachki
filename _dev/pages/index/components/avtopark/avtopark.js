import Swiper from 'swiper/dist/js/swiper.esm.bundle';

document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.avtopark__container', {

        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        initialSlide: 1,
        speed: 400,
        touchEventsTarget: 'container',
        longSwipes: true,
        touchRatio: 2,
        simulateTouch: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.avtopark__button-next',
            prevEl: '.avtopark__button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 'auto',
                spaceBetween: 30
            },
        }
    });
});