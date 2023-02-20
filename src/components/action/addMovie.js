import React, { useState, useContext, useEffect } from "react";
import { FiHeart, FiBookmark, FiMoreHorizontal } from "react-icons/fi";
import { movieStoreHandler } from "../../store/store";

const AddMovie = (props) => {
  const ctx = useContext(movieStoreHandler);
  let x = [props.item];
  let activeMovieId = ctx.activeMovieId;

  const [addToWatchList, setAddToWatchList] = useState(false);
  const [addToBookMarked, setAddToBookMarked] = useState(false);
  const [more, setMore] = useState(false);

  const movie = x.filter((movie) => {
    return movie.id === activeMovieId;
  });

  const watchListHandler = (e, id) => {
    setAddToWatchList(!addToWatchList);
    ctx.addToWatchListHandler(...movie);
  };
  const bookMarkedHandler = (e, id) => {
    setAddToBookMarked(!addToBookMarked);
  };
  const moreHandler = (e) => {
    setMore(!more);
  };

  return (
    <div className="action">
      <button onClick={(e) => watchListHandler(e, props.item.id)}>
        <FiHeart id={addToWatchList ? "actionIcon" : ""} />
      </button>
      <button onClick={bookMarkedHandler}>
        <FiBookmark id={addToBookMarked ? "actionIcon" : ""} />
      </button>
      <button onClick={moreHandler}>
        <FiMoreHorizontal id={more ? "actionIcon" : ""} />
      </button>
    </div>
  );
};

export default AddMovie;
