import React, { useContext } from "react";
import "./Scss/Bookmarks.scss";
import Context from "./Context";

export default function Bookmarks() {
  const context = useContext(Context);
  const showmodel = () => {
    context.showModelHandler();
  };
  return (
    <div className="bookmarks-container" onClick={showmodel}>
      <button>Bookmarks</button>
    </div>
  );
}
