const mouseArea = document.getElementById('mouseArea');
const xSpan = document.getElementById('x');
const ySpan = document.getElementById('y');

const buttonSpan = document.getElementById('buttonType');

mouseArea.addEventListener('mousemove', (event) => {
    xSpan.textContent = event.clientX;
    ySpan.textContent = event.clientY;
});

mouseArea.addEventListener('mousedown', (event) => {
    if(event.button === 0)
    {
        buttonSpan.textContent = "ЛКМ";
    }
    else if (event.button === 2)
    {
        buttonSpan.textContent = "ПКМ"
    }
});

//==============================================================================================

const cells = document.querySelectorAll('#hoverTable td');

cells.forEach(cell => {
    cell.style.backgroundColor = '#281414';
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = '#e16666';
    });
    cell.addEventListener('mouseleave', () => {
        cell.style.backgroundColor = '#281414';
    });
});

//===========================================================================================

const addBtn = document.getElementById('addBlockbtn');
const blockContainer = document.getElementById('blockContainer');

function randomBetween(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor()
{
    const r = randomBetween(100, 200);
    const g = randomBetween(100, 200);
    const b = randomBetween(100, 200);
    return `rgb(${r}, ${g}, ${b})`;
}


function createBlock()
{
    const block = document.createElement('div');
    block.className = 'block';

    block.style.backgroundColor = getRandomColor();
    
    block.addEventListener('click', () =>{
        block.remove();
    });
    return block;
}

addBtn.addEventListener('click', () => {
    blockContainer.appendChild(createBlock());
});


let players = ['1', '2', '3'];

const fantaResultDiv = document.getElementById('fantaResult');
const playersListDiv = document.getElementById('playerList');

function updatePlayerDisplay()
{
    if (players.length === 0)
    {
        playersListDiv.innerHTML = "нет участников";
        return;
    }
    playersListDiv.innerHTML = players.map(name => `-> ${name}`).join('<br>');
}

function initGame()
{
    let input = prompt("введите имена через пробел");
    if (input === null)
    {
        players = ['нет', 'введеных', 'имен'];
    }
    else{
        let names = input.split(' ').map(s => s.trim()).filter(s => s.length > 0);
        players = names;
    }
    updatePlayerDisplay();
}

function pickRandomFanta()
{
    const randomIndex = Math.floor(Math.random() * players.length);

    const chosen = players[randomIndex];

    players.splice(randomIndex, 1);

    fantaResultDiv.innerHTML = `<hr> выпал <strong>${chosen}</strong> <hr>`;

    updatePlayerDisplay();
}

document.getElementById('newGameBtn').addEventListener('click', initGame);
document.getElementById('pickFantaBtn').addEventListener('click', pickRandomFanta);