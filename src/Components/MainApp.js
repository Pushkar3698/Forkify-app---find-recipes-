import React, { useState, useContext } from "react";
import Header from "./Header";
import "./Scss/Main_App.scss";
import SearchContent from "./SearchContent";
import RenderContent from "./RenderContent";
import Context from "./Context";
import Spinner from "./Spinner";
import Bookmarksmodel from "./BookMarksModel";

export default function MainApp(props) {
  const context = useContext(Context);

  let renderSpinner = context.searchLoad ? <Spinner /> : "";

  let render =
    context.recipe.length !== 0 ? (
      <RenderContent data={context.recipe} />
    ) : (
      renderSpinner
    );

  return (
    <div className="Main_App"> 
      <Bookmarksmodel />
      <Header />
      <div className="Search_content_Logic">
        <SearchContent />
        {render}
      </div>
    </div>
  );
}
