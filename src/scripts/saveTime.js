let startTime = Date.now();

export function saveTime(){
    window.addEventListener("beforeunload", () => {
        let totalTime = parseInt(localStorage.getItem("totalTime")) || 0;
        let addedTime = Date.now() - startTime;
        totalTime += addedTime;
        localStorage.setItem("totalTime", totalTime);
    });
}