document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Select the form
const form = document.querySelector("#create-task-form");

// Add submit event listener
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input value using name (matches test)
  const task =
    event.currentTarget.elements["new-task-description"].value;

  buildToDo(task);
});

// Function to build task
function buildToDo(task) {
  const taskList = document.querySelector("#tasks");

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
}