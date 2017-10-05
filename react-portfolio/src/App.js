import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile.jsx'
import SpecialtiesList from './components/SpecialtiesList.jsx'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Profile />
          <SpecialtiesList />
        </div>
    );
  }
}

export default App;
