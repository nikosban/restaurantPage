import {loadHomePage} from "./home.js"
import {loadContactPage} from "./contact.js"

console.log("Hello World");

//setup the initial listeners

let homepage = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const contentContainer  = document.getElementById("content");

loadHomePage();

function clear () {
    while(contentContainer.firstChild) {
         contentContainer.removeChild(contentContainer.firstChild);
    }
}

//test the homepage call
homepage.addEventListener("click", () => {
    clear();
    loadHomePage();
})
contact.addEventListener("click", () => {
    clear();
    loadContactPage();
})


