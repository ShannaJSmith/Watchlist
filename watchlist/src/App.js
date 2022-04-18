import './styles/App.scss';
import './lib/font-awesome/css/all.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Watchlist} />
          <Route path="/watched" component={Watched} />
          <Route path="/add" component={Add} />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
