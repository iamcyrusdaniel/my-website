function randomText(){
    let lastIndex = sessionStorage.getItem("lastSessionIndex");
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

    while(randomInt == lastIndex){ // checks if it's the same message last time the page was loaded
        randomInt = Math.floor(Math.random() * randomMessages.length);
    }

    let target = document.getElementById("randomText");
    if(target){
        sessionStorage.setItem("lastSessionIndex", randomInt);
        target.innerText = randomMessages[randomInt];
    }
}