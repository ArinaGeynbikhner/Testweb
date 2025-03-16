// Массив символов для шифрования
const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

// Функция для генерации случайной строки заданной длины
function randomString(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    return result;
}

// Функция для шифрования только выбранных слов
function encryptSelectedWords(blockId, wordsToEncrypt) {
    const block = document.querySelector(blockId);
    if (!block) return; // Если блок не найден, выходим

    let originalText = block.innerHTML;

    // Сохраняем <br> теги как маркер, чтобы их не потерять
    const preservedText = originalText.replace(/<br\s*\/?>/g, '___BR___');
    
    // Разделяем текст на слова
    let words = preservedText.split(/\s+/); // Улучшенный разбор текста по пробелам

    // Используем setInterval для плавного обновления
    let interval = setInterval(() => {
        let updated = false;
        const newWords = words.map(word => {
            // Если слово входит в список слов для шифрования, заменяем его на случайное
            if (wordsToEncrypt.includes(word.replace(/[^a-zA-Z]/g, ''))) { // Игнорируем знаки препинания
                updated = true; 
                return randomString(word.length); 
            } else {
                return word; 
            }
        });

        // Восстанавливаем <br> теги, заменяя маркер назад
        const newText = newWords.join(' ').replace(/___BR___/g, '<br>');

        // Обновляем содержимое блока, если были изменения
        if (updated) {
            block.innerHTML = newText;
        } else {
            clearInterval(interval); // Если изменений нет, прекращаем интервал
        }
    }, 50); // Интервал смены слов
}

// Ждем загрузки DOM, чтобы все блоки были найдены
document.addEventListener("DOMContentLoaded", function () {
    // Слово, которые будут шифроваться для каждого блока
    const textBlockWords = {
        '.text-block': ['archaeological', 'excavations', 'Tunnel', 'office', 'General', 'discovered', 'material', 'corridors', 'long-term'],
        '.text-block2': ['cast', 'expression', 'psychological', 'waves', 'Luminaria', 'radio', 'influence', 'resistance', 'emitted'],
        '.text-block3': ['Looking', 'emotion', 'suffering', 'subordinates', 'endured', 'symbol', 'assume', 'caught', 'face'],
        '.text-block-top': ['Scan', 'petrified', 'face', 'tunnel', 'found', 'artifact', 'unknown', 'remains', 'observed'],
        '.text-block6': ['subordinates', 'expression', 'influence', 'psychological', 'waves', 'exposure', 'altered', 'state']
    };
    
    // Применяем шифрование ко всем блокам с соответствующими словами
    for (const [blockId, words] of Object.entries(textBlockWords)) {
        encryptSelectedWords(blockId, words);
    }
});
