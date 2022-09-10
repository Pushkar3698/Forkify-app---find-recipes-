import React, { useState, useEffect, useContext } from "react";
import "./Scss/SearcResults.scss";
import Context from "./Context";

export default function SearcResults({
  image,
  heading,
  publisher,
  id,
  getRecipe,
}) {
  const context = useContext(Context);
  const getId = () => {
    getRecipe(id);
    context.isLoading(true);
  };

  return (
    <div className="search-result" data-id={id} onClick={getId}>
      <div className="search-result-container">
        <div className="result-image">
          <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="result-content">
          <h3>
            {heading.length > 25 ? heading.slice(0, 25) + "..." : heading}
          </h3>
          <p>{publisher}</p>
        </div>
        <span className="circle"></span>
      </div>
    </div>
  );
}
