import React, { useContext } from "react";
import { movieStoreHandler } from "../../../../store/store";
const WatchList = () => {
  const ctx = useContext(movieStoreHandler);
  const movieList = ctx.watchList;

  let movie = movieList
    .filter((movie) => {
      return movie !== undefined;
    })
    .map((movie) => {
      let title = movie.title;
      let date = movie.release_date;
      let poster = movie.backdrop_path;
      let id = movie.id;
      let overview = movie.overview;
      if (movie.name && movie.first_air_date) {
        title = movie.name;
        date = movie.first_air_date;
      }
      return (
        <div key={id} className="watchlishWrapper">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster}`}
            className="image"
            alt={title}
          />
          <div className="watchListInfo">
            <span id="watchListTitle">
              <span id="titleHolder">Title: </span>
              {title}
            </span>
            <span id="watchListTitle">
              <span id="titleHolder"> Date: </span>
              {date}
            </span>
            <span id="watchListTitle">
              <span id="titleHolder"> Overview: </span>
              {overview}
            </span>
          </div>
        </div>
      );
    })
    .sort((a, b) => (a > b ? 1 : -1));
  return <div className="DisplayWrapper">{movie}</div>;
};

export default WatchList;
