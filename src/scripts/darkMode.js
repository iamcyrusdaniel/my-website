export function darkModeEventListener(){
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        document.getElementById("nightButtonImage").src = "https://www.svgrepo.com/show/432507/light-mode.svg";
    }
    let nightButton = document.getElementById("nightButton");
    nightButton.addEventListener("click", () => {
        darkModeEnable()
        let button = document.getElementById("nightButtonImage");
        button.classList.remove("spin");
        void button.offsetWidth;
        button.classList.add("spin");
    });
}

function darkModeEnable(){
    let count = parseInt(localStorage.getItem("darkModeToggleCount")) || 0;
    localStorage.setItem("darkModeToggleCount", count + 1);
    
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");
    let nightButton = document.querySelector("#nightButtonImage");
    if(isDark) {
        nightButton.src = "https://www.svgrepo.com/show/432507/light-mode.svg";
        localStorage.setItem("theme", "dark");
    } else {
        nightButton.src = "https://cdn-icons-png.flaticon.com/512/6714/6714978.png";
        localStorage.setItem("theme", "light");
    }
};