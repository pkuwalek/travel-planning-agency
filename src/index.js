import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ShopPage from './modules/ShopPage/ShopPage';
import ContactPage from './modules/ContactPage/ContactPage';
import AboutPage from './modules/AboutPage/AboutPage';

ReactDOM.render(
  <Router>
    <Route exact path = '/' render = { App } />
    <Route path = '/shop' render = { ShopPage } />
    <Route path = '/contact' render = { ContactPage } />
    <Route path = '/about' render = { AboutPage } />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();