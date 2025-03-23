document.addEventListener("DOMContentLoaded", function () {
    const dhmIcon = document.querySelector(".dhm-icon");  
    const timerSection = document.querySelector(".timerSection");  
    const circles = document.querySelectorAll(".circle1, .circle2, .circle3, .circle4");  
    const equalizers = document.querySelectorAll(".equalizer"); 

    const audioFiles = {
        circle1: new Audio("assets/sound1.mp3"),
        circle2: new Audio("assets/sound2.mp3"),
        circle3: new Audio("assets/sound3.mp3"),
        circle4: new Audio("assets/sound4.mp3")
    };

    // проверка загрузки аудио 
    Object.keys(audioFiles).forEach(key => {
        audioFiles[key].addEventListener('canplaythrough', function () {
            console.log(`${key} загружен`);
        });
        audioFiles[key].addEventListener('error', function () {
            console.error(`Ошибка загрузки ${key}`);
        });
    });

    // запуск аудио при клике на кружок
    circles.forEach(circle => {
        circle.addEventListener("click", function () {
            console.log('Клик на круг:', this.classList[0]);

            // иконка DHM становится видимой
            if (dhmIcon) {
                dhmIcon.classList.remove("hidden");  
                dhmIcon.style.display = "block";  
                console.log("Иконка DHM теперь видна");
            }

            // проигрыш звука
            const className = this.classList[0]; 
            const audio = audioFiles[className];
            if (audio) {
                audio.volume = 0.4;
                audio.play().catch(error => console.error("Ошибка воспроизведения:", error));
            }

            // показ эквалайзера для круголёчка
            const equalizer = this.querySelector(".equalizer");
            if (equalizer) {
                equalizer.classList.add("active");
            }
        });
    });

    // нажатие на DHM
    if (dhmIcon) {
        dhmIcon.addEventListener("click", function () {
            console.log("Нажата иконка DHM");

            // скрыть все кружочки и эквалайзеры
            hideCirclesAndEqualizers();

            // переход к секции
            if (timerSection) {
                timerSection.scrollIntoView({ behavior: "smooth" });
                console.log("Переход к секции таймера");
            }

            // скрыть иконку DHM
            hideDHMIcon();
        });
    }

    function hideCirclesAndEqualizers() {
        circles.forEach(circle => {
            circle.style.display = "none";  // скрыть кружочки
        });

        equalizers.forEach(equalizer => {
            equalizer.classList.remove("active");  // остановка анимации 
        });

        console.log("Все кружочки и эквалайзеры скрыты.");
    }

    function hideDHMIcon() {
        if (dhmIcon) {
            dhmIcon.style.display = "none";
            console.log("Иконка DHM скрыта.");
        }
    }
});

