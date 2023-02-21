import React, { createContext, useReducer } from "react";

export const movieStoreHandler = createContext();

const defaultMovieState = {
  activeMovie: [],
  watchList: [],
  activeMovieId: null,
  isAddToWatchList: false,
};
const movieReducer = (state, action) => {
  if (action.type === "addToWatchListHandler") {
    const newItem = action.item;
    const existingItem = state.watchList.find((item) => item.id === newItem.id);

    if (!existingItem) {
      return {
        watchList: state.watchList.concat(newItem),
      };
    }
    return {
      watchList: state.watchList,
    };
  }

  if (action.type === "activeHandler") {
    let updatedItems = action.item;
    let updatedActiveMovieId = +action.movieId;

    return {
      activeMovie: updatedItems,
      watchList: state.watchList,
      active: state.active,
      activeMovieId: updatedActiveMovieId,
      isAddToWatchList: state.isAddToWatchList,
    };
  }

  return defaultMovieState;
};

const Store = (props) => {
  const [movieState, dispatchMovieAction] = useReducer(
    movieReducer,
    defaultMovieState
  );

  const activeMovieHandler = (item, movieId) => {
    dispatchMovieAction({ type: "activeHandler", item, movieId });
  };
  const addToWatchListHandler = (item) => {
    dispatchMovieAction({
      type: "addToWatchListHandler",
      item,
    });
  };

  const movieContext = {
    activeMovie: movieState.activeMovie,
    activeMovieId: movieState.activeMovieId,
    watchList: movieState.watchList,
    isAddToWatchList: movieState.isAddToWatchList,
    ActiveMovieHandler: activeMovieHandler,
    addToWatchListHandler: addToWatchListHandler,
  };

  return (
    <movieStoreHandler.Provider value={movieContext}>
      {props.children}
    </movieStoreHandler.Provider>
  );
};

export default Store;
