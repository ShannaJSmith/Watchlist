export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state, //return existing state
        watchlist: [action.payload, ...state.watchlist], //changes to the state. new array with the movie data added to existing state
      };
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        // return all the movies that are not equal to the id passed
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case 'ADD_MOVIE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case 'MOVE_TO_WATCHLIST':
      return {
        ...state,
        // remove movie from watched
        watched: state.watched.filter(
          // action.payload.id is passed because we need the whole movie
          (movie) => movie.id !== action.payload.id
        ),
        // add movie back to watchlist
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'REMOVE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
