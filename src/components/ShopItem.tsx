import React from 'react';
import items from '../data/Items';

const ShopItem: React.FC <{id: any} > = (props: any) => {
  
  const {id} = props.match.params;
  const itemIndex = items.findIndex((item: any) => item.id === Number.parseInt(id));
  const item = items[itemIndex];

  return (
    <section className="item-section">
      <div className="container">
     
      <div className="item-details">
        <img src={item.imageURL} alt={item.description.split('.')[0]} />
        <div className="item-text">
         <h1>{item.name}</h1>
         <p>{item.description}</p>
       </div>
      </div>
        
      </div>   
    </section>
    
  )
}

export default ShopItem
