"use strict";

(function(core) {

    class User {

        constructor(displayName = "", email = "", username = "",password = "") {
            this._displayName= displayName;
            this._email = email ;
            this._username = username;
            this._password= password;
        }

        get displayName() {
            return this._displayName;
        }

        set displayName(value) {
            this._displayName = value;
        }

        get email() {
            return this._email;
        }

        set email(value) {
            this._email = value;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            this._username = value;
        }


        toString() {
            return `DisplayName: ${this._displayName} \n
                EmailAddress: ${this._email}\n Username: ${this._username}\n`;
        }

        /**
         * Serialize for writing to localstorage
         * @returns {null|string}
         */
        serialize() {
            if (this._displayName !== "" && this._email !== "" && this._username!== "") {
                return `${this.displayName},${this.email },${this.username}`;
            }
            console.error("One or more properties of the Contact are empty or invalid")
            return null;
        }

        /**
         * Deserialize is used to read data from localStorage
         * @param data
         */
        deserialize(data) {
            //
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._email = propertyArray[1];
            this._username = propertyArray[2];
        }

        toJASON(){
            return{
                DisplayName : this._displayName,
                EmailAddress : this._email,
                username :this._username,
                Password : this._password

            }
        }

        fromJSON(data) {
            this._displayName = data.DisplayName;
            this._email = data.email;
            this._username= data.username;
            this._password = data.password;

        }
    }
    core.User = User;
})(core || (core = {}));