import React from "react";
import classes from "./NewsFeed.module.css";
import { NavLink } from "react-router-dom";
import { FiAirplay } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const NewsFeed = () => {
  return (
    <nav className={classes.NewsFeedWrapper}>
      <NavLink to="/browse">
        <FiAirplay id="icon" />
        Browse
      </NavLink>
      <NavLink to="/WatchList">
        <FiHeart id="icon" />
        WatchList
      </NavLink>
      <NavLink to="/CommingSoon">
        <FiCoffee id="icon" />
        Comming soon
      </NavLink>
    </nav>
  );
};

export default NewsFeed;
