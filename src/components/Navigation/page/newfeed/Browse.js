import React, { useContext } from "react";
import classes from "./Browse.module.css";

import Popular from "./browse/Popular";
import Trending from "./browse/Trending";
import Discover from "./browse/Discover";

import { movieStoreHandler } from "../../../../store/store";
import HighlightedMovie from "../../../ui/highlightedMovie";

const Browse = () => {
  const ctx = useContext(movieStoreHandler);
  const isActive = ctx.displayActiveMovie;
  return (
    <div className={classes.BrowserWrapper}>
      {isActive && (
        <div className={classes.Popular}>
          {" "}
          <HighlightedMovie />{" "}
        </div>
      )}
      <div className={classes.Popular}>
        <h1>Trending</h1>
        <Trending />
      </div>
      <div className={classes.Popular}>
        <h1>Popular</h1>
        <Popular />
      </div>{" "}
      <div className={classes.Popular}>
        <h1>Discover</h1>
        <Discover />
      </div>
    </div>
  );
};

export default Browse;
