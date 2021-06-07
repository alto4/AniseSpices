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

const Cart: React.FC<{cartItems: any, setShowCart: Function, updateItemQuantity: Function, removeItem: Function, setQuantity: Function, items: Array<object>, quantity: number}> = ({cartItems, setShowCart, removeItem, updateItemQuantity, setQuantity, quantity}) => {

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
              <button className="btn-decrement" data-id={item.id} onClick={(e) => { updateItemQuantity(e, item.quantity - 1);}}>-</button>
                <input type="number" name="quantity" value={item.quantity} data-id={item.id} onChange={(e) => { updateItemQuantity(e, item.quantity);}}/> 
                <button className="btn-increment" data-id={item.id} onClick={(e) => { updateItemQuantity(e, item.quantity + 1);}}>+</button>
              </div> 
            </div>
            <p>${(item.quantity * item.price).toFixed(2)} <br/><small>${item.price}/{item.unit}</small></p>
            <button className="btn-delete"  onClick={(e) => { removeItem(item.id);}}><i className="fa fa-trash fa-sm"></i></button>
          </div>
        )
      })}
      <p>Cart Total: ${ cartItems.reduce((total: number, item: Item) => (total + (item.quantity * item.price)), 0).toFixed(2)} </p>
      <div className="cart-buttons">
        <button className="btn">Checkout</button>
        <button className="btn" onClick={() => {setShowCart(false)}}>Shop More</button>
      </div>
    </aside>
  )
}

export default Cart
