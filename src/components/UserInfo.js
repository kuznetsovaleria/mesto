
export class UserInfo {

    constructor(profileName, profileProfession, profileAvatar) {
        this._name = document.querySelector(profileName);
        this._profession = document.querySelector(profileProfession);
        this._avatar = document.querySelector(profileAvatar)
    };

    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent,
        }
    };

    setUserInfo({name, about, avatar}) {
        this._name.textContent = name;
        this._profession.textContent = about;
        this._avatar.src = avatar

    }
    // constructor(profileName, profileProfession) {
    //     this._name = document.querySelector(profileName);
    //     this._profession = document.querySelector(profileProfession);
    // };

    // getUserInfo() {
    //     return {
    //         name: this._name.textContent,
    //         profession: this._profession.textContent
    //     }
    // };

    // setUserInfo({name, about}) {
    //     this._name.textContent = name;
    //     this._profession.textContent = about;
    // }

};