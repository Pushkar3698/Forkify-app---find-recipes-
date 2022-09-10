import React, { useContext } from "react";
import ReactDOM from "react-dom";
import BookMarksContent from "./BookMarksContent";
import Context from "./Context";
import "./Scss/BookMarksModel.scss";

const Overlay = (props) => {
  return <div className="overlay">{props.children}</div>;
};

const Content = () => {
  const context = useContext(Context);
  const closemodel = () => {
    context.closeModelHandler();
  };

  const addclass = !context.showmodel ? "activemodel" : "";
  return (
    <div
      className="bookmarks-content"
      style={{
        justifyContent: `${
          context.bookmarks.length > 0 ? "space-between" : "flex-end"
        }`,
      }}
    >
      {context.bookmarks.map((el) => (
        <BookMarksContent
          key={el.recipe_id}
          id={el.recipe_id}
          image={el.image_url}
          title={el.title}
          source={el.source_url}
        />
      ))}
      <div className="close-bookmarke-btn">
        <button onClick={closemodel} style={{ width: "100%" }}>
          close
        </button>
      </div>
    </div>
  );
};

const overlayRoot = document.getElementById("overlay");

const Bookmarksmodel = () => {
  const context = useContext(Context);

  let renderModel = context.showmodel ? (
    <Overlay>
      <Content />
    </Overlay>
  ) : (
    ""
  );

  return ReactDOM.createPortal(renderModel, overlayRoot);
};

export default Bookmarksmodel;
