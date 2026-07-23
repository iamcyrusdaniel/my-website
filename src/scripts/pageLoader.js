export function pageLoader(){
    document.querySelector(".page-loader").id = "loaderHidden";
    setTimeout(() => {
        document.body.classList.add("transitionColor");
        let uls = document.getElementsByTagName("ul");
        uls[0].classList.add("transitionColor");
        uls[1].classList.add("transitionColor");
    }, 1);
}