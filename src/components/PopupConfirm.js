export class PopupConfirm extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    setEventListeners() {
        super.setEventListeners();
        
    }
}