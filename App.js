'use strict'
import { Route } from "react-router-dom";

const App = () => {
  return (
    React.createElement('nav', {className: 'nav-bar'}, 
      React.createElement('a', {href:'/'}, 'Home'),
      React.createElement('a', {href:'/About'}, 'Who we are'),
      React.createElement('a', {href:'/Services'}, `What we've done`),
      React.createElement('a', {href:'/Contact-us'}, 'Contact us')
    )
  );
};

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);