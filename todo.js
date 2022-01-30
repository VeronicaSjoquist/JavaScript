const todo = [
  { do: "handla mjölk", done: false },
  { do: "reklamera looper-pedal", done: true },
  { do: "covid19 tredje vaccin", done: false },
];

console.log(todo);

function addTodo(what) {
  todo.push({ do: what, done: false });
}

function finishTodo(index) {
  e = index - 1;
  todo[e].done = true;
}

function printTodos() {
  const ulElement = document.getElementById("todo-list");
  let tasks = "";
  for (let i = 0; i < todo.length; i++) {
    const e = todo[i];

    const whenDoneHTML = /*html*/ `
  <span class="badge rounded-pill bg-success">Done</span>
      `;

    tasks += /*html*/ `
    <li class="list-group-item">
      <div class="row justify-content-between m-4">
          <div class="col">
            ${e.do}
          </div>
          <div class="col">
            ${e.done ? whenDoneHTML : ""}
          </div>
      </div>
    </li>`;
  }
  ulElement.innerHTML = tasks;
}

printTodos();
