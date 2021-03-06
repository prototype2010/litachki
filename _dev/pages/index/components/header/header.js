// index page
import _ from 'lodash';
import smoothscroll from 'smoothscroll';

let button;
let sectionsArray;

function menuSwitcher() {
    const menuButton = document.querySelector('.header__menu-button');
    const navItems = document.querySelector('.header__menu-popup');

    if (menuButton && navItems) {
        menuButton.addEventListener('click', () => {

            menuButton.classList.remove('header__menu-button_black');
            menuButton.classList.toggle('header__menu-button_active');
            navItems.classList.toggle('header__menu-popup_visible');

            setTimeout(() => {
                throttledButtonChecker(button, sectionsArray);
            }, 300)
        });
    }
}

function getYOffset() {
    const body = document.body;
    const docEl = document.documentElement;

    return window.pageYOffset || docEl.scrollTop || body.scrollTop;
}

function findSectionByDistance(sectionsArray, range) {

    return sectionsArray.find(section => {

        const {top, bot} = section;
        const {top: buttonTop, bot: buttonBot} = range;

        return (top <= buttonTop && bot >= buttonTop);
    });
}

const throttledButtonChecker = _.throttle(function (button, sectionsArray) {

    const rect = button.getBoundingClientRect();
    const {top, height} = rect;
    const range = {top: top + getYOffset(), bot: top + height + getYOffset(),};
    const {section} = findSectionByDistance(sectionsArray, range);
    const className = 'header__menu-button_black';

    if (section.tagName === 'HEADER') {
        button.classList.remove(className);
    } else {
        button.classList.add(className);
    }


}, 100);

function mapSectionsByDistance(sectionsArray) {

    const arrayLike = [].slice.call(sectionsArray);
    const offsetY = getYOffset();

    const withCoordinates = arrayLike.map(section => {

        const {top, height} = section.getBoundingClientRect();

        return {
            top: top + offsetY,
            bot: top + height + offsetY,
            section
        }
    });

    return withCoordinates.sort((a, b) => a.top - b.top);
}

function keenButtonVisible() {
    document.addEventListener('scroll', () => {
        throttledButtonChecker(button, sectionsArray);
    });
}

function handleAutoSliding() {

    const mouseButton = document.getElementById('readMore');

    mouseButton.addEventListener('click', e => {
        e.preventDefault();
        smoothscroll(document.getElementById('advantages'), 1000)
    });
}

function handleCallMe() {

    const callMeButton = document.getElementById('callMe');

    callMeButton.addEventListener('click', e => {
        e.preventDefault();
        smoothscroll(document.getElementById('form'), 1000);
        document.getElementById('phone').focus();
    });
}



document.addEventListener('DOMContentLoaded', () => {

    button = document.querySelector('.header__menu-button');
    sectionsArray = mapSectionsByDistance(document.querySelectorAll('header,section,footer'));

    // menuSwitcher();
    // keenButtonVisible();
    handleAutoSliding();
    handleCallMe();
});

