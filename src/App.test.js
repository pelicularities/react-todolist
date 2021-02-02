import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders at least one TodoList component", () => {
    render(<App />);
    const todoList = screen.getByRole("generic", { name: "todo-list" });
    expect(todoList).toBeInTheDocument();
  });

  it("should add a TodoList without a title", () => {
    render(<App />);
    const createNewListBtn = screen.getByText("create new list");
    fireEvent.click(createNewListBtn);
    const todoLists = screen.getAllByRole("generic", { name: "todo-list" });
    expect(todoLists.length).toEqual(2);
  });

  it("should add a TodoList with a title", () => {
    const { getByText } = render(<App />);
    const newTodoListInput = screen.getByPlaceholderText("new todo-list name");
    const newListName = "new day new list";
    fireEvent.change(newTodoListInput, { target: { value: newListName } });
    const createNewListBtn = screen.getByText("create new list");
    fireEvent.click(createNewListBtn);
    const todoListTitle = getByText(newListName);
    expect(todoListTitle).toBeInTheDocument();
  });
});
