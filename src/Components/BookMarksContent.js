import React, { useContext } from "react";
import Context from "./Context";
import "./Scss/bookmarks-content.scss";
function BookMarksContent(props) {
  const context = useContext(Context);

  const renderbookmark = () => {
    context.RenderBookMark(props.id);
    console.log(props.id);
  };

  return (
    <div className="bookmarks-contentt" onClick={renderbookmark}>
      <div className="bookmark-image">
        <img src={props.image} alt="" />
      </div>
      <div className="bookmark-title">
        <p>{props.title}</p>
      </div>
      <div className="bokmark-button">
        <button>
          <a href={props.source}>Go to Website</a>
        </button>
      </div>
    </div>
  );
}

export default BookMarksContent;
