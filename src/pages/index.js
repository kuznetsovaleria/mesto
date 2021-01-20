import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import { PopupWithPhoto } from '../components/PopupWithPhoto.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { editPopup, editPopupOpenButton, editPopupForm,
    nameInput, professionInput, nameElementSelector, professionElementSelector, addPopup,
    addPopupOpenButton, addPopupSaveButton, photoPopup, validationConfig, cardTemplateSelector,
    cards, submitProfileButton, addCardButton, myId, deleteCardPopup, changeAvatarPopup,
    submitUserAvatarBtn, userAvatarIcon, avatarElementSelector, changeAvatarSubmitBtn} from '../utils/constants.js';
import { Api } from '../components/Api';
import { PopupConfirm } from '../components/PopupConfirm';

    const api = new Api({
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
        token: '05a9c3f8-8fc7-415a-8994-abcd561520ba'
    });

// СОЗДАНИЕ ПРОФИЛЯ
const userProfile = new UserInfo(nameElementSelector, professionElementSelector, avatarElementSelector);

//СОЗДАНИЕ КАРТОЧКИ
function createCard(item) {
    const card = new Card(item,
        cardTemplateSelector,
        myId, {
        handleCardClick:() => openPhotoPopup.open(item), // ОТКРЫТИЕ ПОПАПА С ФОТО МЕСТА
        handleLikeClick: (cardId, isLiked) => { // ПОСТАВИТЬ/УБРАТЬ ЛАЙК С КАРТОЧКИ
            if (isLiked) {
                api.removeLike(cardId)
                    .then((res) => {
                        card.setLikes(res.likes)
                    })
                    .catch((err) => {
                    console.log(err)
                })
            } else {
                api.putLike(cardId)
                    .then((res)=> {
                        card.setLikes(res.likes)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            },
        handleDeleteClick: (cardId) => { //УДАЛИТЬ КАРТОЧКУ
            popupConfirm.setSubmitAction(() => {
                api.deleteCard(cardId)
                    .then((res) => {
                        card.deleteCard(res);
                        popupConfirm.close();
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                })
                popupConfirm.open();
            }
        })
    return card.generateCard();
}


//ПОПАП ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ КАРТОЧКИ
const popupConfirm = new PopupConfirm(deleteCardPopup);
popupConfirm.setEventListeners();


//МАССИВ КАРТОЧЕК
const cardList = new Section({
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.appendItem(cardElement);
    }
}, cards);

//ОТОБРАЖЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ И ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
Promise.all([
    api.getUserData(),
    api.getInitialCards()
])
    .then((values) => {
        const userValues = values[0];
        const initialCards = values[1];
        userProfile.setUserInfo(userValues);
        cardList.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(err)
});


// РЕДАКТИРОВАНИЯ ПРОФИЛЯ (ИМЯ, ОПИСАНИЕ)
const editFormPopup = new PopupWithForm({
    popupSelector: editPopup,
    handleFormSubmit: (userData) => {
        submitProfileButton.textContent = 'Сохранение...'
        api.editUserInfo({name: userData['edit-name'], about: userData['edit-profession']})
        .then((res) => {
            userProfile.setUserInfo(res);
            editFormPopup.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            submitProfileButton.textContent = 'Сохранить'
        })
    }
});


// КОПИРОВАНИЕ ДАННЫХ ИЗ ИНПУТОВ ПРОФИЛЯ
function copyEditInput() {
    nameInput.value = userProfile.getUserInfo().name;
    professionInput.value = userProfile.getUserInfo().profession;
};
editFormPopup.setEventListeners();
editPopupOpenButton.addEventListener('click', () => {
    copyEditInput();
    editFormPopup.open();
});


//СМЕНА АВАТАРА
const changeAvatar = new PopupWithForm({
    popupSelector: changeAvatarPopup,
    handleFormSubmit: (userAvatar) => {
        submitUserAvatarBtn.textContent = 'Сохранение...'
        api.changeUserAvatar({link: userAvatar['avatar-link']})
        .then((res)=> {
           userProfile.setUserInfo(res);
           changeAvatar.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            submitUserAvatarBtn.textContent = 'Сохранить'
        })
    }
});
changeAvatar.setEventListeners();
userAvatarIcon.addEventListener('click', () => {
    changeAvatar.open();
});


// ДОБАВЛЕНИЕ КАРТОЧКИ С МЕСТОМ
const addCardPopup = new PopupWithForm({
    popupSelector: addPopup,
    handleFormSubmit: (cardData) => {
        addCardButton.textContent = 'Сохранение...';
        const cardElement = {name: cardData['place-name'], link: cardData['img-link']};
        api.addNewCard(cardElement)
        .then((res) => {
            cardList.prependItem(createCard(res),true);
            addCardPopup.close()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            addCardButton.textContent = 'Создать'
        })
    }
});
addCardPopup.setEventListeners();
addPopupOpenButton.addEventListener('click', () => {
    addCardPopup.open();
});


//ПОПАП С ФОТОГРАФИЕЙ МЕСТА
const openPhotoPopup = new PopupWithPhoto(photoPopup);
openPhotoPopup.setEventListeners();

// ВАЛИДАЦИЯ ФОРМЫ ПРОФИЛЯ
const editFormValidator = new FormValidator(validationConfig, editPopupForm);
editFormValidator.enableValidation();

// ВАЛИДАЦИЯ ФОРМЫ ДОБАВЛЕНИЯ КАРТОЧКИ
const addFormFalidator = new FormValidator(validationConfig, addPopupSaveButton);
addFormFalidator.enableValidation();

// ВАЛИДАЦИЯ ФОРМЫ СМЕНЫ АВАТАРА
const avatarFormValidator = new FormValidator(validationConfig, changeAvatarSubmitBtn);
avatarFormValidator.enableValidation();




