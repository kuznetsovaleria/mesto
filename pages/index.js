import {initialCards} from '../utils/cards.js'
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { Popup } from '../components/Popup.js';
import { PopupWithPhoto } from '../components/PopupWithPhoto.js';
// import { Section } from '../components/Section.js';

import { editPopup, editPopupOpenButton, editPopupCloseButton, editPopupForm,
    submitEditFormButton, nameInput, professionInput, nameProfile, professionProfile,
    addPopup, addPopupOpenButton, addPopupCloseButton, addPopupSaveButton, cards,
    placeInput, linkInput, photoPopup, photoPopupImage, photoPopupCloseButton,
    photoPopupCaption, photo } from '../utils/constants.js';
import { Section } from '../components/Section.js';
// import { PopupWithForm } from '../components/PopupWithForm.js';


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

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        // const card = new Card(item, '.card-template', () => openPhotoPopup.openPhoto(name, link));
        const card = new Card(item, '.card-template', () => openPhotoPopup.openPhoto(item));
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
    }
}, '.cards');

cardList.renderItems();

// function render () {
//     initialCards.forEach(({name, link}) => {
//         const card = new Card ({name, link}, '.card-template', () => openPhotoPopup.openPhoto(name, link));
//         const cardElement = card.generateCard()
//         cards.appendChild(cardElement)
//     });
// };

const openEditPopup = new Popup(editPopup);
const openAddPopup = new Popup(addPopup);

editPopupOpenButton.addEventListener('click', () => openEditPopup.open(editPopup));
addPopupOpenButton.addEventListener('click', () => openAddPopup.open(addPopup));

openEditPopup.setEventListeners();
openAddPopup.setEventListeners();


const openPhotoPopup = new PopupWithPhoto(photoPopup);
openPhotoPopup.setEventListeners();


function copyEditInput () {
    nameInput.value = nameProfile.textContent;
    professionInput.value = professionProfile.textContent;
};

function submitEditForm (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professionInput.value;
    closePopup(editPopup);
};

// const submitEditForm = new PopupWithForm({
//     popupSelector: editPopup,
//     handleFormSubmit: (formData) => {
//         const card = new Card(formData, 'card-template');
//         const cardElement = card.generateCard();

//         cards.prepend(cardElement);
//     }
// })

function submitAddForm (event) {
    event.preventDefault();
    const placeValue = placeInput.value;
    const linkValue = linkInput.value;

    const newCard = {
        name: placeValue,
        link: linkValue
    };

    const card = new Card(newCard, '.card-template');
    const cardElement = card.generateCard();
    cards.prepend(cardElement);
    
    closePopup(addPopup);

    placeInput.value = '';
    linkInput.value = '';
}




// render();


// editPopupOpenButton.addEventListener('click', () => {copyEditInput(), openPopup(editPopup)});

// addPopupOpenButton.addEventListener('click', () => {openPopup(addPopup)});

// editPopupCloseButton.addEventListener('click', () => {closePopup(editPopup)});

// addPopupCloseButton.addEventListener('click', () => {closePopup(addPopup)});


submitEditFormButton.addEventListener('submit', submitEditForm);

addPopupSaveButton.addEventListener('submit', submitAddForm);

// photoPopupCloseButton.addEventListener('click', () => {closePopup(photoPopup)});















