import React, { useEffect, useState } from "react";
import Card from "../../../../ui/Card";

import axios from "axios";
const Popular = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=90564902bbc272fc9b74e023a801f674&language=en-US&page=1"
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

export default Popular;
