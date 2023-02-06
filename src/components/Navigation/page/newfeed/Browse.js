import React from "react";
import classes from "./Browse.module.css";
import Popular from "./Popular";
import Trending from "./Trending";
import Discover from "./Discover";
const Browse = () => {
  return (
    <div className={classes.BrowserWrapper}>
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
