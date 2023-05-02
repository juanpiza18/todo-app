import React, { useRef } from "react";
import TodoItem from "../todoItem/todoItem.component";
import { DraggableLi } from "./draggableItem.style";

const DraggableItem = ({ todo }) => {
  const draggable = useRef(null);
  const handleDragStart = (event) => {
    draggable.current.style.opacity = "1";
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
      ref={draggable}
    >
      <TodoItem {...todo} />
    </DraggableLi>
  );
};

export default DraggableItem;
