import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/uikit/css/uikit.min.css';
import './index.css';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import init from './core/global/init-global';
import store from './store';

window.app = window.app || {};

init({ app: window.app, store });

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)}/>
  </Provider>,
  document.getElementById('root')
);
