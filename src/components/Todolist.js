import React, { Component } from "react";

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
        <span>{todo.name}</span>
        <span>{todo.isDone ? " - completed" : " - not completed"}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>Todolist</div>
        <div>{this.displayTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
