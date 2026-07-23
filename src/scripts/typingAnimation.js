export function typingAnimation(){
    let letters = []; 
    let string = "";
    let i = 0;
    function startTyping(){
        let target = document.getElementById("title");
        string = target.innerText;
        letters = string.split("");
        target.innerText = "";
        let recursiveTyping = function(target){
            if(i < letters.length){
                target.innerHTML += letters[i];
                i++;
                setTimeout(() => recursiveTyping(target), 75);
            }
        }
        recursiveTyping(target);
    }
    startTyping();
}