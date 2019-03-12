import Inputmask from 'inputmask';
import _ from 'lodash';
import toastr from 'toastr';
import '../../../../style/toastr-custom.css';
import axios from 'axios';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "6000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

document.addEventListener('DOMContentLoaded', () => {

    const phoneSelect = document.getElementById('country');
    const input = document.getElementById("phone");

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
                applyInputMask(new Inputmask("+7 (\\999) 999-99-99"));
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
        input.value = '';
        inputMask.mask(input);
    }

    // This is default value
    initInputMaskByLanguage(phoneSelect.value);

    // form listeners

    const button = document.getElementById('submitFormButton');
    const throttledSubmitHandler = _.throttle(listenToFormSubmit, 1000);

    function listenToFormSubmit() {
        const inputValue = input.inputmask.unmaskedvalue();

        console.log(toastr);
        if (isNumberValid(inputValue)) {
            submitFormData();
        } else {
            generateToastrTemplate('error', 'Пожалуйста, проверьте правильность номера');
            input.focus();
        }
    }

    function isNumberValid(number = '') {
        return number.length >= 7;
    }

    function submitFormData() {

        const formData = new FormData();

        ['name', 'phone', 'message'].forEach(id => formData.append(id, document.getElementById(id).value));

        axios.post('/formEndpoint', formData)

            .then(serverResponse => {
                //TODO check status
                generateToastrTemplate('success', 'Форма успешно отправлена');
            })
            .catch(error => generateToastrTemplate('error', `На сервере произошла ошибка ${JSON.stringify(error)}`))
    }

    function generateToastrTemplate(method, message) {
        toastr[method](`<p style="text-align: center;color: white;font-size: 20px">${message}</p>`);
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        throttledSubmitHandler();
    });
});
