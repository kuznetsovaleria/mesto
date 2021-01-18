
 export class Card {
    constructor (data, templateSelector, userId, {handleCardClick, handleLikeClick}) {
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        // this._handleDeleteClick = handleDeleteClick;
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

        this._howMuchLikes();
        this.setLikes(this._likes);
        this._setEventListeners();
        return this._element;
    };


    _isLiked() {
        if (this._element.querySelector('.card__like').classList.contains('card__like_active')) {
            return true
        }
        return false
    };

    _isCardLikedByThisUser() {
        for (let i = 0; i < this._likes.length; i ++) {
            if (this._likes[i]._id === this._userId) {
                return true
            }
        } 
        return false
    }

    _howMuchLikes() {
        const cardLikesCounter = this._element.querySelector('.card__likes-counter')

        if (this._likes.length !== 0) {
            cardLikesCounter.textContent = this._likes.length
        } else {
            cardLikesCounter.textContent = ''
        }
    }

    setLikes(likesArray) {
        this._likes = likesArray;

        const likeBtn = this._element.querySelector('.card__like');

        this._element.querySelector('.card__likes-counter').textContent = likesArray.length;

        if (this._isCardLikedByThisUser()) {
            likeBtn.classList.add('card__like_active')
        } else {
            likeBtn.classList.remove('card__like_active')
        }
    }

    deleteCard() {
        
    }

    // _deleteCard() {
    //     this._element.remove();
    // };

    // _toggleLikeCard() {
    //     this._element.querySelector('.card__like').classList.toggle('card__like_active');
    // };

    _handleCardClick() {
        this._handleCardClick(this._name, this._link);
    }

    _setEventListeners() {

        // this._element.querySelector('.card__delete').addEventListener('click', () => {
        //     this._deleteCard();
        // });

        // this._element.querySelector('.card__like').addEventListener('click', () => {
        //     this._toggleLikeCard();
        // });

        this._photo.addEventListener('click', () => {
            this._handleCardClick()
        })

        this._element.querySelector('.card__like').addEventListener('click', () => {
            this._handleLikeClick(this._cardId, this._isLiked())
        })

    };
};

