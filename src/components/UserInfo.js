// import { profileName, profileProfession } from "../utils/constants";

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

    setUserInfo({name, profession}) {
        this._name.textContent = name;
        this._profession.textContent = profession;
    }

};