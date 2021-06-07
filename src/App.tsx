import Navbar from './components/Navbar';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components//Home';
import Shop from './components/Shop';
import ShopItem from './components/ShopItem';
import Contact from './components/Contact';
import items from './data/Items';

const App: React.FC = () => {

  const [cartItems, setCartItems]: any = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = (item: any) => {
  
  let existingIndex = cartItems.findIndex((existingItem: any) => item.id == existingItem.id);
    if( existingIndex > -1) {
      console.log('already in cart update quantity here! at index ' + existingIndex)
      let updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
    let updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    }
  }

  const removeItem = (id: Number) => {

    let updatedCartItems = [...cartItems];
    let cartIndex = cartItems.findIndex((item: any) => item.id === id);

    updatedCartItems.splice(cartIndex, 1);
    setCartItems(updatedCartItems);
  }



  const updateItemQuantity = (e: any, value: number) => {
    let id = e.currentTarget.getAttribute('data-id');
    e.target.value = value;
    let updatedCartItems = [...cartItems];
    let cartIndex = cartItems.findIndex((item: any) => item.id === Number.parseInt(id));

    if(value > 0) {
      updatedCartItems[cartIndex].quantity = value;
      setCartItems(updatedCartItems);
    }
  }

  return (
    <Router>
      <Navbar cartItems={cartItems} updateItemQuantity={updateItemQuantity} items={items} quantity={quantity} setQuantity={setQuantity} removeItem={removeItem} />
      <Switch>
        <Route exact path="/shop" render={() => {return <Shop addItem={addItem} items={items} quantity={quantity} setQuantity={setQuantity}/>}} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/shop/:id" component={ShopItem}  />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  ) 
  ;
}

export default App;
