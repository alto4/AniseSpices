import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';


const Navbar: React.FC<{cartItems: any}> = ({cartItems}) => {

  const [showCart, setShowCart] = useState(false);
  console.log('props passed to navbar: ' + cartItems)

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
            <i className="fa fa-shopping-cart"></i> {cartItems.length}
            </button>
          </li>
        </ul>
      </nav>

      
      {showCart && (
         <Cart cartItems={cartItems}/>
      )}
      
        </>
  );

};

export default Navbar;
