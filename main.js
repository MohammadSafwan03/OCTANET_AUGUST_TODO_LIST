// Initialize datepicker
const dateInput = document.getElementById('new-task-date');

// Function to add a new task
function addTask(title, description, date) {
  const todoList = document.getElementById('todo-list');
  const listItem = document.createElement('tr');
  listItem.classList.add('task-item');
  
  const taskTitle = document.createElement('td');
  taskTitle.textContent = title;
  
  const taskDescription = document.createElement('td');
  taskDescription.textContent = description;

  const taskDate = document.createElement('td');
  taskDate.textContent = date;

  const completionButton = document.createElement('button');
  completionButton.textContent = 'Mark as Completed';
  completionButton.addEventListener('click', function() {
    listItem.classList.toggle('completed');
    if (listItem.classList.contains('completed')) {
      completionButton.textContent = 'Mark as Pending';
    } else {
      completionButton.textContent = 'Mark as Completed';
    }
  });

  const actionCell = document.createElement('td');
  actionCell.appendChild(completionButton);

  listItem.appendChild(taskTitle);
  listItem.appendChild(taskDescription);
  listItem.appendChild(taskDate);
  listItem.appendChild(actionCell);
  todoList.appendChild(listItem);
}

// Add task button click event
const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', function() {
  const titleInput = document.getElementById('new-task-title');
  const descriptionInput = document.getElementById('new-task-description');
  const dateInput = document.getElementById('new-task-date');

  const title = titleInput.value;
  const description = descriptionInput.value;
  const date = dateInput.value;

  if (title && description && date) {
    addTask(title, description, date);
    titleInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
  } else {
    alert('Please fill in all fields.');
  }
});

// Show all tasks
document.getElementById('show-all').addEventListener('click', function() {
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach(item => item.style.display = 'table-row');
  updateTableHeader('All Tasks');
});

// Hide all tasks
document.getElementById('hide-all').addEventListener('click', function() {
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach(item => item.style.display = 'none');
  updateTableHeader('All Tasks');
});

// Show pending tasks
document.getElementById('show-pending').addEventListener('click', function() {
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach(item => {
    if (!item.classList.contains('completed')) {
      item.style.display = 'table-row';
    } else {
      item.style.display = 'none';
    }
  });
  updateTableHeader('Pending Tasks');
});

// Show completed tasks
document.getElementById('show-completed').addEventListener('click', function() {
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach(item => {
    if (item.classList.contains('completed')) {
      item.style.display = 'table-row';
    } else {
      item.style.display = 'none';
    }
  });
  updateTableHeader('Completed Tasks');
});

// Show upcoming tasks (replace with your logic)
document.getElementById('show-upcoming').addEventListener('click', function() {
  // Implement logic to show upcoming tasks
  // For now, let's show all tasks as an example
  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach(item => item.style.display = 'table-row');
  updateTableHeader('Upcoming Tasks');
});

// Function to update the table header based on button click
function updateTableHeader(text) {
  const tableHeader = document.querySelector('.table-header');
  tableHeader.textContent = text;
}
