import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state ={
            itemCurentlyOnSale: "A Hammer!",
            editSaleItem: false,
        }
    }
    toggleEditSaleItem=()=>{
        
        this.setState({editSaleItem: !this.state.editSaleItem})
    }
    handleItemCurentlyOnSaleChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            itemCurentlyOnSale: event.target.value
        })
        //this.state.itemCurentlyOnSale =
    }
    render() {
        return (
            <div>
                <h1>Hardware Store</h1>
                <p>Currently On Sale: {this.state.itemCurentlyOnSale}</p>
                    {this.state.editSaleItem ? <button onClick={this.toggleEditSaleItem} >Hide</button> : <button onClick={this.toggleEditSaleItem} >Edit Sale Item</button>}
                
                <div>
                    {this.state.editSaleItem ? <input type="text" placeholder={this.state.itemCurentlyOnSale} onChange={this.handleItemCurentlyOnSaleChange} /> : null}
                </div>
            </div>
        );
    }
}

export default Header;