import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../../ui/Card";
const Discover = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=90564902bbc272fc9b74e023a801f674&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((res) => {
        setPopularMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Card items={popularMovie} />;
};

export default Discover;
