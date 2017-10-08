import React from 'react'

const Cart = ({ cartProductName, cartPrice, cartDescription }) => {
  return (
    <div>
      <h3>{cartProductName}</h3>
      <h4>${cartPrice}</h4>
      <p>{cartDescription}</p>
    </div>
  )
}

export default Cart