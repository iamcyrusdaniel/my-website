export function confettiEventListener() {
    window.addEventListener("click", (e) => {
        const particleCount = 10;
        const posX = e.clientX;
        const posY = e.clientY;
        let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
        localStorage.setItem("clickCount", clickCount + 1);
        for(let i = 0; i < particleCount; i++) {
            createParticle(posX, posY);
        }
    })
    const createParticle = function(x, y){
        let count = parseInt(localStorage.getItem("confettiCount")) || 0;
        localStorage.setItem("confettiCount", count + 1);
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
};