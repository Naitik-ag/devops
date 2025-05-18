let tasks = [];

function addtask() {
  const input = document.getElementById("input");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const taskObj = {
    text: task,
    completed: false,
  };

  tasks.push(taskObj);
  renderTasks();
  input.value = "";
}

function renderTasks() {
  const taskList = document.getElementById("tasklist");
  taskList.innerHTML = "";

  tasks.forEach((taskObj, index) => {
    const li = document.createElement("li");
    if (taskObj.completed) li.classList.add("completed");

    const taskText = document.createElement("span");
    taskText.textContent = taskObj.text;
    taskText.classList.add("tasktext");
    li.appendChild(taskText);

    const iconBox = document.createElement("span");

    const comp = document.createElement("button");
    comp.innerHTML = "✅";
    comp.classList.add("icon-btn", "complete-btn");
    comp.addEventListener("click", () => {
      taskObj.completed = !taskObj.completed;
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    deleteBtn.classList.add("icon-btn", "delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    iconBox.appendChild(comp);
    iconBox.appendChild(deleteBtn);
    li.appendChild(iconBox);

    taskList.appendChild(li);
  });
}
