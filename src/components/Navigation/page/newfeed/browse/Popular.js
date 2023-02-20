import React, { useEffect, useState } from "react";
import Card from "../../../../ui/Card";
import UseHttps from "../../../../../hooks/useHttps";
import Loader from "../../../../Loader";

const Popular = () => {
  const { movieData, isLoading, error } = UseHttps(
    "https://api.themoviedb.org/3/tv/popular?api_key=90564902bbc272fc9b74e023a801f674&language=en-US&page=1"
  );

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
  }
  return <div>{movieData !== undefined && <Card items={movieData} />}</div>;
};

export default Popular;
