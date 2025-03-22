document.addEventListener("DOMContentLoaded", function () {
    const audioFiles = {
        circle1: new Audio("assets/sound1.mp3"),
        circle2: new Audio("assets/sound2.mp3"),
        circle3: new Audio("assets/sound3.mp3"),
        circle4: new Audio("assets/sound4.mp3")
    };

    const circles = document.querySelectorAll(".circle1, .circle2, .circle3, .circle4");

    // воспроизведение звука при клике
    function playAudio(circleClass) {
        if (audioFiles[circleClass]) {
            audioFiles[circleClass].volume = 0.4; 
            audioFiles[circleClass].play().catch(error => {
                console.error(`Ошибка воспроизведения для ${circleClass}:`, error);
            });

            // останавка анимации эквалайзера, когда звук выключается
            audioFiles[circleClass].addEventListener("ended", function () {
                const equalizer = document.querySelector(`.${circleClass} .equalizer`);
                if (equalizer) {
                    equalizer.classList.remove("active"); 
                }
            });
        }
    }

    circles.forEach(circle => {
        circle.addEventListener("click", function () {
            const className = this.classList[0]; // Получаем имя класса (например, circle1)
            console.log(`Клик на ${className}`);
            playAudio(className);

            // анимация эквалайзера при клике
            const equalizer = this.querySelector(".equalizer");
            if (equalizer) {
                equalizer.classList.add("active");
            }
        });
    });

});

