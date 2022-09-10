import React, { useState, useContext } from "react";
import "./Scss/SearchButtons.scss";
import Context from "./Context";

export default function SearchButtons(props) {
  const context = useContext(Context);

  return (
    <div className="page-btns">
      <button onClick={context.decreasePage}>Prev</button>
      <button onClick={context.increasePage}>Next</button>
    </div>
  );
}
