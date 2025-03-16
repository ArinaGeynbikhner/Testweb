document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("commandInput");
    const displayField = document.getElementById("commandDisplay");
    const cursor = document.querySelector(".cursor");

    const section2 = document.querySelector(".section2");
    const nextSection = document.querySelector(".nextSection");
    const finalSection = document.querySelector(".finalSection");
    const backButton = document.getElementById("backButton");

    // Гарантированный автофокус на поле ввода при загрузке
    setTimeout(() => inputField.focus(), 100);

    // Клик по консоли также активирует ввод
    document.querySelector(".console").addEventListener("click", function () {
        inputField.focus();
    });

    inputField.addEventListener("input", function () {
        displayField.textContent = inputField.value; // Отображаем вводимый текст
    });

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Предотвращаем стандартное поведение Enter
            executeCommand();
        }
    });

    function executeCommand() {
        const command = inputField.value.trim().toLowerCase(); // Получаем команду

        if (command === "info [face]") {
            section2.classList.add("hidden"); // Скрываем текущую секцию
            nextSection.classList.remove("hidden"); // Показываем nextSection
            finalSection.classList.add("hidden"); // Убеждаемся, что finalSection скрыта
        } else if (command === "next") {
            section2.classList.add("hidden"); // Скрываем текущую секцию
            nextSection.classList.add("hidden"); // Скрываем nextSection
            finalSection.classList.remove("hidden"); // Показываем finalSection
        } else {
            alert("Invalid command! Try again.");
        }

        // Очищаем поле ввода
        inputField.value = "";
        displayField.textContent = "";
        cursor.style.display = "inline"; // Показываем курсор снова
    }

    // Обработчик кнопки возврата в секцию 2
    if (backButton) {
        backButton.addEventListener("click", function () {
            nextSection.classList.add("hidden"); // Скрываем всю секцию
            section2.classList.remove("hidden"); // Показываем section2
        });
    }

    // Если поле ввода теряет фокус — возвращаем обратно
    inputField.addEventListener("blur", function () {
        setTimeout(() => inputField.focus(), 100);
    });
});
