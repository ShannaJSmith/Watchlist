import './styles/App.scss';
import './lib/font-awesome/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';
import { GlobalProvider } from './context/GlobalState';
import React from 'react';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
