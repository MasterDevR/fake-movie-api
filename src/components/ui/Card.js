import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { movieStoreHandler } from "../../store/store";

const Card = (props) => {
  const ctx = useContext(movieStoreHandler);
  const popularMovie = props.items;

  const ActiveMoiveHandler = () => {
    ctx.addItem(popularMovie);
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
          to={`/browse/${id}/${title}/${date}`}
          onClick={ActiveMoiveHandler}
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
