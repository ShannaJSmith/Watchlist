import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/Add.scss';

const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((film) => film.id === movie.id);
  let storedMovieWatched = watched.find((film) => film.id === movie.id);
  // const disableWatchlist = storedMovie ? true : storedMovieWatched ? true : false;
  const disableWatchlist = storedMovie || storedMovieWatched ? true : false;
  const disableWatched = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={disableWatchlist}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            onClick={() => addMovieToWatched(movie)}
            disabled={disableWatched}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
