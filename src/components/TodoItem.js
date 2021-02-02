import React from "react";
import "../stylesheets/TodoItem.scss";

const TodoItem = ({ name, isDone, setTodo, deleteTodo }) => (
  <div className="todo-item">
    <span
      data-testid="checkbox"
      role="checkbox"
      aria-checked={isDone}
      className="todo-item__completed"
      onClick={() => setTodo(!isDone)}
    >
      {isDone && (
        <img
          height="16"
          alt="done"
          src={`${process.env.PUBLIC_URL}/check.png`}
        />
      )}
    </span>
    <span className="todo-item__name">{name}</span>
    <span onClick={() => deleteTodo()} className="todo-item__delete">
      <img
        height="16"
        alt="delete"
        src={`${process.env.PUBLIC_URL}/cross.png`}
      />
    </span>
  </div>
);

export default TodoItem;
