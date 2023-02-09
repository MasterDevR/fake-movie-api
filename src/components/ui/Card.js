import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Card.module.css";
import { movieStoreHandler } from "../../store/store";

const Card = (props) => {
  const ctx = useContext(movieStoreHandler);

  const popularMovie = props.items;
  const ActiveMoiveHandler = (item) => {
    let a = ctx.addItem(item);
    console.log(a);
  };
  const movie = popularMovie
    .filter((item) => {
      return item.backdrop_path !== null;
    })
    .map((movie) => {
      let title = movie.title;
      let date = movie.release_date;
      let poster = movie.backdrop_path;
      let id = movie.id;
      if (movie.name && movie.first_air_date) {
        title = movie.name;
        date = movie.first_air_date;
      }

      return (
        <NavLink
          key={id}
          className={({ isActive }) =>
            isActive ? classes.activeStyle : "browse"
          }
          to={`/browse/${id}/${title}/${date}`}
          onClick={ActiveMoiveHandler}
        >
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
            alt={title}
            id="image"
          />
          <div className="movieInfo">
            <span id="title">
              <span id="titleHolder">Title: </span>
              {title}
            </span>
            <span id="date">
              <span id="titleHolder"> Date: </span>
              {date}
            </span>
          </div>
        </NavLink>
      );
    });

  return (
    <div>
      <div className="browseWrapper">{movie}</div>
    </div>
  );
};

export default Card;
