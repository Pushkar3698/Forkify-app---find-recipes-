import React, { useContext } from "react";
import Ingredients from "./Ingredients";
import Context from "./Context";
import "./Scss/render-content.scss";

export default function RenderContent({ data }) {
  const context = useContext(Context);

  const addToBookmarks = () => {
    context.addBookmark(data);
  };

  return (
    <div className="render-content-container">
      <div className="image">
        <img src={data.image_url} alt="" />
      </div>
      <div className="recipe-title">
        <h2>{data.title}</h2>
      </div>
      <div className="servings-container">
        <span>Time : 45 minutes</span>
        <span>servings : 4 servings</span>
        <button onClick={addToBookmarks}>Add to Bookmarks!</button>
      </div>
      <div className="all-description">
        <div className="ingredients">
          <h1>Recipe Ingredients</h1>
          <div className="ingredients-content">
            <ul>
              {data.ingredients.map((el, i) => (
                <Ingredients name={el} key={i} />
              ))}
            </ul>
          </div>
        </div>
        <div className="description-content">
          <h1>How To Cook It</h1>
          <p>
            This recipe was carefully designed and tested by {data.publisher}.
            Please check out directions at their website.{" "}
          </p>
          <button>
            <a href={data.source_url}>Directions</a>
          </button>
        </div>
      </div>
    </div>
  );
}
