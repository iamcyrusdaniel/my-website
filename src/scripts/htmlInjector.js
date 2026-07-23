import navbar from "../components/navbar.html?raw"
export function htmlInjector() {
    const navbarTarget = document.getElementById("navbar");
    const hamburgerTarget = document.getElementById("hamburger");
    navbarTarget.innerHTML = navbar;
};