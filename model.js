document.addEventListener("DOMContentLoaded", () => {
    let blackHole = document.querySelector(".black-hole");
    let draggables = document.querySelectorAll(".draggable");
    let firstSection = document.querySelector('.my_common_screen'); // Первая секция
    let secondSection = document.querySelector('.section2'); // Вторая секция

    let activeItem = null;

    // Проверяем, что элементы draggable существуют
    console.log('Количество draggable элементов на странице: ', draggables.length);

    // Добавляем обработчик перетаскивания для каждого draggable элемента
    draggables.forEach(item => {
        item.addEventListener("mousedown", (e) => {
            if (e.button !== 0) return; // Только левая кнопка мыши

            console.log('Начало перетаскивания элемента', item);

            activeItem = item;

            // Делаем элемент абсолютно позиционированным
            activeItem.style.position = "absolute";
            activeItem.style.zIndex = "1000";
            activeItem.style.margin = "0";

            // Перемещаем элемент по координатам курсора
            document.body.appendChild(activeItem);
            moveItem(e);

            document.addEventListener("mousemove", moveItem);
            document.addEventListener("mouseup", dropItem);
        });
    });

    function moveItem(e) {
        if (!activeItem) return;

        activeItem.style.left = `${e.pageX - activeItem.offsetWidth / 2}px`;
        activeItem.style.top = `${e.pageY - activeItem.offsetHeight / 2}px`;
    }

    function dropItem(e) {
        if (!activeItem) return;

        const holeRect = blackHole.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();

        if (
            itemRect.left + itemRect.width / 2 > holeRect.left &&
            itemRect.left + itemRect.width / 2 < holeRect.right &&
            itemRect.top + itemRect.height / 2 > holeRect.top &&
            itemRect.top + itemRect.height / 2 < holeRect.bottom
        ) {
            console.log('Элемент попал в черную дыру');

            activeItem.classList.add("falling");

            setTimeout(() => {
                // Удаляем элемент после 700 мс (когда он «падает» в черную дыру)
                if (activeItem && activeItem.parentElement) {
                    activeItem.remove();
                    console.log('Элемент удалён');
                    checkIfAllDisappeared(); // Проверяем, все ли исчезли
                }
            }, 700);
        }
    }

    function checkIfAllDisappeared() {
        // Проверяем, что все элементы с классом .draggable исчезли
        const draggableElements = document.querySelectorAll(".draggable");
        console.log('Оставшиеся draggable элементы: ', draggableElements.length);

        if (draggableElements.length === 0) {
            console.log('Все элементы исчезли, переключаем секцию');
            hideSection(firstSection); // Скрываем первую секцию
            showSection(secondSection); // Показываем вторую секцию
        } else {
            console.log('Не все элементы исчезли');
        }
    }

    // Функция скрытия секции
    function hideSection(section) {
        if (section) {
            section.style.display = "none"; // Прячем секцию с помощью display: none
            console.log('Первая секция скрыта');
        } else {
            console.log('Первая секция не найдена');
        }
    }

    // Функция показа секции
    function showSection(section) {
        if (section) {
            section.classList.remove("hidden"); // Убираем скрытие
            section.classList.add("show"); // Добавляем класс для показа
            section.style.opacity = 1; // Обеспечиваем видимость
            console.log('Вторая секция показана');
            
            
            const headCase = section.querySelector('.head_case');
            console.log('head_case:', headCase);
        } else {
            console.log('Вторая секция не найдена');
        }
    }
});
