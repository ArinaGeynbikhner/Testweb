document.addEventListener("DOMContentLoaded", function () {
    const audioFiles = {
        circle1: new Audio("assets/sound1.mp3"),
        circle2: new Audio("assets/sound2.mp3"),
        circle3: new Audio("assets/sound3.mp3"),
        circle4: new Audio("assets/sound4.mp3")
    };

    const circles = document.querySelectorAll(".circle1, .circle2, .circle3, .circle4");

    // воспроизведение звука
    function playAudio(className) {
        const audio = audioFiles[className];
        if (audio) {
            audio.volume = 0.4;
            audio.play();

            // остановка анимации эквалайзера при конце звука
            audio.addEventListener("ended", function () {
                const equalizer = document.querySelector(`.${className} .equalizer`);
                if (equalizer) {
                    equalizer.classList.remove("active");
                }
            });
        }
    }

    circles.forEach(function (circle) {
        circle.addEventListener("click", function () {
            const className = this.classList[0];
            console.log("Клик на", className);
            playAudio(className);

            // анимация включение
            const equalizer = this.querySelector(".equalizer");
            if (equalizer) {
                equalizer.classList.add("active");
            }
        });
    });

    // создание точек для эквалайзика
    circles.forEach(function (circle) {
        const equalizer = circle.querySelector(".equalizer");
        const dotsGroup = equalizer.querySelector(".dots");
        const dotCount = 64; // Количество точек
        const radius = 45;  // Радиус круга

        // создание точкек и добавление их в группу точек
        for (let i = 0; i < dotCount; i++) {
            const angle = (i / dotCount) * Math.PI * 2;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            dot.setAttribute("cx", x);
            dot.setAttribute("cy", y);
            dot.setAttribute("r", "1");
            dot.classList.add("dot");

            // случайная задержка для анимации
            dot.style.animationDelay = `${Math.random() * 1.5}s`;

            dotsGroup.appendChild(dot);
        }
    });

});
