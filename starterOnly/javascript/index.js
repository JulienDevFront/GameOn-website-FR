import { topNavEventLink } from "./interface/topNavEventLink.js";
import { topNavMenuToggle } from "./interface/topNavMenuToggle.js";
import { modalRegisterDisplay } from "./interface/modalRegisterDisplay.js";

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
