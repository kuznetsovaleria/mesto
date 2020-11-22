// const editForm = document.querySelector('.popup__form_edit');

// ПОКАЗ ОШИБКИ В ФОРМЕ

function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
     error.textContent = input.validationMessage;
     input.classList.add(config.inputErrorClass);
};

// СКРЫТИЕ ОШИБКИ В ФОРМЕ

function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
};

// ПРОВЕРКА ФОРМЫ НА ВАЛИДНОСТЬ

function isFormValid(form, input, config) {
    if (!input.validity.valid) {
        showError(form, input, config);
    } else {
        hideError(form, input, config)
    }
};

// АКТИВНА ЛИ КНОПКА

function setButtonState(button, isButtonActive, config) {
    if (isButtonActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
}


function setEventListeners(form, config) {
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            isFormValid(form, input, config);
            setButtonState(submitButton, form.checkValidity(), config);
        });
    });
};

// ВАЛИДАЦИЯ ВСЕХ ФОРМ

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach((form) => {
        setEventListeners(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const submitButton = form.querySelector(config.submitButtonSelector);
        setButtonState(submitButton, form.checkValidity(), config);

    });
};

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inputErrorClass: 'popup__input_type_error',
    inactiveButtonClass: 'popup__submit_inactive',
}

enableValidation(validationConfig);

