//imports, or requires, react same thing as saying const react= require('react')
  //the { component} is shorthand for saying const component = React.Component
import React, { Component } from 'react';
// this destructurizes this and makes it easier to use the log or other files
//import logo from './logo.svg';
//this brings in imprted files such as css and js to link it to the code
import './App.css';

import Movie from './components/Movie';




class App extends Component {
  // render is ALWAYS used. this says that the following html will be used on screen
  //the <Movie />  brings in the movie.js to show up on the dom where it shows up in the return 
  render() {
    return (
      <div className="App">
       
        <Movie />
           
    
      </div>
      
    );
  }
}
//similar to module.exports in hbs
export default App;
