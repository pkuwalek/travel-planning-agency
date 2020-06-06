import React from 'react';
import './App.scss';


import Navbar from './modules/Navbar/Navbar';
import Homepage from './modules/Homepage/Homepage';


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
