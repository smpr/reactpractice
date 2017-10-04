import React, { Component } from 'react';
import ReviewsList from './ReviewsList';
class Movie extends Component {
    render() {
      return (
          <div>
            <h1>{this.props.title}</h1>

            <div>{this.props.rating}</div>
            <p>{this.props.decription}</p>
              <ReviewsList />
          </div>
      );
    }
  }

  export default Movie;