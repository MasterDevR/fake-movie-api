import { useEffect, useState } from "react";
import axios from "axios";

const UseHttps = (url) => {
  const [movieData, setMovieData] = useState(undefined);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsloading(true);
    axios
      .get(url)
      .then((response) => {
        setMovieData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [url]);

  return {
    movieData,
    isLoading,
    error,
  };
};

export default UseHttps;
