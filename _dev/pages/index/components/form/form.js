import Inputmask from 'inputmask';

document.addEventListener('DOMContentLoaded', () => {

    const phoneSelect = document.getElementById('country');

    phoneSelect.addEventListener('change', ({target}) => {
        initInputMaskByLanguage(target.value)
    });

    function initInputMaskByLanguage(language) {

        switch (language) {

            case 'ua' : {
                applyInputMask(new Inputmask("+38 (099) 999-99-99"));
                break;
            }
            case 'ru' : {
                applyInputMask(new Inputmask("+7 (\\99) 999-99-99"));
                break;
            }
            case 'it' : {
                applyInputMask(new Inputmask("+3\\9 (999) 999-99-99"));
                break;
            }
            case 'pl' : {
                applyInputMask(new Inputmask("+48 (999) 999-99-99"));
                break;
            }
        }
    }

    function applyInputMask(inputMask) {

        const input = document.getElementById("phone");
        input.value = '';
        inputMask.mask(input);
    }

    // This is default value
    initInputMaskByLanguage(phoneSelect.value);

});
