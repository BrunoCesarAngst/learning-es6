class List {
  cons
}

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('New todo');
    console.log(this.todos);
  }
}

const myList = new TodoList();

document.getElementById('newTodo').onclick = function() {
  myList.addTodo();
}