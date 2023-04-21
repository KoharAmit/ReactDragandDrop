import React, { useState } from "react";
import Content from "./Content";
import { useDrop } from "react-dnd";
import "../App.css";

// An array of content items with an id and text property
const ContentList = [
  {
    id: 1,
    text:
      "Example 1 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
  },
  {
    id: 2,
    text:
      "Example 2 : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    id: 3,
    text:
      "Example 3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
];

function reloadCompontents() {
  window.location.reload();
}
function DragDrop() {
  // state variables for the board and content list
  const [board, setBoard] = useState([]);
  const [contentList, setContentList] = useState(ContentList);

  // useDrop hook to allow dropping of items onto the board
  const [{ isOver }, drop] = useDrop(() => ({
    // specify that only items with type "text" can be dropped onto the board
    accept: "text",
    // function to execute when item is dropped onto the board
    drop: (item) => addTextToBoard(item.id),
    // function to collect props for the component from the drag and drop system
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    // disable dropping on the board
    canDrop: false,
  }));

  // function to add an image to the board
  const addTextToBoard = (id) => {
    // find the content item with the matching id
    const contentList = ContentList.filter((content) => id === content.id);
    // update the board state by adding the content item
    setBoard((board) => [...board, contentList[0]]);
    // update the content list state by removing the content item
    setContentList((prevList) => prevList.filter((content) => content.id !== id));
  };

  // function to handle dropping of items in the board
  const handleDrop = (item) => {
    addTextToBoard(item.id);
  };

  return (
    // render the content list and board
    <>
      <div className="contents">
        {/* map over the content list and render each item as a Content component */}
        {contentList.map((content) => (
          <Content key={content.id} text={content.text} id={content.id} />
        ))}
      </div>
      <div className="board-container">
        <div className="board" ref={drop}>
          {/* map over the board and render each item as a Content component with isInBoard prop set to true */}
          {board.map((content) => (
            <Content
              key={content.id}
              text={content.text}
              id={content.id}
              isInBoard
            />
          ))}
        </div>
        <h3 id="reloadBtn" onClick={reloadCompontents}>Reload Components</h3>
      </div>

    </>
  );
}

export default DragDrop;
