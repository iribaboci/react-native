const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


list.innerHTML = "List of Items:"
function newTodo() {
  const n = increaseItemCount(itemCountSpan)
  addListOfTodo(n)
}
function deleteTodos() {
  decreaseItemCountAndIncreaseUncheckedCount()
  removeListOfTodo()
}


function decreaseItemCountAndIncreaseUncheckedCount() {
  var itemCount = itemCountSpan.innerHTML
  var uncheckedItemCount = uncheckedCountSpan.innerHTML
  if(itemCount > 0){
    itemCount--
    uncheckedItemCount++
  }
  itemCountSpan.innerHTML = itemCount
  uncheckedCountSpan.innerHTML = uncheckedItemCount
}

function increaseItemCount(x) {
  var n = x.innerHTML
  n++
  itemCountSpan.innerHTML = n
  return n
}
function addListOfTodo(value) {
  var node = document.createElement("LI")
  var textnode = document.createTextNode("Item : " + value)
  node.appendChild(textnode)
  list.appendChild(node)
}


function removeListOfTodo() {
  if(list.childElementCount > 0) list.removeChild(list.childNodes[list.childElementCount--])
}
