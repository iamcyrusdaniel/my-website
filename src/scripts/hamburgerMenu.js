function hamburgerEventListener(){
    let hamburgerButton = document.getElementById("hamburgerButton");
    let hamburgerMenu = document.getElementById("hamburgerMenu"); 
    hamburgerButton.addEventListener("click", () => { hamburgerMenu.classList.toggle("hidden"); });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 630) {
            hamburgerMenu.classList.add("hidden");
        }
    });
}