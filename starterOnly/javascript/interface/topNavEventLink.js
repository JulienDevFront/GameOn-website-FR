/** JS.DOC
 * @module topNavEventLink
 * @description Gère les  événements de survol pour les liens  de navigation dans le menu supérieur.
 * Ajoute une classe active au lien survolé et retire cette classe lorsque la souris quitte le lien.
 * Le premier lien reçoit une classe par défaut lorsqu'aucun autre lien n'est actif.
 */

const className = {
    link: "header__nav__link",
    linkActive: "header__nav__link--active",
    linkActiveDefault: "header__nav__link--activeDefault",
};

/** JS.DOC
 * @function topNavEventLink
 * @description Attache des gestionnaires d'événements de survol et de sortie aux  liens de navigation.
 * Lorsque le lien est survolé, il ajoute la classe active, et supprime la classe active lors du départ
 * de la souris. La classe active par défaut est également gérée pour le premier lien.
 */
export const topNavEventLink = () => {
    const links = document.querySelectorAll("." + `${className.link}`);
    // console.log(links);
    links.forEach((link) => {
        link.addEventListener("mouseover", (e) => {
            if (links[0] && !link[0]) {
                links[0].classList.remove(className.linkActiveDefault);
            }
            link.classList.add(className.linkActive);
        });

        link.addEventListener("mouseout", (e) => {
            link.classList.remove(className.linkActive);
            links[0].classList.add(className.linkActiveDefault);
        });
    });
};
