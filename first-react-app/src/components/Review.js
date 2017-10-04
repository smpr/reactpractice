import React, { Component } from 'react';

class Review extends Component {
    render() {
      return (
          <div>
            <h1>{this.props.author}</h1>

            <div>{this.props.stuff}</div>
            
             
          </div>
      );
    }
  }

  export default Review;