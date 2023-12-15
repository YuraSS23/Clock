function updateClock() {
    const clock = document.getElementById('clock');
    const header = document.getElementById('text')
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0)-now;
    const before = end-30600000;
    const hours = Math.floor((end / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((end / (1000 * 60)) % 60);
    const seconds = Math.floor((end / 1000) % 60);
    const hours2 = Math.floor((before/ (1000 * 60 * 60)) % 24);
    const minutes2 = Math.floor((before / (1000 * 60)) % 60);
    const seconds2 = Math.floor((before / 1000) % 60);
    if (now.getDay()===6) {
        clock.textContent = "";
        header.textContent = ("Ура!!! Сегодня суббота!!!");
    } else if (now.getDay()===7) {
        clock.textContent = "";
        header.textContent = ("Ура!!! Сегодня воскресенье!!!");
    } else if (end>30600000) {
        now.getDay()===5 ? header.textContent = ("Сегодня пятница!!! До начала рабочего дня"): header.textContent = "До начала рабочего дня";
        clock.textContent =
            (hours2 < 10 ? "0" + hours2 : hours2) + ':' +
            (minutes2 < 10 ? "0" + minutes2 : minutes2) + ':' +
            (seconds2 < 10 ? "0" + seconds2 : seconds2);
    } else if (end > 0) {
        now.getDay() === 5 ? header.textContent = ("Сегодня пятница!!! До конца рабочего дня") : header.textContent = "До конца рабочего дня";
        clock.textContent =
            (hours < 10 ? "0" + hours : hours) + ':' +
            (minutes < 10 ? "0" + minutes : minutes) + ':' +
            (seconds < 10 ? "0" + seconds : seconds);
    }
    else {
        clock.textContent = "";
        now.getDay()===5 ? header.textContent = ("Сегодня пятница!!! Ура! Рабочий день закончился!") : header.textContent = "Ура! Рабочий день закончился!";
    }
}
setInterval(updateClock, 1000);