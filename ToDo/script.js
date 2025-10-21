document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <i class="bi bi-pencil-square me-3 edit-btn"></i>
      <i class="bi bi-trash delete-btn"></i>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";

  li.querySelector(".edit-btn").addEventListener("click", () => editTask(li));
  li.querySelector(".delete-btn").addEventListener("click", () => li.remove());
}

function editTask(li) {
  const span = li.querySelector(".task-text");
  const currentText = span.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.className = "form-control";
  input.style.width = "70%";

  span.replaceWith(input);
  input.focus();

  input.addEventListener("blur", () => {
    const newText = input.value.trim() || currentText;
    const newSpan = document.createElement("span");
    newSpan.className = "task-text";
    newSpan.textContent = newText;
    input.replaceWith(newSpan);
  });
}