import React from 'react';
import './App.scss';
import {
  Route,
  HashRouter
} from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
import Homepage from './modules/Homepage/Homepage';
import ShopPage from './modules/ShopPage/ShopPage';
import AboutPage from './modules/AboutPage/AboutPage';
import ContactPage from './modules/ContactPage/ContactPage';
import Footer from './modules/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <HashRouter>
      <div className = 'App'>
        { <Navbar /> }
        <div className = 'content'>
          <Route exact path = '/' component = { Homepage }/>
          <Route path = '/offer' component = { ShopPage }/>
          <Route path = '/about' component = { AboutPage }/>
          <Route path = '/contact' component = { ContactPage }/>
        </div>
        { <Footer /> }
      </div>
    </HashRouter>
  );
}

export default App;