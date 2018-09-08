/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app/app';
import reducers from './app/reducers';

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'),
);
