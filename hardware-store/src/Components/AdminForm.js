import React, { Component } from 'react';

class AdminForm extends Component {
    render() {
        return (
            <form >
          <div>
            <input type="text" placeholder="Name"/>
          </div>
          <div>
            <input type="text" placeholder="Price"/>
          </div>
          <div>
            <input type="text" placeholder="Description"/>
          </div>
          <div>
            <button>Create A Product</button>
          </div>
        </form>
        );
    }
}

export default AdminForm;