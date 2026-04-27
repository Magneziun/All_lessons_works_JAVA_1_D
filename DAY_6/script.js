let mode;

function setMode(newMode) {
    mode = newMode;
}

function updateClock() {
    const now = new Date();

    let time = now.toLocaleTimeString();
    let date = now.toLocaleDateString();

    let display = '';

    if (mode === 'datetime') {
        display = date + ' ' + time;
    } else if (mode === 'time') {
        display = time;
    } else if (mode === 'date') {
        display = date;
    }

    document.getElementById('clock').textContent = display;
}

setInterval(updateClock, 1000); 

//я не понимаю почему коряво работает

