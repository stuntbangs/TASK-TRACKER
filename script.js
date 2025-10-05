let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  if (!taskInput.value.trim()) {
    return alert("Task cannot be empty!!");
  }
  tasks.push({ title: taskInput.value.trim(), completed: false });
  taskInput.value = "";
  console.log("New Task Added:", tasks);

  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) {
      span.classList.add("completed");
    }
    div.appendChild(span);

    // edit button

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(index);
    div.appendChild(editBtn);
   // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);
    div.appendChild(deleteBtn);

    taskList.appendChild(div);
  }); }

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(); }

function editTask(index) {
  const newTitle = prompt("Edit task:", tasks[index].title);
  if (newTitle !== null && newTitle.trim() !== "") {
    tasks[index].title = newTitle.trim();
    renderTasks();
  } }

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  } }

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.classList.add("task-item");

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) {
      span.classList.add("completed");
    }
    div.appendChild(span);

    //edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn"); 
    editBtn.onclick = () => editTask(index);
    div.appendChild(editBtn);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.onclick = () => deleteTask(index);
    div.appendChild(deleteBtn);

    taskList.appendChild(div);
  });
}
