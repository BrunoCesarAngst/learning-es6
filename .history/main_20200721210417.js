class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.user = 'Bruno';
    
  }
}

const myList = new TodoList();

document.getElementById('newTodo').onclick = function() {
  myList.add('New todo');
}