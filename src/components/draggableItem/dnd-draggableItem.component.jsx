import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { getStyleDragging } from "../../styled/utils";
import TodoItem from "../todoItem/todoItem.component";

const DndDraggableItem = ({ todo, index }) => {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getStyleDragging(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <TodoItem {...todo} />
        </div>
      )}
    </Draggable>
  );
};

export default DndDraggableItem;
