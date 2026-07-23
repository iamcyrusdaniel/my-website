function timelineEventListener() {
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
}