const modal = document.getElementById('modal');
const btn = document.getElementById('openModalBtn');

btn.onclick = function() {
    modal.style.display = 'block';
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});
