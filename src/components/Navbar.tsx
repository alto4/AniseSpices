import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';

const Navbar: React.FC = () => {
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
            <Link to="">
            <i className="fa fa-shopping-cart"></i>
            </Link> 0
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Navbar;
