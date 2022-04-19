import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// inital state
const initialState = {
  // when app loads intitial state will be empty if nothing is stored in localstorage
  // if data is in localstorage. convert it back into an array with json.parse
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // triggered every time state is changed (e.g. movie added to watchlist)
  useEffect(() => {
    // localstorage must be a string
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  // actions (tells app what to do after addmovie button is clicked)
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };
  // (tells app what to do after remove button is clicked)
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
