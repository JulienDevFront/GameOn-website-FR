import { topNavEventLink } from "./topNavEventLink.js";
import { topNavMenuToggle } from "./topNavMenuToggle.js";
import { modalRegisterDisplay } from "./modalRegisterDisplay.js";

topNavEventLink();
topNavMenuToggle();
modalRegisterDisplay();

// DOM Elements
const modalbg = document.querySelector(".modal-register");
const modalBtn = document.querySelectorAll(".button-modal");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
