import React from 'react';
import items from '../data/Items';

const ShopItem: React.FC <{id: any} > = (props: any) => {
  
  const {id} = props.match.params;
  const itemIndex = items.findIndex((item: any) => item.id === Number.parseInt(id));
  const item = items[itemIndex];

  return (
    <div>
     <h1>{item.name}</h1>
     <img src={item.imageURL} alt={item.description.split('.')[0]} />
     <p>{item.description}</p>
    
    </div>
    
  )
}

export default ShopItem
