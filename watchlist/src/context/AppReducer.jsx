export default (state, action) => {
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
    default:
      return state;
  }
};
