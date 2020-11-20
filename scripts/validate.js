const editForm = document.querySelector('.popup__form_edit');
const inputsList = document.querySelectorAll('.popup__input');
const submitButton = document.querySelector('.popup__submit')
// const nameInputForm = editForm.querySelector('.popup__input_name');
// const professionInputForm = editForm.querySelector('.popup__input_profession');

editForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
});

// ПОКАЗ ОШИБКИ В ФОРМЕ

function showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
     error.textContent = input.validationMessage;
     input.classList.add('popup__input_type_error');
};

// СКРЫТИЕ ОШИБКИ В ФОРМЕ

function hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove('popup__input_type_error');
};

// ПРОВЕРКА ФОРМЫ НА ВАЛИДНОСТЬ

function isFormValid(form, input) {
    if (!input.validity.valid) {
        showError(form, input);
    } else {
        hideError(form, input)
    }
};

// АКТИВНА ЛИ КНОПКА

function setButtonState(button, isButtonActive) {
    if (isButtonActive) {
        button.classList.remove('popup__submit_inactive');
        button.disabled = false;
    } else {
        button.classList.add('popup__submit_inactive');
        button.disabled = true;
    }
}

inputsList.forEach((input) => {
    input.addEventListener('input', () => {
        isFormValid(editForm, input);
        setButtonState(submitButton, editForm.checkValidity());
    });
});

