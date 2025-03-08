const draggables = document.querySelectorAll(".draggable");
const blackHole = document.getElementById("black-hole");
let absorbedCount = 0;

draggables.forEach((el, index) => {
    el.style.left = `${100 + index * 120}px`; // Размещаем элементы в ряд

    el.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    });

    el.addEventListener("dragend", (event) => {
        const rect = blackHole.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;
        
        if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
            // Спиральное движение в черную дыру
            el.style.transition = "transform 0.8s ease-in-out, opacity 0.8s";
            el.style.transform = `scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
            el.style.opacity = "0";
            
            absorbedCount++;
            if (absorbedCount === draggables.length) {
                setTimeout(() => {
                    document.body.classList.add("absorption"); // Искажение экрана
                }, 500);

                setTimeout(() => {
                    document.body.classList.add("black-hole-effect"); // Эффект разрыва
                }, 1200);

                setTimeout(() => {
                    window.location.href = "nextpage.html"; // Переход на другую страницу
                }, 1700);
            }
        }
    });
});
