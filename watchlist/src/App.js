import './styles/App.scss';
import './lib/font-awesome/css/all.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" page={Watchlist} />
        <Route path="/watched" page={Watched} />
        <Route path="/add" page={Add} />
      </div>
    </Router>
  );
}

export default App;
