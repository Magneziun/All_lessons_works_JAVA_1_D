let btn = document.getElementById("scroll-bnt");
window.onscroll = function() {
    btn.style.display = window.scrollY > 100 ? 'block' : 'none';
}
btn.addEventListener('click', () =>{
    window.scrollTo(0,0);
});



const field = document.getElementById('field');
const ball = document.getElementById('ball');

function moveBallToClick(clientX, clientY) {
    const fieldRect = field.getBoundingClientRect();
    const ballSize = ball.offsetWidth; 
    const maxLeft = fieldRect.width - ballSize;
    const maxTop  = fieldRect.height - ballSize;


    let newLeft = clientX - fieldRect.left - ballSize / 2;
    let newTop  = clientY - fieldRect.top  - ballSize / 2;

    newLeft = Math.min(Math.max(newLeft, 0), maxLeft);
    newTop  = Math.min(Math.max(newTop,  0), maxTop);

    ball.style.left = newLeft + 'px';
    ball.style.top  = newTop  + 'px';
}

field.addEventListener('click', (event) => {
    moveBallToClick(event.clientX, event.clientY);
});




function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    hourHand.style.transform = `rotate(${(hours * 30) + (minutes * 0.5) - 90}deg)`;
    minuteHand.style.transform = `rotate(${(minutes * 6) + (seconds * 0.1) - 90}deg)`;
    secondHand.style.transform = `rotate(${(seconds * 6) - 90}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
