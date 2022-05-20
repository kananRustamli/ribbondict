import React, { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import BookmarksIcon from "./BookmarksIcon";

const Navbar = ({ setTerm, setSidebarOpen }) => {
  const onInput = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">RibbonDict</span>
      </div>
      <div className="navbar-right">
        <input type="text" onChange={debounce(onInput)} className="search" />
      </div>
      <div className="sidebar-button" onClick={() => setSidebarOpen(true)}>
        <BookmarksIcon />
      </div>
    </div>
  );
};

export default Navbar;
