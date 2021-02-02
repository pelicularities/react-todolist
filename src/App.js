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

  const addNewList = (e) => {
    e.preventDefault();
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
      <Row className="mb-3">
        <Col>
          <form onSubmit={(e) => addNewList(e)}>
            <InputGroup>
              <FormControl
                type="text"
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder="new todo-list name"
              />
              <InputGroup.Append>
                <Button variant="primary" onClick={(e) => addNewList(e)}>
                  create new list
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </Col>
      </Row>
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
