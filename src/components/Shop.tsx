import React, { useState, useEffect } from 'react';
import items from '../data/Items';


interface Item {
  id: number,
  name: string,
  price: number,
  quantity: string,
  imageURL: string,
  description: string
}

const Shop: React.FC = (props: any) => {
  
  let featuredItems = [items[0], items[1], items[2]]

  const [cartItems, setCartItems]: any = useState([]);

  const addItemToCart = (e: any) => {
    let id = e.currentTarget.getAttribute('data-id');
    let updatedCartItems: Array<Item> = [...cartItems, items[id]]; 
    setCartItems(updatedCartItems);

    console.log('CLICK! on item ' + items[id - 1].name)
  
    console.log(updatedCartItems.length);
  }

  useEffect(() => {
   // props.updateCart(cartItems);
  })

  
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
            <p>Price: ${item.price} / {item.quantity}</p>
            <div className="buttons">
              <button className="btn btn-block" data-id={item.id} onClick={addItemToCart}><i className="fa fa-shopping-cart" ></i> Add</button>
              <button className="btn btn-block"><i className="fa fa-list" data-id={item.id}></i> Details</button>
            </div>
          </div>)
          })}       
        </div>

        <h2>All</h2>
        <div className="items-container">
          {items.map((item, index) => { return (      
          <div className="item-card">
            <h3>{item.name}</h3>
            <img src={item.imageURL} alt={item.description.split('.')[0] + '.'} />
            <p>Price: ${item.price} / {item.quantity}</p>
            <div className="buttons">
              <button className="btn btn-block" data-id={item.id} onClick={addItemToCart}><i className="fa fa-shopping-cart"></i> Add</button>
              <button className="btn btn-block"><i className="fa fa-list" data-id={item.id}></i> Details</button>
            </div>
          </div>)
          })}       
        </div>
          
      </div>
    </section>
  )
};

export default Shop;
