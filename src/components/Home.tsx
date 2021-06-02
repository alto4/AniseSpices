import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h2>Spice Up Your Life</h2>
        <p>Bringing the world's finest herbs and spices to your doorstep.</p>
        <Link to="/shop"><button className="btn btn-shop">Browse Store</button></Link>
      </div>
    </section>
  );
};

export default Home;
