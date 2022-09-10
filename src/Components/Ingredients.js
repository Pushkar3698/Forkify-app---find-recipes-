import React from "react";

export default function Ingredients(props) {
  return (
    <li className="ingredient-name">
      <div className="ingredients">{props.name}</div>
    </li>
  );
}
