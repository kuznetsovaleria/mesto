
export class UserInfo {
    constructor(nameProfile, professionProfile) {
        this._name = document.querySelector(nameProfile);
        this._profession = document.querySelector(professionProfile);
    }


    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent
        }
    }

    setUserInfo({name, profession}) {
        this._name.textContent = name;
        this._profession.textContent = profession;
    }

}