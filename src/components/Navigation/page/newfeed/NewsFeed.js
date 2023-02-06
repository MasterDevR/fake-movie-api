import React from "react";
import classes from "./NewsFeed.module.css";
import { NavLink } from "react-router-dom";
import { FiAirplay } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const NewsFeed = () => {
  let activeStyle = {
    color: "white",
  };

  return (
    <nav className={classes.NewsFeedWrapper}>
      <NavLink
        to="/browse"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <FiAirplay id="icon" />
        Browse
      </NavLink>

      <NavLink
        to="/WatchList"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <FiHeart id="icon" />
        WatchList
      </NavLink>

      <NavLink
        to="/CommingSoon"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <FiCoffee id="icon" />
        Comming soon
      </NavLink>
    </nav>
  );
};

export default NewsFeed;
