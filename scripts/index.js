const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');

const submitForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const professionInput = document.querySelector('.popup__input_profession');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');

function openPopup () {
    nameInput.value = nameProfile.textContent;
    professionInput.value = professionProfile.textContent;
    popup.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professionInput.value;
    closePopup();
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
submitForm.addEventListener('submit', formSubmitHandler);