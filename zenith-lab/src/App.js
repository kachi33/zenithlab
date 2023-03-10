import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './Home';
import './index.css';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">

      <Navbar/>
      <Switch>
        <Route path={'/'}>
          <Home/>
        </Route>
      </Switch>

      </div>
    </Router>
  )
}

export default App;
