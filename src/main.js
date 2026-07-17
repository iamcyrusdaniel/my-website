import './styles.css';
const randomMessages = [
    "Have a great day!",
    "Click refresh :P",
    "Javascript is cool 😎",
    "Secret message...",
    "This message has a 1/5 chance of appearing"
]
let lastIndex = sessionStorage.getItem("lastSessionIndex");
let randomInt = Math.floor(Math.random() * 5);
while(randomInt == lastIndex){
    randomInt = Math.floor(Math.random() * 5);
}
let target = document.getElementById("randomText");
sessionStorage.setItem("lastSessionIndex", randomInt);
target.innerText = randomMessages[randomInt];