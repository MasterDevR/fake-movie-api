import React from "react";
const Card = (props) => {
  const popularMovie = props.items;

  const movie = popularMovie.map((movie) => {
    let title = movie.title;
    let date = movie.release_date;
    if (movie.name && movie.first_air_date) {
      title = movie.name;
      date = movie.first_air_date;
    }

    const activeMovieHandler = (e) => {
      const event = e.target.alt;
      console.log(event);
    };

    return (
      <div key={movie.id} className="browse">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
          alt={movie.id}
          id="image"
          onClick={activeMovieHandler}
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
      </div>
    );
  });

  return <div className="browseWrapper">{movie}</div>;
};

export default Card;
