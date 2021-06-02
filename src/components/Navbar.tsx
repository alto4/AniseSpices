import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Cart from './Cart';

const Navbar: React.FC = () => {

  const [showCart, setShowCart] = useState(false);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <h1>Anise Spice Market</h1>

        <ul>
          <li>
            <Link to="">
              <i className="fa fa-search"></i>
            </Link>
          </li>
          <li>
            <button className="btn btn-cart" onClick={()=> { setShowCart(!showCart)}}>
            <i className="fa fa-shopping-cart"></i> 0
            </button>
          </li>
        </ul>
      </nav>

      
      {showCart && (
         <Cart/>
      )}
      
      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Navbar;
