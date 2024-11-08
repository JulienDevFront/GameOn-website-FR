/** JS.DOC
 * @module inputElements
 * @description renvoie les éléments du formulaire
 */

/** JS.DOC
 * @const firstName
 * @description
 * @function firstName.validator
 * @description
 */
export const firstName = {
    input: {
        elem: document.querySelector("#input-firstName"),
        classErrActivate: "input--err",
        classValueValidate: "input--valueValidate",
    },
    textErr: {
        elem: document.querySelector("#msgErr-firstName"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const value = this.input.elem.value.trim().toLowerCase();
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ -]{2,20}$/;
        if (!regex.test(value)) {
            this.input.elem.classList.add(this.input.classErrActivate);
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            this.input.elem.classList.remove(this.input.classValueValidate);
            console.log(`Input-fristName : le prénom "${value}" n'est pas valide, message err activé 🟥`);
            return false;
        } else {
            this.input.elem.classList.add(this.input.classValueValidate);
            this.input.elem.classList.remove(this.input.classErrActivate);
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            console.log(`Input-fristName : le prénom "${value}" est valide, prêt à être submit 🟩`);
            return true;
        }
    },
};
/** JS.DOC
 * @const lastName
 * @description
 * @function lastName.validator
 * @description
 */
export const lastName = {
    input: {
        elem: document.querySelector("#input-lastName"),
        classErrActivate: "input--err",
        classValueValidate: "input--valueValidate",
    },
    textErr: {
        elem: document.querySelector("#msgErr-lastName"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const value = this.input.elem.value.trim().toLowerCase();
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ -]{2,20}$/;
        if (!regex.test(value)) {
            this.input.elem.classList.add(this.input.classErrActivate);
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            this.input.elem.classList.remove(this.input.classValueValidate);
            console.log(`Input-lastName : le nom "${value}" n'est pas valide, message err activé 🟥`);
            return false;
        } else {
            this.input.elem.classList.add(this.input.classValueValidate);
            this.input.elem.classList.remove(this.input.classErrActivate);
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            console.log(`Input-lastName : le nom "${value}" est valide, prêt à être submit 🟩`);
            return true;
        }
    },
};
/** JS.DOC
 * @const email
 * @description
 * @function email.validator
 * @description
 */
export const email = {
    input: {
        elem: document.querySelector("#input-email"),
        classErrActivate: "input--err",
        classValueValidate: "input--valueValidate",
    },
    textErr: {
        elem: document.querySelector("#msgErr-email"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const value = this.input.elem.value.trim().toLowerCase();
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9._-]{1,40}@[A-Za-zÀ-ÖØ-öø-ÿ0-9._-]{1,40}\.[A-Za-z]{2,6}$/;
        if (!regex.test(value)) {
            this.input.elem.classList.add(this.input.classErrActivate);
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            this.input.elem.classList.remove(this.input.classValueValidate);
            console.log(`Input-lastName : l'email "${value}" n'est pas valide, message err activé 🟥`);
            return false;
        } else {
            this.input.elem.classList.add(this.input.classValueValidate);
            this.input.elem.classList.remove(this.input.classErrActivate);
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            console.log(`Input-lastName : l'email "${value}" est valide, prêt à être submit 🟩`);
            return true;
        }
    },
};
/** JS.DOC
 * @const birthDate
 * @description
 * @function birthDate.validator
 * @description
 */
export const birthDate = {
    input: {
        elem: document.querySelector("#input-birthDate"),
        classErrActivate: "input--err",
        classValueValidate: "input--valueValidate",
    },
    textErr: {
        elem: document.querySelector("#msgErr-birthDate"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const value = this.input.elem.value;
        const regex = /^\d{4,4}-\d{2,2}-\d{2,2}$/;

        if (!regex.test(value)) {
            this.input.elem.classList.add(this.input.classErrActivate);
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            console.log(`Input-birthDate : la date "${value}" n'est pas valide 🟥`);
            return false;
        } else {
            this.input.elem.classList.add(this.input.classValueValidate);
            this.input.elem.classList.remove(this.input.classErrActivate);
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            console.log(`Input-birthDate : la date "${value}" est valide 🟩`);
            return true;
        }
    },
};
/** JS.DOC
 * @const eventQuantity
 * @description
 * @function eventQuantity.validator
 * @description
 */
export const eventQuantity = {
    input: {
        elem: document.querySelector("#input-eventQuantity"),
        classErrActivate: "input--err",
        classValueValidate: "input--valueValidate",
    },
    textErr: {
        elem: document.querySelector("#msgErr-eventQuantity"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const value = this.input.elem.value;
        const regex = /^[0-9]\d{0,99}/;
        if (!regex.test(value)) {
            this.input.elem.classList.add(this.input.classErrActivate);
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            this.input.elem.classList.remove(this.input.classValueValidate);
            console.log("Input-eventQuantity : L'utilisateur n'a retenu aucune valeur 🟥");
            return false;
        } else {
            this.input.elem.classList.remove(this.input.classErrActivate);
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            this.input.elem.classList.add(this.input.classValueValidate);
            console.log(`Input-eventQuantity : L'utilisateur a participer à "${value}" aux évènement 🟩`);
            return true;
        }
    },
};
/** JS.DOC
 * @const location
 * @description
 * @function location.validator
 * @description
 */
export const location = {
    input: {
        elem: document.querySelectorAll(".input-location"),
    },
    textErr: {
        elem: document.querySelector("#msgErr-location"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const elems = Array.from(this.input.elem);
        const isChecked = elems.some((elem) => elem.checked);
        const selectedElem = elems.find((elem) => elem.checked);

        if (!isChecked) {
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            console.log("Input-location : Aucune localisation n'est choisie 🟥");
            return false;
        } else {
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            console.log(`Input-location : Localisation choisie : ID = ${selectedElem.id}, Value = ${selectedElem.value} 🟩`);
            return true;
        }
    },
};
/** JS.DOC
 * @const termsCondition
 * @description
 * @function termsCondition.validator
 * @description
 */
export const termsCondition = {
    input: {
        elem: document.querySelector("#input-termsCondition"),
        classErrActivate: "input--err",
        classValueValidate: "input--valueValidate",
    },
    textErr: {
        elem: document.querySelector("#msgErr-termsCondition"),
        classErrActivate: "msgErr--active",
    },
    validator: function () {
        const isChecked = this.input.elem.checked;

        if (!isChecked) {
            this.textErr.elem.classList.add(this.textErr.classErrActivate);
            console.log("Input-termsCondition : Les conditions d'utilisation n'ont pas été approuvées 🟥");
            return false;
        } else {
            this.textErr.elem.classList.remove(this.textErr.classErrActivate);
            console.log("Input-termsCondition : Les conditions d'utilisation ont été approuvées 🟩");
            return true;
        }
    },
};
