class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    co
  }
}

class TodoList extends List {
  
}

const myList = new TodoList();

document.getElementById('newTodo').onclick = function() {
  myList.add('New todo');
}