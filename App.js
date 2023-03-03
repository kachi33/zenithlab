'use strict'
import Navbar from "./Navbar";

const App = () => {
  return (
      <Navbar/>
  );
};

const render = ReactDOM.render(<App/>, document.getElementById('root')
);

babel.transform("const render = " + render.toString()).code;
render();