import React, { useState, useEffect, useRef, useContext } from "react";
import "./Scss/Search.scss";
import Context from "./Context";

export default function Search(props) {
  const [Recipe, setRecipe] = useState("");
  const recipeContext = useContext(Context);

  let recipeRef = useRef(null);

  const getInputHandler = () => {
    const input = recipeRef.current.value;
    setRecipe(input);
  };

  const FetchRecipes = (value) => {
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => {
        recipeContext.submitRecipes(data);
        recipeContext.isLoading(false);
      });
  };

  const search = () => {
    getInputHandler();
    recipeContext.isLoading(true);
  };

  useEffect(() => {
    if (Recipe.length > 0) {
      FetchRecipes(Recipe);
    }
  }, [Recipe]);

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          name="search-bar"
          id=""
          placeholder="Search Over 10000 Recipes!"
          ref={recipeRef}
        />
      </div>
      <div className="search-btn">
        <button onClick={search}>Search Recipe!</button>
      </div>
    </div>
  );
}
