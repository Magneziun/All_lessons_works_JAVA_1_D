let mode;

const clock = document.getElementById('clock');

document.getElementById('btnDatetime').addEventListener('click', () => {
    mode = 'datetime';
});

document.getElementById('btnTime').addEventListener('click', () => {
    mode = 'time';
});

document.getElementById('btnDate').addEventListener('click', () => {
    mode = 'date';
});

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    if (mode === 'datetime') {
        clock.textContent = date + ' ' + time;
    } else if (mode === 'time') {
        clock.textContent = time;
    } else {
        clock.textContent = date;
    }
}

setInterval(updateClock, 1000);
updateClock();