'use strict'

const App = () => {
  return React.createElement('p', null, 'Hello World');
};

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
);