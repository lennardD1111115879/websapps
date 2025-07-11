import { getTasks, toggleTask, deleteTask } from './taskManager.js';

const listElement = document.getElementById('taskList');
const inputElement = document.getElementById('taskInput');

export function renderTasks() {
  listElement.innerHTML = '';

  getTasks().forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `list-group-item d-flex justify-content-between align-items-center ${
      task.done ? 'list-group-item-success' : ''
    }`;

    li.innerHTML = `
      <span style="flex-grow:1; cursor:pointer;">${task.done ? `<s>${task.text}</s>` : task.text}</span>
      <button class="btn btn-sm btn-danger ms-2">🗑️</button>
    `;

    li.querySelector('span').addEventListener('click', () => {
      toggleTask(index);
      renderTasks();
    });

    li.querySelector('button').addEventListener('click', () => {
      deleteTask(index);
      renderTasks();
    });

    listElement.appendChild(li);
  });
}

export function getInputValue() {
  return inputElement.value;
}

export function clearInput() {
  inputElement.value = '';
}
