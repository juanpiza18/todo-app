import React, { useContext } from "react";
import FilterTabs from "../../components/filterTabs/filterTabs.components";
import TodoFilter from "../../components/todoFilter/todoFilter.component";
import TodoItem from "../../components/todoItem/todoItem.component";
import TodoContext from "../../context/todoContext";
import {
  FilterMobileWrapper,
  TodoListSection,
} from "../../styled/wrapper.styled";

const TodoList = ({ list }) => {
  const { filterTodoList } = useContext(TodoContext);
  const tabs = [
    {
      text: "All",
      callback: () => {
        filterTodoList("All");
      },
    },
    {
      text: "Active",
      callback: () => {
        filterTodoList("Active");
      },
    },
    {
      text: "Completed",
      callback: () => {
        filterTodoList("Completed");
      },
    },
  ];

  return (
    <>
      <TodoListSection>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              <TodoItem {...todo} />
            </li>
          ))}
        </ul>
        <TodoFilter list={list} tabs={tabs} />
      </TodoListSection>
      <FilterMobileWrapper>
        <FilterTabs tabs={tabs} />
      </FilterMobileWrapper>
    </>
  );
};

export default TodoList;
