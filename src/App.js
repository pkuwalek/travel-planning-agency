import React from 'react';
import './App.scss';

import Navbar from './modules/Navbar/Navbar';
import Homepage from './modules/Homepage/Homepage';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function App() {
  return (
      <div className="App">
        <header className="App-header">
          { <Navbar /> }
        </header>
        { <Homepage /> }
      </div>

  );
}

export default App;