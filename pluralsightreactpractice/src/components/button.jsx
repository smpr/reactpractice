import React, { Component } from 'react';

class Button extends Component {
   state = { counter:0};
   
   handleClick =() => {
    this.setState({
        counter: this.state.counter +1
    })
   };
    render() {
        
        return(
            <button onClick={this.handleClick}>
                {this.state.counter}
                </button>
        );
    
    }

}
export default Button;