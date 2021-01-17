import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let id = 0;

const Todo = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <span>{props.todo.text}</span>
    <button onClick={props.onDelete}>delete</button>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("please Write a text");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    }); // [...array] pull all the values of that array (is a way of clonning the array)
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked todo count:
          {this.state.todos.filter((todo) => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(
            (todo) => (
              <Todo
                onToggle={() => this.toggleTodo(todo.id)}
                onDelete={() => this.removeTodo(todo.id)}
                todo={todo}
              />
            ) // Upper case `Todo` is a react component
          )}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
