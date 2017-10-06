import React, { Component } from 'react'
import Product from './Product'
import AdminForm from './AdminForm.js'
class AdminView extends Component {
  constructor () {
    super()

    this.state = {
      productList: [
        {
          productname: 'Hammer',
          description: 'Itsa hammer',
          productprice: 12.3
        },
        {
          productname: 'Nail',
          description: 'Itsa nail',
          productprice: 0.12
        }
      ]
    }
  }
  render () {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <div>
          { this.state.productList.map((product, index) => {
            return (
              <Product key={index}productName={product.productname} price={product.productprice} description={product.productdescription}/>
            )
          }) }
        </div>
        <h2>Create A New Product</h2>
        <AdminForm />
      </div>
    )
  }
}

export default AdminView