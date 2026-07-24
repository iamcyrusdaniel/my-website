export function extrasEventListener(){
    let extrasButton = document.getElementById("extrasButton");
    if(extrasButton){
        extrasButton.addEventListener("click", () => {
            extrasButton.remove();
            document.getElementById("extrasBackground").classList.remove("hidden");
            loadStatistics();
        })
    }
    let loadStatistics = function(){
        let statisticsContainer = document.getElementById("statistics");
        if(statisticsContainer){
            statisticsContainer.classList.remove("hidden");

            let darkModeToggleCount = document.createElement("h6");
            darkModeToggleCount.textContent =`🌙 Dark mode toggles: ${parseInt(localStorage.getItem("darkModeToggleCount")) || 0}`;
            statisticsContainer.appendChild(darkModeToggleCount);

            let confettiCount = document.createElement("h6");
            confettiCount.textContent = `🎉 Confetti launched: ${localStorage.getItem("confettiCount")}`;
            statisticsContainer.appendChild(confettiCount);
            
            let clickCount = document.createElement("h6");
            clickCount.textContent = `🖱️ Clicks: ${localStorage.getItem("clickCount")}`;
            statisticsContainer.appendChild(clickCount);
            
            let pageLoads = document.createElement("h6");
            pageLoads.textContent = `📄 Page loads: ${localStorage.getItem("pageLoads")}`;
            statisticsContainer.appendChild(pageLoads);
            
            const ms = localStorage.getItem("totalTime");
            const seconds = Math.floor(ms / 1000) % 60;
            const minutes = Math.floor(ms / 1000 / 60) % 60;
            const hours = Math.floor(ms / 1000 / 60 / 60);
            let totalTime = document.createElement("h6");
            totalTime.textContent = `⏰ Time on site: ${hours}h ${minutes}m ${seconds}s`;
            statisticsContainer.appendChild(totalTime);
        };
    }
}