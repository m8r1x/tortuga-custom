import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

render(
  <App/>,
  document.querySelector("#app")
);

if (module && module.hot) {
  module.hot.accept('./app.js', () => {
    const App = require('./app.js').default;
    render(
        <App/>,
      document.querySelector("#app")
    );
  });
}
