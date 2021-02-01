import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Todolist component", () => {
  render(<App />);
  const todoList = screen.getByText("Todolist");
  expect(todoList).toBeInTheDocument();
});
