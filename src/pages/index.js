import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { PopupWithPhoto } from '../components/PopupWithPhoto.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards, editPopup, editPopupOpenButton, editPopupForm,
    nameInput, professionInput, nameElementSelector, professionElementSelector, addPopup,
    addPopupOpenButton, addPopupSaveButton, photoPopup, validationConfig, cardTemplateSelector}
    from '../utils/constants.js';

function createCard(item) {
    const card = new Card(item, cardTemplateSelector, () => openPhotoPopup.open(item));
    return card.generateCard();
}

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.appendItem(cardElement);
    }
}, '.cards');

cardList.renderItems();

const userProfile = new UserInfo(nameElementSelector, professionElementSelector);

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
    handleFormSubmit:(cardData) => {
        const cardElement = createCard({name: cardData['place-name'], link: cardData['img-link']});
        cardList.prependItem(cardElement);
        addCardPopup.close();
    }
})

addCardPopup.setEventListeners();
addPopupOpenButton.addEventListener('click', () => {
    addCardPopup.open();
});

const openPhotoPopup = new PopupWithPhoto(photoPopup);
openPhotoPopup.setEventListeners();

const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();

const addFormFalidator = new FormValidator(validationConfig, addPopupSaveButton);
addFormFalidator.enableValidation();




