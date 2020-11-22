const editPopup = document.querySelector('.popup_edit');
const editPopupOpenButton = document.querySelector('.profile__edit-button');
const editPopupCloseButton = document.querySelector('.popup__close');

const submitEditFormButton = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_name');
const professionInput = document.querySelector('.popup__input_profession');

const nameProfile = document.querySelector('.profile__name');
const professionProfile = document.querySelector('.profile__profession');

const addPopup = document.querySelector('.popup_add');
const addPopupOpenButton = document.querySelector('.profile__add-button');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupSaveButton = document.querySelector('.popup__form_add')

const cardTemplate = document.querySelector('.card-template');
const cards = document.querySelector('.cards');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');

const photoPopup = document.querySelector('.popup-photo');
const photoPopupImage = document.querySelector('.popup-photo__img');
const photoPopupCloseButton = document.querySelector('.popup-photo__close');
const photoPopupCaption = document.querySelector('.popup-photo__caption');


function render () {
    initialCards.forEach(({name, link}) => {
        const card = createCard({name, link});
        cards.appendChild(card)
    })
}

const createCard = ({name, link}) => {

    const card = cardTemplate.content.cloneNode(true);
    const cardPhoto = card.querySelector('.card__photo');
    const cardPlace = card.querySelector('.card__place');

    cardPhoto.alt = name;
    cardPhoto.src = link;
    cardPlace.innerText = name;

    addListeners(card);

    return card; 
}


function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
};

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc (evt) {
    const esc = 27;
    if (evt.keyCode === esc) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    };
};

function closePopupOverlay (popup) {
    popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup')) {
            closePopup(popup);
        };
    });
};

closePopupOverlay(editPopup);
closePopupOverlay(addPopup);
closePopupOverlay(photoPopup);


function copyEditInput () {
    nameInput.value = nameProfile.textContent;
    professionInput.value = professionProfile.textContent;
}

function submitEditForm (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    professionProfile.textContent = professionInput.value;
    closePopup(editPopup);
}

function submitAddForm (event) {
    event.preventDefault();
    const placeValue = placeInput.value;
    const linkValue = linkInput.value;

    const newCard = {
        name: placeValue,
        link: linkValue
    }

    const card = createCard(newCard);
    cards.prepend(card);
    closePopup(addPopup);
}

const removeCard = (event) => {
    event.preventDefault();
    event.target.closest('.card').remove();
}

const openPhotoPopup  = (event) => {
    const photo = event.target.closest('.card__photo');
    photoPopupImage.src = photo.src;
    photoPopupImage.alt = photo.alt;
    photoPopupCaption.textContent = photo.alt;
    openPopup(photoPopup);
}

function toggleLike (event) {
    event.preventDefault();
    event.target.classList.toggle('card__like_active');
}

const addListeners = (card) => {
    card.querySelector('.card__delete').addEventListener('click', removeCard);
    card.querySelector('.card__like').addEventListener('click', toggleLike);
    card.querySelector('.card__photo').addEventListener('click', openPhotoPopup);

}


render();


editPopupOpenButton.addEventListener('click', () => {copyEditInput(), openPopup(editPopup)});

addPopupOpenButton.addEventListener('click', () => {openPopup(addPopup)});

editPopupCloseButton.addEventListener('click', () => {closePopup(editPopup)});

addPopupCloseButton.addEventListener('click', () => {closePopup(addPopup)});


submitEditFormButton.addEventListener('submit', submitEditForm);

addPopupSaveButton.addEventListener('submit', submitAddForm);

photoPopupCloseButton.addEventListener('click', () => {closePopup(photoPopup)});















