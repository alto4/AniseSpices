import React from 'react';
import items from '../data/Items';


const Shop: React.FC<{addItem: Function}> = (props: any) => {
  
  let featuredItems = [items[0], items[1], items[2]]

  const addItemToCart = (e: any) => {
    let id = e.currentTarget.getAttribute('data-id');
    props.addItem(items[id - 1]);
    console.log('CLICK! on item ' + items[id - 1].name)
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
