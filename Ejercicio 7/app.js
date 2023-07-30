// Función para agregar una tarea a la tabla
function addTaskToTable(task) {
    const tableBody = document.querySelector('#taskTable tbody');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.date}</td>
        <td>${task.priority}</td>
        <td>${task.description}</td>
        <td class="actions">
            <button onclick="editTask(this)">Editar</button>
            <button onclick="deleteTask(this)">Borrar</button>
        </td>
    `;

    tableBody.appendChild(row);
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
    event.preventDefault();

    const taskName = document.querySelector('#taskName').value;
    const taskDate = document.querySelector('#taskDate').value;
    const taskPriority = document.querySelector('#taskPriority').value;
    const taskDescription = document.querySelector('#taskDescription').value;

    const task = {
        name: taskName,
        date: taskDate,
        priority: taskPriority,
        description: taskDescription,
    };

    addTaskToTable(task);
    clearForm();
}

// Función para limpiar el formulario
function clearForm() {
    document.querySelector('#taskForm').reset();
}

// Función para editar una tarea
function editTask(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    const task = {
        name: cells[0].textContent,
        date: cells[1].textContent,
        priority: cells[2].textContent,
        description: cells[3].textContent,
    };

    document.querySelector('#taskName').value = task.name;
    document.querySelector('#taskDate').value = task.date;
    document.querySelector('#taskPriority').value = task.priority;
    document.querySelector('#taskDescription').value = task.description;

    row.remove();
}

// Función para eliminar una tarea
function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// Asignar el evento submit al formulario
const taskForm = document.querySelector('#taskForm');
taskForm.addEventListener('submit', handleFormSubmit);

// Asignar el evento click al botón "Limpiar formulario"
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearForm);
