import React from 'react'
const Product = ({ productName, price, description, index, deleteProductFromProductList }) => {
    const deleteProduct = () =>{
        deleteProductFromProductList(index)
    }
    return (
      <div>
        <h3>{productName}</h3>
        <h4>${price}</h4>
        <p>{description}</p>
        <button onClick={deleteProduct}>Delete</button>
      </div>
    )
  }
  
  export default Product