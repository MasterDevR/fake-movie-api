import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../../ui/Card";

const Trending = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=90564902bbc272fc9b74e023a801f674`
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

export default Trending;
