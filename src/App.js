import React from 'react';
import './App.scss';

import Navbar from './modules/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { <Navbar /> }
      </header>
    </div>
  );
}

export default App;
