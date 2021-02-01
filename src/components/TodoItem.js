import React from "react";
import "../stylesheets/TodoItem.scss";

const TodoItem = ({ name, isDone, setTodo }) => (
  <div className="todo-item">
    <span className="todo-item__completed" onClick={() => setTodo(!isDone)}>
      {isDone && (
        <img
          height="16"
          alt="done"
          src={`${process.env.PUBLIC_URL}/check.png`}
        />
      )}
    </span>
    <span className="todo-item__name">{name}</span>
  </div>
);

export default TodoItem;
