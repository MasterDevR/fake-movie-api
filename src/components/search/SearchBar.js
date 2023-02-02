import React from "react";
import classes from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div>
      <input type="text" id={classes.searchBar} placeholder="Search Movie" />
    </div>
  );
};

export default SearchBar;
