export class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`)
            })
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`)
            })
    }

    editUserInfo() {

    }

    addNewCard() {

    }

    howMuchLikes() {

    }

    deleteCard() {

    }

    handleLikeClick() {

    }

    changeUserPhoto() {

    }




}