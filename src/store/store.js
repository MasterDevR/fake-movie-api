import React, { createContext, useReducer } from "react";

export const movieStoreHandler = createContext();

const defaultMovieState = {
  activeMovie: [],
  displayActiveMovie: false,
};
const movieReducer = (state, action) => {
  if (action.type === "active") {
    let updatedItems = (state.activeMovie = action.item);
    return { activeMovie: updatedItems, displayActiveMovie: true };
  }
  return defaultMovieState;
};

const Store = (props) => {
  const [movieState, dispatchMovieAction] = useReducer(
    movieReducer,
    defaultMovieState
  );

  const activeMovieHandler = (item) => {
    dispatchMovieAction({ type: "active", item: item });
  };
  const movieContext = {
    activeMovie: movieState.activeMovie,
    addItem: activeMovieHandler,
    displayActiveMovie: movieState.displayActiveMovie,
  };

  return (
    <movieStoreHandler.Provider value={movieContext}>
      {props.children}
    </movieStoreHandler.Provider>
  );
};

export default Store;
