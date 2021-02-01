import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: "Buy Milk", isDone: false },
        { name: "Do push up", isDone: true },
      ],
    };
  }

  displayTodos() {
    return this.state.todos.map((todo) => (
      <div>
        <TodoItem name={todo.name} isDone={todo.isDone} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>Todolist</div>
        <div>{this.displayTodos()}</div>
        <div>
          Icons made by{" "}
          <a href="https://www.alfredocreates.com" title="Alfredo Hernandez">
            Alfredo Hernandez
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default TodoList;
