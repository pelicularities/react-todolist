import React, { useState } from "react";
import "./stylesheets/App.scss";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import { Row, Col, Button, FormControl, InputGroup } from "react-bootstrap";

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
      <Row className="mb-3">
        <Col>
          <InputGroup>
            <FormControl
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="new todo-list name"
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={() => addNewList()}>
                create new list
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      {todoLists.map((todoList) => (
        <TodoList key={todoList.id} title={todoList.title} />
      ))}
      <Row>
        <Col>
          Icons made by{" "}
          <a href="https://www.alfredocreates.com" title="Alfredo Hernandez">
            Alfredo Hernandez
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default App;
