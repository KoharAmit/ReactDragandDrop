import React from "react";
import { useDrag } from "react-dnd";

function Content({ id, text }) {
  // use the useDrag hook to enable dragging functionality
  const [{ isDragging }, drag] = useDrag(() => ({
    // specify the type of the draggable item
    type: "text",
    // specify the data that should be associated with the item being dragged
    item: { id: id }
  }));

  // return the draggable content with a reference to the drag function
  // and apply styles based on the dragging state
  return (
    <div
      ref={drag}
      style={{ border: isDragging ? "5px solid black" : "0px" }}
    >
      {text}
    </div>
  );
}

// export the Content component
export default Content;
