import React, { useEffect, useState } from "react";

const HighlightedMovie = (props) => {
  const movie = props.item;
  const [highlightedMovie, setHighlightedMovie] = useState([]);

  useEffect(() => {
    setHighlightedMovie(movie);
  }, [movie]);
  console.log(highlightedMovie);

  let movies =
    highlightedMovie !== null
      ? highlightedMovie.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
                alt={item.title}
              />
              <span>{item.title}</span>
              <span>{item.release_date}</span>
            </div>
          );
        })
      : null;

  return <div>{movies}</div>;
};

export default HighlightedMovie;
