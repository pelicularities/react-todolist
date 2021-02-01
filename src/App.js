import "./stylesheets/App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList title="a charming to-do list" />
    </div>
  );
}

export default App;
