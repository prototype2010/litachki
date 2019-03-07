import Swiper from 'swiper/dist/js/swiper.esm.bundle';

document.addEventListener('DOMContentLoaded', () => {

    new Swiper('.routes__container', {

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
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
            reverseDirection: false,
            waitForTransition: true,
        },
        navigation: {
            nextEl: '.routes__button-next',
            prevEl: '.routes__button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 575
            575: {
                slidesPerView: 'auto',
                spaceBetween: 10
            },
            // when window width is <= 767
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is <= 991
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1199 : {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});