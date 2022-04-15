import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" page={Homepage} />
        {/* <Route path="" component={} /> */}
      </div>
    </Router>
  );
}

export default App;
