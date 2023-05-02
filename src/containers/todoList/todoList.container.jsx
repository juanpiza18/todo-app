import React, { useContext } from "react";
// import DraggableItem from "../../components/draggableItem/draggableItem.component";
import FilterTabs from "../../components/filterTabs/filterTabs.components";
import TodoFilter from "../../components/todoFilter/todoFilter.component";
import TodoContext from "../../context/todoContext";
import {
  FilterMobileWrapper,
  TodoListSection,
} from "../../styled/wrapper.styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DndDraggableItem from "../../components/draggableItem/dnd-draggableItem.component";
import { getStylesDragginOver } from "../../styled/utils";

const TodoList = ({ list }) => {
  const { filterTodoList, dragAndDropSetTodosOrder, todos } =
    useContext(TodoContext);
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

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  //   e.dataTransfer.dropEffect = "move";
  //   e.target.classList.add("hovered");
  // };

  // const handleDragLeave = (e) => {
  //   e.target.classList.remove("hovered");
  // };

  // const handleDrop = (e) => {
  //   const itemId = e.dataTransfer.getData("text/plain");
  //   e.target.classList.remove("hovered");
  //   const droppedItem = list.find((item) => item.id === itemId);
  //   const newItems = list.filter((item) => item.id !== itemId);
  //   const dropIndex = Array.from(e.target.parentNode.children).indexOf(
  //     e.target
  //   );
  //   newItems.splice(dropIndex, 0, droppedItem);
  //   dragAndDropSetTodosOrder(newItems);
  // };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const { draggableId, destination } = result;
    const droppedItem = todos.find((item) => item.id === draggableId);
    const newItems = todos.filter((item) => item.id !== draggableId);
    newItems.splice(destination.index, 0, droppedItem);
    dragAndDropSetTodosOrder(newItems);
  };

  return (
    <>
      <TodoListSection>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo-app-drop">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getStylesDragginOver(snapshot.isDraggingOver)}
              >
                {list.map((todo, index) => (
                  <DndDraggableItem key={todo.id} todo={todo} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <TodoFilter list={list} tabs={tabs} />
      </TodoListSection>
      <FilterMobileWrapper>
        <FilterTabs tabs={tabs} />
      </FilterMobileWrapper>
    </>
  );
};

export default TodoList;
