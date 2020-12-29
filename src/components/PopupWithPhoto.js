
import { Popup } from './Popup.js'

export class PopupWithPhoto extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({name, link}) {
        this._popupSelector.querySelector('.popup-photo__caption').textContent = name;
        this._popupSelector.querySelector('.popup-photo__img').alt = name;
        this._popupSelector.querySelector('.popup-photo__img').src = link;
        super.open();
    }

}