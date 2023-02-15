import React, { useEffect, useState } from "react";
import Card from "../../../../ui/Card";

import UseHttps from "../../../../../hooks/useHttps";

const Discover = () => {
  const movieType = "discover";
  const { movieData, isLoading, error } = UseHttps(
    "https://api.themoviedb.org/3/discover/movie?api_key=90564902bbc272fc9b74e023a801f674&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );

  if (isLoading) {
    return <h1> Loading...</h1>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {movieData !== undefined ? (
        <Card items={movieData} type={movieType} />
      ) : (
        <h1> Loading....</h1>
      )}
      ;
    </div>
  );
};

export default Discover;
