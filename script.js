    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") addTask();
    });

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center todo-item";

      const span = document.createElement("span");
      span.textContent = taskText;
      span.className = "todo-text";

      const buttons = document.createElement("div");

      const doneBtn = document.createElement("button");
      doneBtn.innerHTML = "✔️";
      doneBtn.className = "btn btn-success btn-sm me-1";
      doneBtn.onclick = () => li.classList.toggle("completed");

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "🗑️";
      delBtn.className = "btn btn-danger btn-sm";
      delBtn.onclick = () => li.remove();

      buttons.appendChild(doneBtn);
      buttons.appendChild(delBtn);

      li.appendChild(span);
      li.appendChild(buttons);
      taskList.appendChild(li);

      taskInput.value = "";
      taskInput.focus();
    }