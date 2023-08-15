function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0)-now;
    const hours = Math.floor((end / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((end / (1000 * 60)) % 60);
    const seconds = Math.floor((end / 1000) % 60);
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(updateClock, 1000);