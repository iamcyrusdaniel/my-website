function pageLoader(){
    document.querySelector(".page-loader").id = "loaderHidden";
    setTimeout(() => {
    
    let extrasButton = document.getElementById("extrasButton");
    if(extrasButton){
        extrasButton.addEventListener("click", () => {
            extrasButton.remove();
            document.getElementById("extras").classList.remove("hidden");
        })
    }
    document.body.classList.add("transitionColor");
    let uls = document.getElementsByTagName("ul");
    uls[0].classList.add("transitionColor");
    uls[1].classList.add("transitionColor");
    }, 1);
}