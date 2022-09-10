import React, { useReducer } from "react";
import Context from "./Context";

const PageHander = (page, arr) => {
  const start = (page - 1) * 10;
  const end = page * 10;
  const array = arr.slice(start, end);
  return array;
};

const reducer = (state, action) => {
  if (action.type === "Submit") {
    const updatedFiltered = PageHander(1, action.recipedata.recipes);
    return {
      count: 1,
      recipes: action.recipedata,
      filteredRecipes: updatedFiltered,
      renderRecipe: [],
      searchLoad: false,
      bookmarks: [],
      showmodel: false,
    };
  }
  if (action.type === "PageUp") {
    let count;
    const arrlength = Math.floor(state.recipes.recipes.length / 10);

    if (state.count > arrlength) {
      count = state.count;
    } else {
      count = state.count + 1;
    }
    const updatedArr = PageHander(count, state.recipes.recipes);

    return { ...state, count: count, filteredRecipes: updatedArr };
  }

  if (action.type === "PageDown") {
    let newcount;

    if (state.count <= 1) {
      newcount = 1;
    } else {
      newcount = state.count - 1;
    }

    const updatedArray = PageHander(newcount, state.recipes.recipes);

    return { ...state, count: newcount, filteredRecipes: updatedArray };
  }
  if (action.type === "RenderRecipe") {
    return { ...state, renderRecipe: action.render };
  }
  if (action.type === "Load") {
    return { ...state, searchLoad: action.value };
  }
  if (action.type === "AddToBookmarks") {
    // const findrecipe = state.recipes.find(el => el.recipe_id === )

    const findItem = state.bookmarks.find(
      (el) => el.recipe_id === action.data.recipe_id
    );

    if (findItem) {
      return { ...state, bookmarks: [...state.bookmarks] };
    } else {
      return { ...state, bookmarks: [...state.bookmarks, action.data] };
    }
  }
  if (action.type === "ShowModel") {
    return { ...state, showmodel: true };
  }
  if (action.type === "CloseModel") {
    return { ...state, showmodel: false };
  }
  if (action.type === "RenderBookMarks") {
    const findRecipe = state.bookmarks.find(
      (el) => el.recipe_id === action.payload
    );

    return { ...state, renderRecipe: findRecipe, showmodel: false };
  }
  return state;
};

const initialstate = {
  recipes: [],
  count: 1,
  filteredRecipes: [],
  renderRecipe: [],
  searchLoad: false,
  bookmarks: [],
  showmodel: false,
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const AddRecipesStateHandler = (data) => {
    dispatch({ type: "Submit", recipedata: data });
  };

  const PageIncreaseHandler = () => {
    dispatch({ type: "PageUp" });
  };

  const PageDeacreaseHandler = () => {
    dispatch({ type: "PageDown" });
  };

  const RenderRecipeHandler = (val) => {
    dispatch({ type: "RenderRecipe", render: val });
  };

  const searchLoadHandler = (val) => {
    dispatch({ type: "Load", value: val });
  };

  const AddToBookmarks = (data) => {
    dispatch({ type: "AddToBookmarks", data: data });
  };

  const showModelHandler = () => {
    dispatch({ type: "ShowModel" });
  };
  const CloseModelHandler = () => {
    dispatch({ type: "CloseModel" });
  };
  const RenderBookMark = (id) => {
    dispatch({ type: "RenderBookMarks", payload: id });
  };

  const stateContext = {
    submitRecipes: AddRecipesStateHandler,
    recipes: state.filteredRecipes,
    increasePage: PageIncreaseHandler,
    decreasePage: PageDeacreaseHandler,
    renderRecipe: RenderRecipeHandler,
    recipe: state.renderRecipe,
    searchLoad: state.searchLoad,
    isLoading: searchLoadHandler,
    addBookmark: AddToBookmarks,
    bookmarks: state.bookmarks,
    showmodel: state.showmodel,
    showModelHandler: showModelHandler,
    closeModelHandler: CloseModelHandler,
    RenderBookMark: RenderBookMark,
  };

  return (
    <Context.Provider value={stateContext}>{props.children}</Context.Provider>
  );
}
