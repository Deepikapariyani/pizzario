import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
        {/* <Route path="/" exact component={Home} /> */}
      

      </Router>
    </div>
  );
}

export default App;
