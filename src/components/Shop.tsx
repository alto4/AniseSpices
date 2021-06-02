import React from 'react';
import items from '../data/Items';


const Shop: React.FC = () => {
  
  let featuredItems = [items[0], items[1], items[2]]
 
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
              <button className="btn btn-block"><i className="fa fa-shopping-cart"></i> Add</button>
              <button className="btn btn-block"><i className="fa fa-list"></i> Details</button>
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
              <button className="btn btn-block"><i className="fa fa-shopping-cart"></i> Add</button>
              <button className="btn btn-block"><i className="fa fa-list"></i> Details</button>
            </div>
          </div>)
          })}       
        </div>
          
      </div>
    </section>
  )
};

export default Shop;
