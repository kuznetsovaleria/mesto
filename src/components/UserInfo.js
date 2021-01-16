
export class UserInfo {
    constructor(profileName, profileProfession) {
        this._name = document.querySelector(profileName);
        this._profession = document.querySelector(profileProfession);
    };

    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent
        }
    };

    setUserInfo({name, about}) {
        this._name.textContent = name;
        this._profession.textContent = about;
    }

};