import React from 'react';
import './App.scss';


import Navbar from './modules/Navbar/Navbar';
import Content from './modules/Content/Content';


function App() {
  return (

      <div className="App">
        <header className="App-header">
          { <Navbar /> }
        </header>
        { <Content /> }
      </div>

  );
}

export default App;
