import React, { useState } from "react";
import TodoContext from "./todoContext";
import { v4 as uuidv4 } from "uuid";

const defaultTodos = [
  {
    id: uuidv4(),
    content: "Complete online JavaScript course",
    completed: true,
  },
  { id: uuidv4(), content: "Jog around the park 3x", completed: false },
  { id: uuidv4(), content: "10 minutes meditation", completed: false },
  { id: uuidv4(), content: "Read 1 hour", completed: false },
  { id: uuidv4(), content: "Pick up groceries", completed: false },
  {
    id: uuidv4(),
    content: "Complete Todo App on Frontend Mentor",
    completed: false,
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

  const removeTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  const changeTodoStatus = (id) => {
    const newList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newList);
  };

  const clearTodoCompleted = () => {
    const newList = todos.filter((todo) => !todo.completed);
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
