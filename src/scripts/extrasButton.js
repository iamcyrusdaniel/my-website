export function extrasEventListener(){
    let extrasButton = document.getElementById("extrasButton");
    if(extrasButton){
        extrasButton.addEventListener("click", () => {
            extrasButton.remove();
            document.getElementById("extras").classList.remove("hidden");
        })
    }
};