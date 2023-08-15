let timerId; // переменная, которая будет хранить ID таймера

let isEventListenerActive = true;
const startButton = document.getElementById("start");

startButton.addEventListener('click', clickHandler);

function clickHandler() {
    if (isEventListenerActive) {
        // Ваш код обработки события
        timerId = setInterval(updateClock, 1);
        // Останавливаем выполнение обработчика события
        startButton.removeEventListener('click', clickHandler);
        isEventListenerActive = false;
    }
}

const stopButton = document.getElementById("stop");
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId);// останавливаем таймер
    isEventListenerActive = true;
    startButton.addEventListener('click', clickHandler);
});

function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
