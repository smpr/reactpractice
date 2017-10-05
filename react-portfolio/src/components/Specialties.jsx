import React, { Component } from 'react';

class Specialities extends Component {
    render(){
      return (
        <div>
        <img src={this.props.imageUrl} />
        <h3>{this.props.name}</h3>
        <div> {this.props.description}</div>
        </div>
      );
    }
  }

export default Specialities;