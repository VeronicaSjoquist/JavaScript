describe("todo", function () {
  it("is not empty at start", function () {
    assert.isNotEmpty(todo);
  });
});

describe("addTodo", function () {
  it("increase list-size when adding", function () {
    const ogLength = todo.length;
    addTodo("something");

    assert.notEqual(todo.length, ogLength);
  });
  it("correct todo", function () {
    assert.equal("something", todo[3].do);
  });
});
