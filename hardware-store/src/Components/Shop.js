import React, { Component } from 'react';
import ShopView from './ShopView.js'
import CartView from './CartView.js'
import AdminView from './AdminView.js'
class Shop extends Component {
    render() {
        return (
            <div>
             <ShopView />
             <CartView />
             <AdminView />   
            </div>
        );
    }
}

export default Shop;