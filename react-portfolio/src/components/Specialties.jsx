import React, { Component } from 'react';
import '../App.css';

class Specialities extends Component {
    render(){
      return (
        <div>
            <table className="SpecialtiesTable">
                
        <tr>
            <td><img src={this.props.imageUrl} className="SpecialtyImg" alt={`${this.props.name}`}/></td>
        </tr>
        <tr>
            <td><h3>{this.props.name}</h3></td>
        </tr>
        <tr>
            <td><div> {this.props.description}</div></td>
        </tr>
        </table>
        </div>
      );
    }
  }

export default Specialities;