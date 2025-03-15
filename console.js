function executeCommand() {
    const input = document.getElementById('commandInput').value.trim();
    
    // Проверяем введенную команду
    if (input === "info [face]") {
        // Скрываем текущую секцию
        document.querySelector('.section2').classList.add('hidden');
        
        // Показываем следующую секцию
        document.querySelector('.nextSection').classList.remove('hidden');
    } else {
        alert('Invalid command!'); // Если команда неправильная
    }
}
