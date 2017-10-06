import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header.js'
import Shop from './Components/Shop.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shop />
      
        
      </div>
    );
  }
}

export default App;
