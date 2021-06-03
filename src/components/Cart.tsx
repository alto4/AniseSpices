import React from 'react'

const Cart: React.FC<{cartItems: any}> = ({cartItems}) => {
  return (
    <aside className="cart">
      <h4>Cart</h4>
      <p>There are {cartItems.length} items to be rendered here.</p>
    </aside>
  )
}

export default Cart
