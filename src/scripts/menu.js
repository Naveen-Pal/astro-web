const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const taskCon = document.querySelector("#task-container");
const taskData = document.querySelector(".task-data");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

bar.addEventListener("click", () => menu.classList.toggle("show-menu"));
taskCon.addEventListener("click", () => taskData.classList.toggle("show-task"));

let list = JSON.parse(localStorage.getItem("list")) || [];
list.forEach(task => toDoList(task));

formEl.addEventListener("submit", event => {
  event.preventDefault();
  toDoList();
});

function toDoList(task = {}) {
  const liEl = document.createElement("li");
  liEl.innerText = task.name || inputEl.value;
  if (task.checked) liEl.classList.add("checked");
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = '<i class="fas fa-check-square"></i>';
  liEl.appendChild(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = '<i class="fas fa-trash"></i>';
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  list = Array.from(document.querySelectorAll("ul.list > li")).map(liEl => ({
    name: liEl.innerText,
    checked: liEl.classList.contains("checked"),
  }));
  localStorage.setItem("list", JSON.stringify(list));
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning!🌞";
  if (hour >= 12 && hour < 16) return "Good afternoon!🌤️";
  return "Good evening!🌙";
}

function greet() {
  document.querySelector(".greeting").textContent = getGreeting();
}

greet();
