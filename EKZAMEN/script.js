const taskForm = document.getElementById('taskForm');

const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const dateInput = document.getElementById('date');

const searchDateInput = document.getElementById('searchDate');
const showTasksBtn = document.getElementById('showTasksBtn');

const tasksList = document.getElementById('tasksList');
const tasksTitle = document.getElementById('tasksTitle');


function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTask(event) {
    event.preventDefault();

    const task = {
        title: titleInput.value,
        description: descriptionInput.value,
        date: dateInput.value
    };

    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    taskForm.reset();
    showTasks()
}

function showTasks() {
    const selectedDate = searchDateInput.value;
    const tasks = getTasks();

    let filteredTasks;
    if (selectedDate === "") {
        filteredTasks = tasks;
        tasksTitle.textContent = 'Список всех задач';
    } else {
        filteredTasks = tasks.filter(task => task.date === selectedDate);
        tasksTitle.textContent = `Список задач на ${selectedDate}`;
    }

    tasksList.innerHTML = '';

    if (filteredTasks.length === 0) {
        tasksList.innerHTML = `
            <div class="empty-message">
                На выбранную дату задач нет :(
            </div>
        `;
        return;
    }
    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description || '—'}</p>  
        `; //ахаахах сиксевен XD
        tasksList.append(taskElement);
    });
}

showTasks()
taskForm.addEventListener('submit', createTask);
showTasksBtn.addEventListener('click', showTasks);

