import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Item {
  id: number,
  name: string,
  price: number,
  unit: string,
  quantity: number,
  imageURL: string,
  description: string
}

const Shop: React.FC<{addItem: Function, setQuantity: Function, items: Array<Item>, quantity: number}> = ({addItem, setQuantity, items, quantity}) => {
  
  const [shopItems, setShopItems] = useState(items);
  const [itemQuantity, setItemQuantity] = useState(1)
  let featuredItems = [shopItems[0], shopItems[1], shopItems[2]]

  const addItemToCart = (e: any) => {
    let id = e.currentTarget.getAttribute('data-id');
    addItem(items[id - 1]);
    console.log('CLICK! on item ' + items[id - 1].name)
  }

  const updateItemQuantity = (e: any, value: number) => {
    let id = e.currentTarget.getAttribute('data-id');
    e.target.value = value;
    let updatedItems = [...shopItems];

    console.log('Updating quantity of item with data-id of ' + id + ' to ' + value + 'units')
    console.log('Cart items before update:' + updatedItems[id - 1])
    updatedItems[id - 1].quantity = value;
    setShopItems(updatedItems);
  }

  return (
    <section className="store-section">
      <div className="container">
        <h1><i className="fa fa-pepper-hot fa-sm"></i> Shop Spices</h1>
 

        <h2>Our Favourites</h2>
        <div className="items-container">
          {featuredItems.map((item, index) => { return (      
          <div className="item-card">
            <h3>{item.name}</h3>
            <img src={item.imageURL} alt={item.description.split('.')[0] + '.'} />
            <div className="product-card-price">
              <p>Price: ${item.price} / {item.unit}</p>
              <div className="quantity-buttons">
                <button className="btn-decrement" data-id={item.id} onClick={(e) => {setItemQuantity(item.quantity - 1); updateItemQuantity(e, item.quantity -1);}}>-</button>
                <input type="number" name="quantity" value={item.quantity} data-id={item.id} onChange={(e) => { setItemQuantity(Number.parseInt(e.target.value.toString())); updateItemQuantity(e, item.quantity);}}/> 
                <button className="btn-increment" data-id={item.id} onClick={(e) => {setItemQuantity(item.quantity + 1); updateItemQuantity(e, item.quantity + 1);}}>+</button>
              </div> 
            </div>
             
            <div className="buttons">
              <button className="btn btn-block" data-id={item.id} onClick={addItemToCart}><i className="fa fa-shopping-cart" ></i> Add</button>
              <Link to={'shop/' + item.id} className="btn btn-block"><i className="fa fa-list" data-id={item.id}></i> Details</Link>
            </div>
          </div>)
          })}       
        </div>

        <h2>All</h2>
        <div className="items-container">
          {items.map((item: Item, index: number) => { return (      
          <div className="item-card">
            <h3>{item.name}</h3>
            <img src={item.imageURL} alt={item.description.split('.')[0] + '.'} />
            <div className="product-card-price">
              <p>Price: ${item.price} / {item.unit}</p>
              <div className="quantity-buttons">
                <button className="btn-decrement" data-id={item.id} onClick={(e) => {setItemQuantity(item.quantity - 1); updateItemQuantity(e, item.quantity -1);}}>-</button>
                <input type="number" name="quantity" value={item.quantity} data-id={item.id} onChange={(e) => { setItemQuantity(Number.parseInt(e.target.value.toString())); updateItemQuantity(e, item.quantity);}}/> 
                <button className="btn-increment" data-id={item.id} onClick={(e) => {setItemQuantity(item.quantity + 1); updateItemQuantity(e, item.quantity + 1);}}>+</button>
              </div> 
            </div>
            <div className="buttons">
              <button className="btn btn-block" data-id={item.id} onClick={addItemToCart}><i className="fa fa-shopping-cart"></i> Add</button>
              <Link to={'shop/' + item.id} className="btn btn-block"><i className="fa fa-list" data-id={item.id}></i> Details</Link>
            </div>
          </div>)
          })}       
        </div>
          
      </div>
    </section>
  )
};

export default Shop;
