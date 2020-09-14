const editPopup = document.querySelector('.popup');
const editPopupOpenButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = document.querySelector('.popup__close');

const submitForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const professionInput = document.querySelector('.popup__input_profession');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');

const addPopup = document.querySelector('.popup_add');
const addPopupOpenButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close');

function openPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

function copyInput () {
    nameInput.value = nameProfile.textContent;
    professionInput.value = professionProfile.textContent;
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professionInput.value;
    closePopup(editPopup);
}

editPopupOpenButton.addEventListener('click', () => {copyInput(), openPopup(editPopup)});
addPopupOpenButton.addEventListener('click', () => {openPopup(addPopup)});

editPopupCloseButton.addEventListener('click', () => {closePopup(editPopup)});
addPopupCloseButton.addEventListener('click', () => {closePopup(addPopup)});

submitForm.addEventListener('submit', formSubmitHandler);


