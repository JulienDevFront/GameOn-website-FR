/** JS.DOC
 * @module topNavMenuToggle
 * @description Gère l'affichage du menu de navigation de l'element "Header" en ajoutant ou retirant
 * des classes  actives  lors de  l'interaction avec le  bouton  "#header__btn-toggle-nav" du  menu.
 */

const elems = {
    btnMenuToggle: {
        elem: () => document.querySelector("#header__btn-toggle-nav"),
        classActive: "header__btn-toggle-nav--active",
    },
    nav: {
        elem: () => document.querySelector(".header__nav"),
        classActive: "header__nav--active",
    },
};

/** JS.DOC
 * @function topNavMenuToggle
 * @description Attache  un gestionnaire  d'événements au bouton "toggle"  pour afficher ou masquer  le menu de navigation.
 * Si le bouton est cliqué, il bascule les classes actives pour afficher ou masquer le menu si déjà cliqué. Un gestionnaire
 * d'événements supplémentaire est attaché à "window" pour fermer le menu si l'utilisateur clique en dehors.
 */
export const topNavMenuToggle = () => {
    elems.btnMenuToggle.elem().addEventListener("click", (e) => {
        // console.log("Toggle menu button clicked");
        e.stopPropagation();
        if (elems.btnMenuToggle.elem().classList.contains(elems.btnMenuToggle.classActive)) {
            elems.btnMenuToggle.elem().classList.remove(elems.btnMenuToggle.classActive);
            elems.nav.elem().classList.remove(elems.nav.classActive);
        } else {
            elems.btnMenuToggle.elem().classList.add(elems.btnMenuToggle.classActive);
            elems.nav.elem().classList.add(elems.nav.classActive);
        }
    });
    window.document.addEventListener("click", (e) => {
        if (!elems.nav.elem().contains(e.target)) {
            elems.btnMenuToggle.elem().classList.remove(elems.btnMenuToggle.classActive);
            elems.nav.elem().classList.remove(elems.nav.classActive);
        }
    });
};
