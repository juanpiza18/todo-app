import React from "react";
import { useContext } from "react";
import TodoContext from "../../context/todoContext";
import { ButtonText } from "../../styled/buttons.styled";
import {
  FilterContainer,
  FilterDesktopWrapper,
} from "../../styled/wrapper.styled";
import FilterTabs from "../filterTabs/filterTabs.components";

const TodoFilter = ({ list, tabs }) => {
  const { clearTodoCompleted } = useContext(TodoContext);
  return (
    <>
      <FilterContainer>
        <span> {list.length} items left </span>
        <FilterDesktopWrapper>
          <FilterTabs tabs={tabs} />
        </FilterDesktopWrapper>
        <ButtonText
          onClick={() => {
            clearTodoCompleted();
          }}
        >
          Clear Completed
        </ButtonText>
      </FilterContainer>
    </>
  );
};

export default TodoFilter;
