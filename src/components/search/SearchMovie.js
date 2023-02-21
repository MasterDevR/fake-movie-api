import React, { useEffect, useState, useContext } from "react";
import { movieStoreHandler } from "../../store/store";
import axios from "axios";
import { useParams, redirect } from "react-router-dom";
import Loader from "../Loader";
import AddMovie from "../action/addMovie";

const SearchMovie = () => {
  const ctx = useContext(movieStoreHandler);
  let activeMovieId = ctx.activeMovieId;

  const params = useParams();
  const title = params.movieId;
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const ActiveMovieHandler = (id) => {
    ctx.ActiveMovieHandler(searchedMovie, id);
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=90564902bbc272fc9b74e023a801f674&query=${title}`
      )
      .then((res) => {
        const data = res.data.results;
        setSearchedMovie(data);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        return setIsLoading(false);
      });
  }, [title]);

  const movies = searchedMovie
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
        <div
          key={id}
          className={id === activeMovieId ? "activeContainer" : "cardWrapper"}
          onClick={() => ActiveMovieHandler(id)}
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
        </div>
      );
    });
  return <div className="card">{isLoading ? <Loader /> : movies}</div>;
};

export default SearchMovie;

export const action = async ({ request }) => {
  const data = await request.formData();

  const searchedTitle = data.get("searchedTitle");

  return redirect(`/SearchMovie/${searchedTitle}`);
};
