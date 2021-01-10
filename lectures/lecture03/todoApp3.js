const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


//store Todos in memory
let todos = []

function renderTodo(todo) { // render means turn that object in memory to an html so browser can display
  //render a single todo
}

function render() {
  // render the todos in memory to the page
  list.innerHTML = ''
  todos.map(renderTodo).forEach(todo => list.appendChild(todo)) // append that to list in DOM

  //update Counts

  return false
}

function addTodo(name) {
  const todo = new Todo(name)
  todos.push(todo)
  return render()
}


function removeTodo() {
  const todo = this.todoRef
  todos = todos.filter(t => t !== todo)
  return render()
}
