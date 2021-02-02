import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/TodoList.scss";

function TodoList({ title }) {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Buy Milk", isDone: false },
    { id: uuidv4(), name: "Do push up", isDone: true },
  ]);
  const [newItemName, setNewItemName] = useState("");

  const setTodo = (id) => {
    const selectedTodo = todos.findIndex((todo) => todo.id === id);
    const allTodos = [...todos];
    allTodos[selectedTodo].isDone = !allTodos[selectedTodo].isDone;
    setTodos(allTodos);
  };

  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  const displayTodos = () => {
    return todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={() => setTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      );
    });
  };

  const addNewTodo = () => {
    if (!newItemName || !newItemName.length) return;

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: newItemName,
        isDone: false,
      },
    ]);

    setNewItemName("");
  };

  return (
    <div className="todo-list" aria-label="todo-list">
      <h1>{title || "nameless to-do list"}</h1>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Take a break"
        />
        <button onClick={() => addNewTodo()}>add</button>
      </div>
      <div className="item-container">{displayTodos()}</div>
    </div>
  );
}

export default TodoList;
