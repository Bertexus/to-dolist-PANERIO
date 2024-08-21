document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById('taskList');
        let taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';

        taskItem.innerHTML = `
            <span class="flex-grow-1">${taskText}</span>
            <div class="btn-group">
                <button class="btn btn-warning btn-sm me-2" onclick="editTask(this)">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="removeTask(this)">Remove</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = ""; 
    } else {
        alert("Please enter a task!");
    }
});

function removeTask(button) {
    let taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    let taskItem = button.parentElement.parentElement;
    let taskTextElement = taskItem.querySelector('span');
    let currentText = taskTextElement.textContent;

    // Replace the task text with an input field
    taskTextElement.innerHTML = `
        <input type="text" class="form-control" value="${currentText}">
    `;

    // Change the Edit button to a Save button
    button.textContent = 'Save';
    button.className = 'btn btn-success btn-sm me-2';
    button.setAttribute('onclick', 'saveTask(this)');
}

function saveTask(button) {
    let taskItem = button.parentElement.parentElement;
    let taskTextElement = taskItem.querySelector('span input');
    let updatedText = taskTextElement.value.trim();

    if (updatedText !== "") {
        // Replace the input field with the updated task text
        taskItem.querySelector('span').textContent = updatedText;

        // Change the Save button back to an Edit button
        button.textContent = 'Edit';
        button.className = 'btn btn-warning btn-sm me-2';
        button.setAttribute('onclick', 'editTask(this)');
    } else {
        alert("Please enter a task!");
    }
}