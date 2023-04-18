import React, { useState } from "react";
import TodoContext from "./todoContext";
import { v4 as uuidv4 } from "uuid";

const defaultTodos = [
  {
    id: uuidv4(),
    content: "Complete online JavaScript course",
    completed: true,
    order: 1,
  },
  {
    id: uuidv4(),
    content: "Jog around the park 3x",
    completed: false,
    order: 2,
  },
  {
    id: uuidv4(),
    content: "10 minutes meditation",
    completed: false,
    order: 3,
  },
  { id: uuidv4(), content: "Read 1 hour", completed: false, order: 4 },
  { id: uuidv4(), content: "Pick up groceries", completed: false, order: 5 },
  {
    id: uuidv4(),
    content: "Complete Todo App on Frontend Mentor",
    completed: false,
    order: 6,
  },
];

export const TodoProvider = ({ children }) => {
  const [themeLight, setThemeLight] = useState(true);
  const [todos, setTodos] = useState(defaultTodos);
  const [filter, setFilter] = useState("All");

  const changeTheme = () => {
    setThemeLight((prev) => !prev);
  };

  const addNewTodo = (item) => {
    setTodos((prev) => [item, ...prev]);
  };

  const dragAndDropSetTodosOrder = (todosNewList) => {
    const todos = todosNewList.map((todo, index) => ({
      ...todo,
      order: index + 1,
    }));
    setTodos(todos);
  };

  const removeTodo = (id) => {
    const newList = todos
      .filter((todo) => todo.id !== id)
      .map((todo, index) => ({
        ...todo,
        order: index + 1,
      }));
    setTodos(newList);
  };

  const changeTodoStatus = (id) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newList);
  };

  const clearTodoCompleted = () => {
    const newList = todos
      .filter((todo) => !todo.completed)
      .map((todo, index) => ({
        ...todo,
        order: index + 1,
      }));
    setTodos(newList);
  };

  const filterTodoList = (type) => {
    setFilter(type);
  };

  const filterCompleteItemsInTodoList = () => {
    const completeItems = todos.filter((todo) => todo.completed);
    return completeItems;
  };

  const filterActiveItemsInTodoList = () => {
    const activeItems = todos.filter((todo) => !todo.completed);
    return activeItems;
  };

  const theme = themeLight ? "light" : "dark";

  return (
    <TodoContext.Provider
      value={{
        themeLight: themeLight,
        changeTheme: changeTheme,
        theme: theme,
        todos: todos,
        addNewTodo: addNewTodo,
        removeTodo: removeTodo,
        changeTodoStatus: changeTodoStatus,
        clearTodoCompleted: clearTodoCompleted,
        filter: filter,
        filterTodoList: filterTodoList,
        filterActiveItemsInTodoList: filterActiveItemsInTodoList,
        filterCompleteItemsInTodoList: filterCompleteItemsInTodoList,
        dragAndDropSetTodosOrder: dragAndDropSetTodosOrder,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
