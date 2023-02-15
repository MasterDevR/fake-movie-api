import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { movieStoreHandler } from "../../store/store";

import classes from "./highlighted.module.css";

const Card = (props) => {
  const ctx = useContext(movieStoreHandler);
  const popularMovie = props.items;
  let activeMovieId = ctx.activeMovieId;
  const [activeListItem, setActiveListItem] = useState(activeMovieId);

  const ActiveMoiveHandler = (id) => {
    ctx.addItem(popularMovie, id);
    activeListItem === activeMovieId
      ? setActiveListItem()
      : setActiveListItem(activeMovieId);
  };
  useEffect(() => {}, [activeMovieId]);

  console.log(activeMovieId);

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
      // to do: add a component name inside url
      return (
        <NavLink
          key={id}
          to={`/browse/${props.type}/${id}/${title}/${date}`}
          className={
            id === activeListItem
              ? classes.activeContainer
              : classes.imageWrapper
          }
          onClick={() => ActiveMoiveHandler(id)}
        >
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
            alt={title}
            className="image"
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
