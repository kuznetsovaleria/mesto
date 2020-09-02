const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');

const submitForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const professionInput = document.querySelector('.popup__profession');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');

function openPopup (event) {
    popup.classList.add('popup_opened');
}

function closePopup (event) {
    popup.classList.remove('popup_opened');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professionInput.value;
    closePopup();
}

submitForm.addEventListener('submit', formSubmitHandler);