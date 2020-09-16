const editPopup = document.querySelector('.popup_edit');
const editPopupOpenButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = document.querySelector('.popup__close');

const submitEditForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const professionInput = document.querySelector('.popup__input_profession');
const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');

const addPopup = document.querySelector('.popup_add');
const addPopupOpenButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupSaveButton = document.querySelector('.popup__form_add')

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardTemplate = document.querySelector('.card-template');
const cards = document.querySelector('.cards');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');


function render () {
    initialCards.forEach(renderCard);
}

function renderCard({name, link}) {
    const newCard = cardTemplate.content.cloneNode(true);
    
    newCard.querySelector('.card__place').innerText = name;
    newCard.querySelector('.card__photo').alt = name;
    newCard.querySelector('.card__photo').src = link;
    cards.prepend(newCard);
}

render();

// function renderCard({name, link}) {
    
//     const newCard = cardTemplate.content.cloneNode(true);
    
//     newCard.querySelector('.card__place').innerText = name;
//     newCard.querySelector('.card__photo').alt = name;
//     newCard.querySelector('.card__photo').src = link;
//     cards.appendChild(newCard); 
// }



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


function editFormSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professionInput.value;
    closePopup(editPopup);
}


editPopupOpenButton.addEventListener('click', () => {copyInput(), openPopup(editPopup)});

addPopupOpenButton.addEventListener('click', () => {openPopup(addPopup)});

editPopupCloseButton.addEventListener('click', () => {closePopup(editPopup)});
addPopupCloseButton.addEventListener('click', () => {closePopup(addPopup)});

submitEditForm.addEventListener('submit', editFormSubmitHandler);

addPopupSaveButton.addEventListener('submit', (event) => {
    event.preventDefault();
    const placeValue = placeInput.value;
    const linkValue = linkInput.value;
    const newCard = {
    name: placeValue,
    link: linkValue
    }
closePopup(addPopup);
renderCard(newCard);
});







