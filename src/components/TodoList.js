import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: uuidv4(), name: "Buy Milk", isDone: false },
        { id: uuidv4(), name: "Do push up", isDone: true },
      ],
      newItemName: "",
    };
  }

  createSetTodo(todo) {
    const setTodo = (isDone) => {
      const currentTodo = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id === todo.id
      )[0];
      currentTodo.isDone = isDone;
      this.setState({ todos: [...this.state.todos] });
    };
    return setTodo;
  }

  createDeleteTodo(todo) {
    const deleteTodo = () => {
      const todosWithoutItem = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
      this.setState({ todos: [...todosWithoutItem] });
    };
    return deleteTodo;
  }

  displayTodos() {
    return this.state.todos.map((todo) => {
      const setTodo = this.createSetTodo(todo);
      const deleteTodo = this.createDeleteTodo(todo);
      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={deleteTodo}
        />
      );
    });
  }

  handleChange = (event) => {
    this.setState({ newItemName: event.target.value });
  };

  addNewTodo() {
    const { newItemName: name } = this.state;
    if (!name || !name.length) return;

    this.setState({
      newItemName: "",
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          name: name,
          isDone: false,
        },
      ],
    });
  }

  render() {
    return (
      <div id="todo-list" data-testid="todo-list">
        <div>{this.props.title || "nameless to-do list"}</div>
        <div>{this.displayTodos()}</div>
        <div>
          <input
            type="text"
            value={this.state.newItemName}
            onChange={this.handleChange}
            placeholder="Take a break"
          />
          <button onClick={() => this.addNewTodo()}>add</button>
        </div>
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