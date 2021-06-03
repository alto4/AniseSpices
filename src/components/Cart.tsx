import React from 'react'

interface Item {
  id: number,
  name: string,
  price: number,
  unit: string,
  quantity: number,
  imageURL: string,
  description: string
}

const Cart: React.FC<{cartItems: any, setShowCart: Function}> = ({cartItems, setShowCart}) => {
  return (
    <aside className="cart">
      <h2>Your Cart</h2> 
      <button className="btn-close-cart" onClick={() => { setShowCart(false)}}>X</button>
      <p>You currently have {cartItems.length} items in your cart.</p>
      {cartItems.map((item: Item, index: string) => {
        return (
          <div className='cart-item'>
            <img src={item.imageURL} alt="" />
            <h4>{item.name}</h4>
            <div className="quantity-section">
              <p>Quanitity:</p>
              <div className="quantity-buttons">
                <button className="btn-decrement">-</button>
                <span>{item.quantity}</span>
                <button className="btn-increment">+</button>
              </div> 
            </div>
            <p>${item.quantity * item.price} <br/><small>${item.price}/{item.unit}</small></p>
            <button className="btn-delete"><i className="fa fa-trash fa-sm"></i></button>
          </div>
        )
      })}
      <button className="btn">Checkout</button>
      <button className="btn" onClick={() => {setShowCart(false)}}>Shop More</button>
    </aside>
  )
}

export default Cart
