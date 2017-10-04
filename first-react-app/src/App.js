//imports, or requires, react same thing as saying const react= require('react')
  //the { component} is shorthand for saying const component = React.Component
import React, { Component } from 'react';
// this destructurizes this and makes it easier to use the log or other files
import logo from './logo.svg';
//this brings in imprted files such as css and js to link it to the code
import './App.css';

class App extends Component {
  // render is ALWAYS used. this says that the following html will be used on screen
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
          This is a footer
          </p>
      </div>
    );
  }
}
//similar to module.exports in hbs
export default App;
