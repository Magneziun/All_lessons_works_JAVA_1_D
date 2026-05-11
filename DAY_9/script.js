const form = document.getElementById('loginForm');
const loginInput = document.getElementById('login');
const rememberCheckbox = document.getElementById('remember');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = loginInput.value.trim();

    if (login === '') 
    {
        messageDiv.textContent = 'Пожалуйста, введите логин.';
        return;
    }
    const rememberStatus = rememberCheckbox.checked ? 'запомнил' : 'НЕ запомнил';
    messageDiv.textContent = `Привет, ${login} я тебя ${rememberStatus}`;
});
