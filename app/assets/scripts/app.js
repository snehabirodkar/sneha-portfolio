import $ from 'jquery';
import "../styles/style.css";
import MobileMenu from "./modules/Mobilemenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";
import ActiveLinks from "./modules/ActiveLinks";
import Modal from "./modules/Modal";
import "lazysizes";
if (module.hot) {
    module.hot.accept();
}
console.log("Hello world");

const mobileMenu = new MobileMenu();

new RevealOnScroll($(".section"), "40%");

new SmoothScroll();
new ActiveLinks();
new Modal();