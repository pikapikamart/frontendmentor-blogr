const navBurger = document.querySelector("[data-toggle=navbar]");
const burger = document.querySelector("[data-toggle=navbar] > img");
const dropdownNav = document.querySelector("#navbar-dropdown");

navBurger.addEventListener("click", ()=>{
    if (navBurger.classList.contains("change")) {
        burger.setAttribute("src", "images/icon-hamburger.svg");
        navBurger.classList.toggle("change");
        dropdownNav.classList.toggle("show-nav");
    } else {
        navBurger.classList.toggle("change");
        dropdownNav.classList.toggle("show-nav");
        burger.setAttribute("src", "images/icon-close.svg");
    }
});