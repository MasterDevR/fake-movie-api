import React, { createContext, useReducer } from "react";

export const movieStoreHandler = createContext();

const defaultMovieState = {
  activeMovie: [],
  activeMovieId: null,
  displayActiveMovie: false,
};
const movieReducer = (state, action) => {
  if (action.type === "active") {
    let updatedItems = action.item;
    let updatedActiveMovieId = +action.movieId;

    return {
      activeMovie: updatedItems,
      activeMovieId: updatedActiveMovieId,
      displayActiveMovie: true,
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
    dispatchMovieAction({ type: "active", item: item, movieId });
  };

  const movieContext = {
    activeMovie: movieState.activeMovie,
    activeMovieId: movieState.activeMovieId,
    displayActiveMovie: movieState.displayActiveMovie,
    addItem: activeMovieHandler,
  };

  return (
    <movieStoreHandler.Provider value={movieContext}>
      {props.children}
    </movieStoreHandler.Provider>
  );
};

export default Store;
