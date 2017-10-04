import React, { Component } from 'react';
import logo from '../logo.svg';

class Review extends Component {
    render() {
      return (
          <div>
            <h1>This is a review page!</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
      );
    }
  }

  export default Review;