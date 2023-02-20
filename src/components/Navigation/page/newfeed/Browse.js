import React, { useContext } from "react";

import Popular from "./browse/Popular";
import Trending from "./browse/Trending";
import Discover from "./browse/Discover";
import { movieStoreHandler } from "../../../../store/store";

const Browse = () => {
  const ctx = useContext(movieStoreHandler);
  const isActive = ctx.displayActiveMovie;

  return (
    <div>
      <div className="DisplayWrapper">
        <h1>Trending</h1>
        <Trending />
      </div>
      <div className="DisplayWrapper">
        <h1>Popular</h1>
        <Popular />
      </div>{" "}
      <div className="DisplayWrapper">
        <h1>Discover</h1>
        <Discover />
      </div>
    </div>
  );
};

export default Browse;
