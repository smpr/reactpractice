import React, { Component } from 'react';
import EditSaleItem from './EditSaleItem.js'
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
                <EditSaleItem
                toggleEditSaleItem={this.toggleEditSaleItem}
                handleItemCurrentlyOnSaleChange={this.handleItemCurentlyOnSaleChange}
                editSaleItem={this.state.editSaleItem}
                itemCurrentlyOnSale={this.state.itemCurentlyOnSale}

                />
                    
             
            </div>
        );
    }
}

export default Header;