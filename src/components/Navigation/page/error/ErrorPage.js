import React from "react";
import RootPage from "../../../RootPage";
import { useParams } from "react-router-dom";

const ErrorPage = () => {
  const params = useParams();
  const title = params.movieId;
  return (
    <>
      <RootPage />

      <h1 className="center red">{` ${title} is invalid Title`}</h1>
    </>
  );
};

export default ErrorPage;
