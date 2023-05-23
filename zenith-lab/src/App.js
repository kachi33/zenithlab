import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Header from './Components/Header';
// import Footer from './Footer';
// import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">

        <Header/>
        <Switch>
          <Route path={'/'}>
            {/* <Home/> */}
          </Route>
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  )
}

export default App;
