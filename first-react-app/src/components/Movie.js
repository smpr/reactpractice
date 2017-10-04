import React, { Component } from 'react';
import Review from './Review';
class Movie extends Component {
    render() {
      return (
          <div>
            <h1>{this.props.title}</h1>

            <div>{this.props.rating}</div>
            <p>{this.props.decription}</p>
              <Review />
          </div>
      );
    }
  }

  export default Movie;