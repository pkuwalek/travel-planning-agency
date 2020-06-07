import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import AboutPage from './modules/AboutPage/AboutPage';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path = '/' render = { App } />
    <Route path = '/about' render = { AboutPage } />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();