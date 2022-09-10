import React from "react";
import "./Scss/Header.scss";
import Search from "./Search";
import Bookmarks from "./Bookmarks";

export default function Header({ getData }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2> Forkify </h2>
        </div>
        <Search getData={getData} />
        <Bookmarks />
      </div>
    </header>
  );
}
