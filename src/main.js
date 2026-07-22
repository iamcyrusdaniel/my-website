import './styles.css';
let lastIndex = sessionStorage.getItem("lastSessionIndex");
let string = "";
let letters = []; 
let i = 0;
const randomMessages = [
    "Try dark mode",
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
    let target = document.getElementById("title");
    string = target.innerText;
    letters = string.split("");
    target.innerText = "";
    typingAnimation(target);
    let nightButton = document.getElementById("nightButton");
    let extrasButton = document.getElementById("extrasButton");
    nightButton.addEventListener("click", () => {
        darkModeEnable()
        let button = document.getElementById("nightButtonImage");
        button.classList.remove("spin");
        void button.offsetWidth;
        button.classList.add("spin");
    });    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        document.getElementById("nightButtonImage").src = "https://www.svgrepo.com/show/432507/light-mode.svg";
    }
    document.querySelector(".page-loader").id = "loaderHidden";
    if(extrasButton){
        extrasButton.addEventListener("click", () => {
            extrasButton.remove();
            document.getElementById("extras").classList.remove("hidden");
        })
    }
    setTimeout(() => {
        document.body.classList.add("transitionColor");
        let uls = document.getElementsByTagName("ul");
        uls[0].classList.add("transitionColor");
        uls[1].classList.add("transitionColor");
        console.log("classes applied")
    }, 1);
    let timelineTextContainers = ["scratchButtonText", "codeButtonText", "unityButtonText", "stardanceButtonText"];
    let timelineButtons = ["scratchButton", "codeButton", "unityButton", "stardanceButton"];
    let timelineButtonTexts = [
        "For about a year I did scratch block coding",
        "I moved on to HTML, JavaScript, and CSS starting from the 2025 summer break",
        "I picked up Unity and LeetCode starting from the New Year",
        "Now I'm applying all of my knowledge here, on Stardance!"
    ];
    for(let i = 0; i < timelineButtons.length; i++){
        let textTarget = document.getElementById(timelineTextContainers[i]);
        let buttonTarget = document.getElementById(timelineButtons[i]);
        if(buttonTarget) buttonTarget.addEventListener("mouseenter", () => {
            textTarget.innerText = timelineButtonTexts[i];
        });
        if(buttonTarget) buttonTarget.addEventListener("mouseleave", () => {
            textTarget.innerText = "";
        });
    }
    let hamburgerButton = document.getElementById("hamburgerButton");
    let hamburgerMenu = document.getElementById("hamburgerMenu"); 
    hamburgerButton.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("hidden");
        console.log("this line isn't executing");
    });
})
window.addEventListener("resize", () => {
    if (window.innerWidth > 630) {
        hamburgerMenu.classList.add("hidden");
    }
});
let typingAnimation = function(target){
    if(i < letters.length){
        target.innerHTML += letters[i];
        i++;
        setTimeout(() => typingAnimation(target), 75);
    }
}
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
    const updateMovement = function(){
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