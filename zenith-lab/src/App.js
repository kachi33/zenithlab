import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Contactbar from './Contactbar';
import Footer from './Footer';
import Home from './Home';
import './index.css';
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div className="App">

        <Contactbar/>
        <Navbar/>
        <Switch>
          <Route path={'/'}>
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
