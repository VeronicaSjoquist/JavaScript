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

const btnElement = document.getElementById("new-todo-button");
btnElement.onclick = function () {
  LetUserChoose();
};

function LetUserChoose() {
  let go = true;
  while (go) {
    userPick = prompt(
      "Vad vill du göra? \n 0: Avsluta \n 1: Lägga till en ny todo \n 2: Checka av en existerande todo \n 3: Visa alla todos"
    );
    user_pick = parseInt(userPick);
    if (user_pick === 0) {
      go = false;
    } else if (user_pick === 1) {
      addTodo(prompt("Vad vill du lägga till för uppgift?"));
    } else if (user_pick === 2) {
      finishTodo(prompt(`${showTodos()} \nVilken todo vill du checka av?`));
    } else if (user_pick === 3) {
      alert(showTodos());
    } else {
      alert("Please enter a valid option");
    }
  }
  printTodos();
}

function showTodos() {
  let tasks = "Todo:\n";
  for (let i = 0; i < todo.length; i++) {
    const e = todo[i];
    tasks += `${i + 1}. Att göra: ${e.do}${e.done ? ", KLAR" : ""}\n`;
  }
  return tasks;
}
