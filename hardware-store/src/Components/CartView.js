import React, { Component } from 'react'
import Product from './Product'

class CartView extends Component {
  render () {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <div>
          { this.props.cartList.map((product, index) => {
            return (
              <div key={index}>
                <Product
                  productName={product.productName}
                  price={product.price}
                  description={product.description}
                />
               
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default CartView