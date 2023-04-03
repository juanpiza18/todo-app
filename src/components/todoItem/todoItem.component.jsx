import React, { useContext } from "react";
import Cross from "../../assets/images/icon-cross.svg";
import Check from "../../assets/images/icon-check.svg";
import TodoContext from "../../context/todoContext";
import { ButtonIcon } from "../../styled/buttons.styled";
import {
  CheckboxBoxContainer,
  Checkbox,
  CheckboxInput,
  TextContent,
} from "./todoItem.styled.js";

const TodoItem = ({ id, content, completed }) => {
  const { removeTodo, changeTodoStatus } = useContext(TodoContext);
  return (
    <>
      <CheckboxBoxContainer>
        <Checkbox
          className={completed ? "completed" : ""}
          onClick={() => {
            changeTodoStatus(id);
          }}
        >
          <CheckboxInput type="checkbox" defaultChecked={completed} />
          {completed ? <img src={Check} alt="Todo Completed" /> : <></>}
        </Checkbox>
      </CheckboxBoxContainer>
      <TextContent className={completed ? "completed" : ""}>
        {content}
      </TextContent>
      <ButtonIcon
        onClick={() => {
          removeTodo(id);
        }}
      >
        <img src={Cross} alt="Delete Todo Icon" />
      </ButtonIcon>
    </>
  );
};

export default TodoItem;
