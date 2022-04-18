export default (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state, //return existing state
        watchlist: [action.payload, ...state.watchlist], //changes to the state. new array with the movie data added to existing state
      };
    default:
      return state;
  }
};
