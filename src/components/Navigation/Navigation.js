import React from "react";
import NewsFeed from "./page/newfeed/NewsFeed";
import classes from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={classes.navigationWrapper}>
      <span>
        Fake <span id={classes.red}> Movie </span>
      </span>
      <div>
        <NewsFeed />
      </div>
    </nav>
  );
};

export default Navigation;
