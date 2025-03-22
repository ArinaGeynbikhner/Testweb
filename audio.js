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
        }
    }


    circles.forEach(circle => {
        circle.addEventListener("click", function () {
            const className = this.classList[0]; // Получаем имя класса (например, circle1)
            console.log(`Клик на ${className}`);
            playAudio(className);
        });
    });


    console.log("Количество draggable элементов на странице:", circles.length);
});
