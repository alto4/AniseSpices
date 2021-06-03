import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Navbar: React.FC = () => {

  const [showCart, setShowCart] = useState(false);

  

  return (
   <>
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
      
        </>
  );

};

export default Navbar;
