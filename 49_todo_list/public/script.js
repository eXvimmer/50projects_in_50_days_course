const form = document.getElementById("form");
const input = document.getElementById("input");
const todosList = document.getElementById("todos");
const storageName = "todostodos";

const todos = JSON.parse(localStorage.getItem(storageName));
if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLocalStorage();
      input.focus();
    });

    todoEl.addEventListener("contextmenu", e => {
      e.preventDefault();
      todoEl.remove();
      updateLocalStorage();
      input.focus();
    });

    todosList.appendChild(todoEl);
    input.value = "";

    updateLocalStorage();
    input.focus();
  }
}

function updateLocalStorage() {
  const todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem(storageName, JSON.stringify(todos));
}
