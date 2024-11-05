/** JS.DOC
 * @module modalRegisterDisplay
 * @description Gère l'affichage et la fermeture de  la modale d'inscription
 * à l'évènement, avec l'aide de gestionnaires d'événements de type "click".
 */

/** JS.DOC
 * @constant elems
 * @description Structure contenant les éléments pour gérer l'affiche
 * et  la fermeture de la  modale  d'inscription  et  leurs  classes.
 */
const elems = {
    buttonOpenModal: () => document.querySelector("#button--open-modal-register"),
    buttonCloseModal: () => document.querySelector("#button--close-modal-register"),
    modal: {
        elem: () => document.querySelector("#modal-register"),
        classActive: "modal-register--activate",
    },
};

/** JS.DOC
 * @function modalRegisterDisplay
 * @description Ajoute  un gestionnaire  d'événement lors  du click
 * pour ouvrir ou fermer la modale d'inscription pour un événement.
 */
export const modalRegisterDisplay = () => {
    elems.buttonOpenModal().addEventListener("click", () => {
        elems.modal.elem().classList.add(elems.modal.classActive);
        console.log("Modale ouverte :", elems.modal.elem());
    });

    elems.buttonCloseModal().addEventListener("click", () => {
        elems.modal.elem().classList.remove(elems.modal.classActive);
        console.log("Modale fermée :", elems.modal.elem());
    });
};
