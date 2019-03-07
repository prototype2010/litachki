document.addEventListener('DOMContentLoaded', () => {

    [].slice.call(document.querySelectorAll('.block .block__description')).forEach(el => {

        if (el.innerHTML.length > 200) {
            el.classList.add('block__description_hide-text');

            const moreDetailsText = 'подробнее >';
            const lessDetailsText = 'свернуть';
            const button = document.createElement('button');
            button.classList.add('block__expand-button');
            button.innerHTML = moreDetailsText;

            const parent = el.parentNode;
            parent.appendChild(button);

            button.addEventListener('click', () => {

                if (el.classList.contains('block__description_hide-text')) {
                    button.innerHTML = lessDetailsText;
                } else {
                    button.innerHTML = moreDetailsText;
                }

                el.classList.toggle('block__description_hide-text');
            });
        }
    });
});
