class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log()
  }
}

class TodoList extends List {
  
}

const myList = new TodoList();

document.getElementById('newTodo').onclick = function() {
  myList.add('New todo');
}