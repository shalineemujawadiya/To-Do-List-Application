document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            removeTask(event.target);
        }
    });

    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskValue;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        li.appendChild(removeButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function removeTask(button) {
        const li = button.parentNode;
        taskList.removeChild(li);
    }
});
