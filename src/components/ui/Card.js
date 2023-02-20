import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { movieStoreHandler } from "../../store/store";

import AddMovie from "../action/addMovie";

const Card = (props) => {
  const ctx = useContext(movieStoreHandler);
  const MovieObject = props.items;

  let activeMovieId = ctx.activeMovieId;

  const ActiveMovieHandler = (id) => {
    ctx.ActiveMovieHandler(MovieObject, id);
  };
  const movies = MovieObject.filter((item) => {
    return item.backdrop_path !== null;
  }).map((movie) => {
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
        className={id === activeMovieId ? "activeContainer" : ""}
        onClick={() => ActiveMovieHandler(id)}
        to={`/browse/${props.type}/${id}/${title}/${date}`}
      >
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
          alt={title}
          className={id === activeMovieId ? "activeImage" : "image"}
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
          <span className={id === activeMovieId ? "" : "display"}>
            <AddMovie item={movie} />
          </span>
        </div>
      </NavLink>
    );
  });

  return (
    <div>
      <div className="CardWrapper">{movies}</div>
    </div>
  );
};

export default Card;
