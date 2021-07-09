const toDoForm = document.getElementById("js-todo-form");
const toDoInput = document.querySelector("#js-todo-form input");
const toDoList = document.getElementById("js-todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const $liList = event.target.parentElement;
  $liList.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt($liList.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const $li = document.createElement("li");
  $li.id = newToDo.id;
  const $span = document.createElement("span");
  $span.innerText = newToDo.text;
  const $btn = document.createElement("button");
  $btn.innerText = "❌";
  $btn.addEventListener("click", deleteToDo);
  $li.appendChild($span);
  $li.appendChild($btn);
  toDoList.appendChild($li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
