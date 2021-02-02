import React, { useState } from "react";
import "./stylesheets/App.css";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

function App() {
  const [newListName, setNewListName] = useState("");
  const [todoLists, setTodoLists] = useState([
    {
      id: uuidv4(),
      title: "a charming to-do list",
    },
  ]);

  const addNewList = () => {
    setTodoLists([
      ...todoLists,
      {
        id: uuidv4(),
        title: newListName,
      },
    ]);
    setNewListName("");
  };

  return (
    <div className="App">
      <div>
        <input
          data-testId="newTodoListInput"
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="new todo-list name"
        />
        <button onClick={() => addNewList()}>create new list</button>
      </div>
      {todoLists.map((todoList) => (
        <TodoList key={todoList.id} title={todoList.title} />
      ))}
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

export default App;
