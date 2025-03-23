document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("commandInput");
    const displayField = document.getElementById("commandDisplay");
    const cursor = document.querySelector(".cursor");

    const section2 = document.querySelector(".section2");
    const nextSection = document.querySelector(".nextSection");
    const finalSection = document.querySelector(".finalSection");
    const backButton = document.getElementById("backButton");

    // автофокус на поле ввода при загрузке
    setTimeout(() => inputField.focus(), 100);

    // клик по консоли активирует ввод
    document.querySelector(".console").addEventListener("click", function () {
        inputField.focus();
    });

    inputField.addEventListener("input", function () {
        displayField.textContent = inputField.value; // отображаем вводимый текст
    });

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
            executeCommand();
        }
    });

    function executeCommand() {
        const command = inputField.value.trim().toLowerCase();

        if (command === "info [face]") {
            section2.classList.add("hidden"); 
            nextSection.classList.remove("hidden");
            finalSection.classList.add("hidden");
        } else if (command === "next") {
            section2.classList.add("hidden");
            nextSection.classList.add("hidden");
            finalSection.classList.remove("hidden");
        } else {
            alert("Invalid command! Try again.");
        }

        // очищаем поле ввода
        inputField.value = "";
        displayField.textContent = "";
        cursor.style.display = "inline"; // показываем курсор снова
    }

    // обработчик кнопки возврата в секцию 2
    if (backButton) {
        backButton.addEventListener("click", function () {
            nextSection.classList.add("hidden"); // Скрываем всю секцию
            section2.classList.remove("hidden"); // Показываем section2
        });
    }

    inputField.addEventListener("blur", function () {
        setTimeout(() => inputField.focus(), 100);
    });
});
