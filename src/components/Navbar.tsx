import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

const Navbar: React.FC = () => {
  return (
    <Router>
      <nav>
        <h1>Anise Spice Market</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Navbar;
