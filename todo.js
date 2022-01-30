const todo = [
  { do: "handla mjölk", done: false },
  { do: "reklamera looper-pedal", done: true },
  { do: "covid19 tredje vaccin", done: false },
];

console.log(todo);

/*Metod för att lägga till ny todo i todo-listan*/
function addTodo(what) {
  todo.push({ do: what, done: false });
}

/**
 * Metod för att checka av todo
 * @param {number} index - Todo som användaren valt att checka av.
 */
function finishTodo(index) {
  e = index - 1;
  todo[e].done = true;
}
