export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    };

    _showError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    };

    _hideError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputErrorClass);
    };

    _isFormValid(form, input) {
        if (!input.validity.valid) {
            this._showError(form, input);
        } else {
            this._hideError(form, input);
        };
    };

    _setButtonState(button, isButtonActive) {
        if (isButtonActive) {
            button.classList.remove(this._config.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(this._config.inactiveButtonClass);
            button.disabled = true;
        };
    };

    _setEventListeners(form) {
        const inputsList = form.querySelectorAll(this._config.inputSelector);
        const submitButton = form.querySelector(this._config.submitButtonSelector);

        inputsList.forEach((input) => {
            input.addEventListener('input', () => {
                this._isFormValid(form, input);
                this._setButtonState(submitButton, form.checkValidity());
            });
        });
    };

    enableValidation () {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(this._form);
    };
};
