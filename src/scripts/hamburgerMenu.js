export function hamburgerEventListener(){
    let hamburgerButton = document.getElementById("hamburgerButton");
    let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0]; 
    hamburgerButton.addEventListener("click", () => { hamburgerMenu.classList.toggle("hidden"); });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 630) {
            hamburgerMenu.classList.add("hidden");
        }
    });
};