import React from "react";

const TodoContext = React.createContext({
  themeLight: true,
  changeTheme: () => {},
  theme: "",
  todos: [],
  addNewTodo: () => {},
  removeTodo: (id) => {},
  changeTodoStatus: (id) => {},
  clearTodoCompleted: () => {},
  filter: "",
  filterTodoList: (status) => {},
  filterCompleteItemsInTodoList: () => [],
  filterActiveItemsInTodoList: () => [],
});

export default TodoContext;
