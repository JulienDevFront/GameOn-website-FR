import { firstName, lastName, email, birthDate, eventQuantity, location, termsCondition } from "../validator/inputElements.js";

const form = document.querySelector("#formRegisterEvent");

export const formRegisterEvent = () => {
    form.addEventListener("submit", (e) => {
        const inputs = [firstName, lastName, email, birthDate, eventQuantity, location, termsCondition];

        for (const input of inputs) {
            if (!input.validator()) {
                e.preventDefault();
            } else {
                console.log("le formulaire est envoyé !");
            }
        }
    });
};
