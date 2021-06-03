import Navbar from './components/Navbar';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components//Home';
import Shop from './components/Shop';
import Contact from './components/Contact';

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

  const addItem = (item: any) => {
    alert('item added to cart at app level')
    let updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  }

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Switch>
        <Route exact path="/shop" render={() => {return <Shop addItem={addItem} />}} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  ) 
  ;
}

export default App;
