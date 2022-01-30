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
