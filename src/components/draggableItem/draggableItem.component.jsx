import React from "react";
import TodoItem from "../todoItem/todoItem.component";
import { DraggableLi } from "./draggableItem.style";

const DraggableItem = ({ todo }) => {
  const handleDragStart = (event) => {
    event.target.classList.add("draggable");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", todo.id);
  };

  const handleDragEnd = (event) => {
    event.target.classList.remove("draggable");
  };

  return (
    <DraggableLi
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <TodoItem {...todo} />
    </DraggableLi>
  );
};

export default DraggableItem;
