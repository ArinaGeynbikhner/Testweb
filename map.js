document.addEventListener("DOMContentLoaded", function () {
    const pairs = [
        [".building1", ".center"],
        [".building2", ".tunnel1-6-08"],
        [".building3", ".tunnel1-9-07"],
        [".building4", ".tunnel1-10-06"],
        [".building6", ".tunnel2-3-01"],
        [".building7", ".tunnel2-5-06"],
        [".building8", ".tunnel2-8-10"],
        [".building9", ".tunnel3-1-02"],
        [".building24", ".tunnel3-3-06"],
        [".building10", ".tunnel3-6-08"],
        [".building11", ".tunnel3-9-10"],
        [".building12", ".tunnel4-2-03"],
        [".building13", ".tunnel4-5-07"],
        [".building14", ".tunnel5-2-03"],
        [".building15", ".tunnel5-6-08"],
        [".building16", ".tunnel5-7-10"],
        [".building17", ".tunnel6-6-03"],
        [".building18", ".tunnel6-9-09"],
        [".building23", ".tunnel6-10-10"],
        [".building20", ".tunnel7-1-02"],
        [".building21", ".tunnel7-3-10"],
        [".building22", ".tunnel7-6-10"],
        [".building19", ".tunnel8-6-10"]
    ];

    let currentIndex = 0; // Индекс текущей пары

    function showNextPair() {
        if (currentIndex < pairs.length) {
            const [building, tunnel] = pairs[currentIndex];
            document.querySelector(building).classList.add("show");
            document.querySelector(tunnel).classList.add("show");
            currentIndex++;
        }
    }

    function hidePreviousPair() {
        if (currentIndex > 0) {
            currentIndex--;
            const [building, tunnel] = pairs[currentIndex];
            document.querySelector(building).classList.remove("show");
            document.querySelector(tunnel).classList.remove("show");
        }
    }

    function handleScroll(event) {
        if (event.deltaY > 0) {
            showNextPair(); // Скролл вниз — показываем следующую пару
        } else if (event.deltaY < 0) {
            hidePreviousPair(); // Скролл вверх — скрываем предыдущую пару
        }
    }

    document.addEventListener("wheel", handleScroll); // Добавляем обработчик скролла
});

document.addEventListener("DOMContentLoaded", function () {
    const echolocationBlock = document.querySelector(".text-block-map");
    const finalSection = document.querySelector(".finalSection");
    const echolocationSection = document.querySelector(".echolocationSection");

    echolocationBlock.addEventListener("click", function () {
        finalSection.classList.add("hidden"); // Скрываем текущую секцию
        echolocationSection.classList.remove("hidden"); // Показываем новую секцию
        setTimeout(() => {
            echolocationSection.classList.add("show"); // Добавляем плавное появление
        }, 10);
    });
});
