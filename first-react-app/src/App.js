//imports, or requires, react same thing as saying const react= require('react')
  //the { component} is shorthand for saying const component = React.Component
import React, { Component } from 'react';
// this destructurizes this and makes it easier to use the log or other files
//import logo from './logo.svg';
//this brings in imprted files such as css and js to link it to the code
import './App.css';
import MovieList from './components/MovieList';
import Movie from './components/Movie';




class App extends Component {
  // render is ALWAYS used. this says that the following html will be used on screen
  //the <Movie />  brings in the movie.js to show up on the dom where it shows up in the return 
  render() {
    
    const movies = [
      {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
      {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
      {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'},
      {title: 'A Fourth Movie', rating: 'PG', description: 'this is yet another movie'},
      {title: 'A Fifth Movie', rating: 'PG', description: 'this is yet another movie'},
      {title: 'A Sixth Movie', rating: 'PG', description: 'this is yet another movie'}
    ];
    
          const movieComponents = movies.map((movie) => {
            return <Movie title={movie.title} rating={movie.rating} description={movie.description}/>;
          });
    
          return (
            <div>
              <MovieList />
              { movieComponents }
            </div>
          );
    
        }
      }
    
    
//similar to module.exports in hbs
export default App;
