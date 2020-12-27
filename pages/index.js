import {initialCards} from '../utils/cards.js'
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { PopupWithPhoto } from '../components/PopupWithPhoto.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { editPopup, editPopupOpenButton, editPopupForm,
    nameInput, professionInput, addPopup, addPopupOpenButton, 
    addPopupSaveButton, photoPopup} from '../utils/constants.js';

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const card = new Card(item, '.card-template', () => openPhotoPopup.openPhoto(item));
        const cardElement = card.generateCard();
        cardList.appendItem(cardElement);
    }
}, '.cards');

cardList.renderItems();


const userProfile = new UserInfo('.profile__name', '.profile__profession');

const editFormPopup = new PopupWithForm({
    popupSelector: editPopup,
    handleFormSubmit: (userData) => {
        userProfile.setUserInfo({name: userData['edit-name'], profession: userData['edit-profession']});
        editFormPopup.close();
    }
});

function copyEditInput() {
    nameInput.value = userProfile.getUserInfo().name;
    professionInput.value = userProfile.getUserInfo().profession;
};

editFormPopup.setEventListeners();
editPopupOpenButton.addEventListener('click', () => {
    copyEditInput();
    editFormPopup.open();
});

const addCardPopup = new PopupWithForm({
    popupSelector: addPopup,
    handleFormSubmit: (cardData) => {
        const addCard = new Card({name: cardData['place-name'], link: cardData['img-link']}, '.card-template', () => 
        openPhotoPopup.openPhoto({name: cardData['place-name'], link: cardData['img-link']}));
        const cardElement = addCard.generateCard();
        cardList.prependItem(cardElement);
        addCardPopup.close();
    }
});

addCardPopup.setEventListeners();
addPopupOpenButton.addEventListener('click', () => {
    addCardPopup.open();
});

const openPhotoPopup = new PopupWithPhoto(photoPopup);
openPhotoPopup.setEventListeners();

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inputErrorClass: 'popup__input_type_error',
    inactiveButtonClass: 'popup__submit_inactive',
}

const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();

const addFormFalidator = new FormValidator(validationConfig, addPopupSaveButton);
addFormFalidator.enableValidation();




