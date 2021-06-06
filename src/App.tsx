import Navbar from './components/Navbar';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components//Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import items from './data/Items';

/*
interface Item {
  id: number,
  name: string,
  price: number,
  quantity: string,
  imageURL: string,
  description: string
}
*/

const App: React.FC = () => {

  const [cartItems, setCartItems]: any = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = (item: any) => {
    alert('item added to cart at app level')
    let updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  }

  const updateItemQuantity = (e: any, value: number) => {
    let id = e.currentTarget.getAttribute('data-id');
    e.target.value = value;
    let updatedCartItems = [...cartItems];
    let cartIndex = cartItems.findIndex((item: any) => item.id == id);


    console.log('Updating quantity of item with data-id of ' + id + ' to ' + value + 'units. This item is located at cart index' + cartIndex)
    console.log('Cart items before update:' + updatedCartItems[id - 1])
    updatedCartItems[cartIndex].quantity = value;
    setCartItems(updatedCartItems);
  }

  return (
    <Router>
      <Navbar cartItems={cartItems} updateItemQuantity={updateItemQuantity} items={items} quantity={quantity} setQuantity={setQuantity}/>
      <Switch>
        <Route exact path="/shop" render={() => {return <Shop addItem={addItem} items={items} quantity={quantity} setQuantity={setQuantity}/>}} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  ) 
  ;
}

export default App;
