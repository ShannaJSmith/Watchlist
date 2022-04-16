import React from 'react';
import { Link } from 'react-router-dom';

// ! header links not updating unless refresh

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="brand">
            <Link to="/">Watchlist</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
