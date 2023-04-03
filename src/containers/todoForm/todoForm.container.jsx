import React, { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";
import { v4 as uuidv4 } from "uuid";
import { FormControl, TodoInput } from "./todoForm.styled";
import {
  CheckboxBoxContainer,
  Checkbox,
} from "../../components/todoItem/todoItem.styled";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addNewTodo } = useContext(TodoContext);
  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (newTodo !== "") {
      const todo = {
        id: id,
        content: `${newTodo}`,
        completed: false,
      };
      addNewTodo(todo);
      setNewTodo("");
    }
  };

  return (
    <FormControl>
      <CheckboxBoxContainer>
        <Checkbox></Checkbox>
      </CheckboxBoxContainer>
      <form onSubmit={handleSubmitForm}>
        <TodoInput
          type="text"
          name="todo-input"
          placeholder="Create a new todo ..."
          onChange={handleChangeInput}
          value={newTodo}
        />
        <button id="add-todo" type="submit">
          Add
        </button>
      </form>
    </FormControl>
  );
};

export default TodoForm;
