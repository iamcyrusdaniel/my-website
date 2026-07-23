import navbar from "../components/navbar.html?raw"
import hamburger from "../components/hamburger.html?raw"
export function htmlInjector() {
    const navbarTarget = document.getElementsByClassName("navbar")[0];
    const hamburgerTarget = document.getElementsByClassName("hamburgerMenu")[0];
    navbarTarget.innerHTML = navbar;
    hamburgerTarget.innerHTML = hamburger;
    function highlightCurrentPage() {
        const currentPage = window.location.pathname;
        document.querySelectorAll("a").forEach(link => {
            if(link.pathname === currentPage) link.id = "current";
        });
    }
};