import Navbar from './components/Navbar';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components//Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Cart from './components/Cart';

const App: React.FC = () => {

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  ) 
  ;
}

export default App;
