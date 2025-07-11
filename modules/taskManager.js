let tasks = [];

export function addTask(taskText) {
  tasks.push({ text: taskText, done: false });
  saveTasks();
}

export function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
}

export function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
}

export function getTasks() {
  return tasks;
}

export function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    tasks = JSON.parse(saved);
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
