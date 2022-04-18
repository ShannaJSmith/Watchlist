import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// inital state

const initialState = {
  watchlist: [],
  watched: [],
};

// create context

export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions (tells app what to do after addmovie button is clicked)
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
