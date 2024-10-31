import { topNavEventLink } from "./topNavEventLink.js";
import { topNavMenuToggle } from "./topNavMenuToggle.js";

topNavEventLink();
topNavMenuToggle();

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
