export const getStylesDependingOnTheme = (styleFromTheme) => (props) =>
  styleFromTheme[props.theme.name];

export const getStyleDragging = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "rgb(192, 88, 243)" : "",
  // styles we need to apply on draggables
  ...draggableStyle,
});

export const getStylesDragginOver = (isDraggingOver) => ({
  background: isDraggingOver ? "rgb(87, 221, 255)" : "",
});
