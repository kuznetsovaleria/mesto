// import { Popup } from './Popup.js';

// export class PopupWithForm extends Popup {
//     constructor({ popupSelector, handleFormSubmit }) {
//         super(popupSelector);
//         this._handleFormSubmit = handleFormSubmit;
//     }

//     _getInputValues() {
//         this._inputList = this._popupSelector.querySelectorAll('.popup__input');

//         this._formValues = {};

//         this._inputList.forEach(input => {
//             this._formValues[input.name] = input.value;
//             // this._formValues[input.link] = input.value;
//         });

//         return this._formValues;
//     }

//     _setEventListeners() {
//         super(this.setEventListeners);
//         this._popupSelector.addEventListener('submit', (evt) => {
//             evt.preventDefault();

//             this._handleFormSubmit(this._getInputValues());

//             this._popupSelector.close();
//         });
//     }
// }