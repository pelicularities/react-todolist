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

  const addNewTodo = (e) => {
    e.preventDefault();
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
    <Row className="border-bottom mb-3" aria-label="todo-list">
      <Col>
        <h1>{title || "nameless to-do list"}</h1>
        <form onSubmit={(e) => addNewTodo(e)}>
          <InputGroup>
            <FormControl
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Take a break"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={(e) => addNewTodo(e)}>
                add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>

        <div className="border rounded p-3 my-3">{displayTodos()}</div>
      </Col>
    </Row>
  );
}

export default TodoList;
