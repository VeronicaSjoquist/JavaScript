const todo = [
  { do: "handla mjölk", done: false },
  { do: "reklamera looper-pedal", done: true },
  { do: "covid19 tredje vaccin", done: false },
];

console.log(copy(todo));

todo[0].done = true;

console.log(todo);

function copy(obj) {
  const str = JSON.stringify(obj);
  const copy = JSON.parse(str);
  return copy;
}

function add() {
  todo.push({ do: prompt("What task du you wish to add?"), done: false });
  console.log(todo);
  console.log("Added new todo");
}

function PrintTodos() {
  let tasks = "Todo: \n";
  for (let i = 0; i < todo.length; i++) {
    const e = todo[i];
    tasks += "Att Göra: " + e.do + " Klart?: " + e.done + "\n";
  }
  alert(tasks);
}

function finishTodo() {
  i = prompt("What task would you like to finish?");

  e = parseInt(i);

  todo[e].done = true;
}

function LetUserChoose() {
  userPick = prompt(
    "Vad vill du göra? \n 0: Avsluta \n 1: Lägga till en ny todo \n 2: Checka av en existerande todo \n 3: Visa alla todos"
  );
  user_pick = parseInt(userPick);
  if (user_pick === 1) {
    add();
  } else if (user_pick === 2) {
    finishTodo();
  } else if (user_pick === 3) {
    PrintTodos();
  } else if (user_pick === 0) {
    go = false;
  } else {
    alert("Please enter a valid option");
  }
}

let go = true;
while (go) {
  LetUserChoose();
}