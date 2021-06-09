import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Fragment>
      <section className="hero-section">
        <div className="hero-left">
          <h2>Spice Up Your Life</h2>
          <p>Bringing the world's finest herbs and spices to your doorstep.</p>
          <Link to="/shop"><button className="btn btn-shop">Browse Store</button></Link>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <h2>About Our Shop</h2>
            <p>What started as an online stall at a flea market in Courtice, Ontario has expanded into a full-fledged store shipping the highest quality products worldwide. 
              Having a strong passion for the worlds many food cultures, Scott, a former chef, decided to move to a less stressful part of the industry that allowed him to 
              use his research and communication, as well as business skills, to bring spices and other global product to food afficianados around the world.
            </p>
          </div>
          <img src="https://images.pexels.com/photos/2632292/pexels-photo-2632292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    
        </div>
         </section>
    </Fragment>
  );
};

export default Home;
