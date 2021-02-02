import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  it("should allow user to add a todo item", () => {
    const { getByText } = render(<TodoList />);
    const newTodoItemInput = screen.getByTestId("newTodoItemInput");
    const newItemName = "Take a nap";
    fireEvent.change(newTodoItemInput, { target: { value: newItemName } });
    const createNewItemBtn = screen.getByText("add");
    fireEvent.click(createNewItemBtn);
    const todoItem = getByText(newItemName);
    expect(todoItem).toBeInTheDocument();
  });

  it("should not add a todo item if item name is blank", () => {
    render(<TodoList />);
    const todoItemsBefore = screen.getAllByTestId("checkbox").length;
    const newTodoItemInput = screen.getByTestId("newTodoItemInput");
    fireEvent.change(newTodoItemInput, { target: { value: "" } });
    const createNewItemBtn = screen.getByText("add");
    fireEvent.click(createNewItemBtn);
    const todoItemsAfter = screen.getAllByTestId("checkbox").length;
    expect(todoItemsBefore).toEqual(todoItemsAfter);
  });

  it("should allow user to change status of a todo item", () => {
    render(<TodoList />);
    const checkboxes = screen.getAllByTestId("checkbox");
    fireEvent.click(checkboxes[0]);
    // there should be two checks on the screen after the above event
    let checks = screen.getAllByAltText("done");
    expect(checks.length).toEqual(2);

    fireEvent.click(checkboxes[1]);
    fireEvent.click(checkboxes[0]);
    // there should be no checks on the screen after the previous two events
    checks = screen.queryAllByAltText("done");
    expect(checks.length).toEqual(0);
  });

  it("should allow user to delete a todo item", () => {
    render(<TodoList />);
    let deleteIcons = screen.getAllByAltText("delete");
    expect(deleteIcons.length).toEqual(2);
    fireEvent.click(deleteIcons[0]);
    fireEvent.click(deleteIcons[1]);

    // there should be no items on the screen after the previous two events
    deleteIcons = screen.queryAllByAltText("delete");
    expect(deleteIcons.length).toEqual(0);
  });
});
