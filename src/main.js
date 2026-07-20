import './styles.css';
let lastIndex = sessionStorage.getItem("lastSessionIndex");
const randomMessages = [
    "Have a great day!",
    "Click refresh :P",
    "Javascript is cool 😎",
    "Secret message...",
    "These messages are randomly generated 🤯",
    "Psst, use the navigation bar!",
    "This message has a 1/8 chance of appearing",
    "Woaahhh cool transition ✨"
] // it was fun making these random text blurbs 🎉
let randomInt = Math.floor(Math.random() * randomMessages.length);
document.addEventListener("DOMContentLoaded", () => {
    let nightButton = document.getElementById("nightButton");
    nightButton.addEventListener("click", () => {darkModeEnable()});    
    document.querySelector(".page-loader").id = "loaderHidden";
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        document.getElementById("nightButtonImage").src = "https://www.svgrepo.com/show/432507/light-mode.svg";
    }
})
while(randomInt == lastIndex){ // checks if it's the same message last time the page was loaded
    randomInt = Math.floor(Math.random() * randomMessages.length);
}

let target = document.getElementById("randomText");
if(target){
    sessionStorage.setItem("lastSessionIndex", randomInt);
    target.innerText = randomMessages[randomInt];
}
window.addEventListener("click", (e) => {
    const particleCount = 10;
    const posX = e.clientX;
    const posY = e.clientY;
    for(let i = 0; i < particleCount; i++) {
        createParticle(posX, posY);
    }
})
const createParticle = function(x, y){
    const angle = Math.random() * Math.PI * 2; // random angle in radians required for angles to work since that's how it works under the hood
    const speed = 3 + Math.random() * 3;
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.position = "fixed";
    particle.style.top = `${y}px`;
    particle.style.left = `${x}px`;
    document.body.appendChild(particle);
    const velocityX = Math.cos(angle) * speed;
    const velocityY = Math.sin(angle) * speed;
    let opacity = 1;
    let scale = 1;
    const updateMovement = function(speed, angle){
        x += velocityX;
        y += velocityY;

        opacity -= 0.03;
        scale -= 0.02;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = opacity;
        particle.style.transform = `scale(${scale})`;

        if(opacity <= 0){
            particle.remove()
        } else {
            requestAnimationFrame(updateMovement);
        }
    }
    requestAnimationFrame(updateMovement);
}
function darkModeEnable(){
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
}