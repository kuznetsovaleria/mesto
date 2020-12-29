
 export class Card {
    constructor ( data, templateSelector, handleCardClick ) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    };

    _getTemplate () {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    };

    generateCard() {

        this._element = this._getTemplate();

        const cardPlace = this._element.querySelector('.card__place');
        this._photo = this._element.querySelector('.card__photo');
        
        cardPlace.textContent = this._name;
        this._photo.src = this._link;
        this._photo.alt = this._name;


        this._setEventListeners();
        return this._element;
    };


    _deleteCard() {
        this._element.remove();
    };

    _toggleLikeCard() {
        this._element.querySelector('.card__like').classList.toggle('card__like_active');
    };

    _handleCardClick() {
        this._handleCardClick(this._name, this._link);
    }

    _setEventListeners() {

        this._element.querySelector('.card__delete').addEventListener('click', () => {
            this._deleteCard();
        });

        this._element.querySelector('.card__like').addEventListener('click', () => {
            this._toggleLikeCard();
        });

        this._photo.addEventListener('click', () => {
            this._handleCardClick()
        })

    };
};

