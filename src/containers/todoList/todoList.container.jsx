import React, { useContext } from "react";
import DraggableItem from "../../components/draggableItem/draggableItem.component";
import FilterTabs from "../../components/filterTabs/filterTabs.components";
import TodoFilter from "../../components/todoFilter/todoFilter.component";
import TodoContext from "../../context/todoContext";
import {
  FilterMobileWrapper,
  TodoListSection,
} from "../../styled/wrapper.styled";

const TodoList = ({ list }) => {
  const { filterTodoList, dragAndDropSetTodosOrder } = useContext(TodoContext);
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

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    e.target.classList.add("hovered");
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  const handleDrop = (e) => {
    const itemId = e.dataTransfer.getData("text/plain");
    e.target.classList.remove("hovered");
    const droppedItem = list.find((item) => item.id === itemId);
    const newItems = list.filter((item) => item.id !== itemId);
    const dropIndex = Array.from(e.target.parentNode.children).indexOf(
      e.target
    );
    newItems.splice(dropIndex, 0, droppedItem);
    dragAndDropSetTodosOrder(newItems);
  };

  return (
    <>
      <TodoListSection>
        <ul
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
        >
          {list.map((todo) => (
            <DraggableItem todo={todo} key={todo.id} />
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
