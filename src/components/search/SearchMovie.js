import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import classes from "./SearchMovie.module.css";
const SearchMovie = () => {
  const params = useParams();
  const title = params.movieId;

  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${title}&apikey=a675619b`)
      .then((res) => {
        const data = res.data.Search;
        setSearchedMovie(data);
      });
  }, [title]);
  console.log(searchedMovie);

  const movie = searchedMovie.map((movie) => {
    return (
      <div key={movie.imdbID} className={classes.cardWrapper}>
        <img alt={movie.Title} src={movie.Poster} id="image" />
        <span id="title">Title: {movie.Title}</span>
        <span id="year">Year: {movie.Year}</span>
      </div>
    );
  });
  return (
    <div className="card">
      <div className={classes.SearchMovieWrapper}>{movie}</div>
    </div>
  );
};

export default SearchMovie;
