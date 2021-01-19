import { Popup } from './Popup.js'

export class PopupConfirm extends Popup {
    constructor(popupSelector){
        super(popupSelector);
    }

    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('.popup__form').addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitCallback();
        })
    }
}

//     setEventListeners() {
//         super.setEventListeners();
//         this._popupSelector.querySelector('.popup__form').addEventListener('click', setSubmitAction());
//     }
// }