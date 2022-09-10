import React, { useState, useEffect, useContext } from "react";
import SearcResults from "./SearcResults";
import "./Scss/SearchContent.scss";
import Context from "./Context";
import SearchButtons from "./SearchButtons";
import Spinner from "./Spinner";

export default function SearchContent() {
  const [ID, setID] = useState("");

  const RecipeContext = useContext(Context);

  const getRecipe = (data) => {
    setID(data);
  };

  const FetchRecipe = (val) => {
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${val}`)
      .then((res) => res.json())
      .then((data) => {
        RecipeContext.renderRecipe(data.recipe);
        RecipeContext.isLoading(false);
      });
  };

  useEffect(() => {
    if (ID.length !== 0) {
      FetchRecipe(ID);
    }
  }, [ID]);

  let spinner = RecipeContext.searchLoad ? <Spinner /> : "";

  let render =
    RecipeContext.recipes.length !== 0
      ? RecipeContext.recipes.map((el) => (
          <SearcResults
            image={el.image_url}
            heading={el.title}
            publisher={el.publisher}
            key={el.recipe_id}
            id={el.recipe_id}
            getRecipe={getRecipe}
          />
        ))
      : "";

  return (
    <div>
      <div className="search-result-Maincontainer">
        {render}
        {spinner}
      </div>
      {RecipeContext.recipes.length !== 0 ? <SearchButtons /> : ""}
    </div>
  );
}
