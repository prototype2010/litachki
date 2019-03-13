import './index.pug';
import './index.scss';
// header
import './components/header/header.scss';
import './components/header/header';
// form
import './components/form/form.scss';
import './components/form/form';
// button
import '../../modules/button.scss';
// advantages
import './components/advantages/advantages.scss';
import './components/advantages/advantages';
// routes
import './components/routes/routes.scss';
import './components/routes/routes';
// avtopark
import './components/avtopark/avtopark.scss';
import './components/avtopark/avtopark';
// offerings
import './components/offerings/offerings.scss';
import './components/offerings/offerings';
//order
import './components/order/order.scss';
import './components/order/order';
//feedback
import './components/feedback/feedback.scss';
import './components/feedback/feedback';
//cta
import './components/cta/cta.scss';
import './components/cta/cta';
//details
import './components/details/details';
import './components/details/details.scss';
//footer
import './components/footer/footer.scss';
import './components/footer/footer';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//resources
import arrow from '../../resources/images/arrow.svg?inline-js';
// Aos settings
document.addEventListener('DOMContentLoaded', () => {


    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    document.querySelectorAll('.swiper-custom-arrow').forEach(item => item.innerHTML = arrow);
});
// Swiper
import 'swiper/dist/css/swiper.css';


