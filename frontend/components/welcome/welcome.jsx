import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcome-container">
      <div className="background-img"></div>
      <div className="inspired-message">
        <h1>Get inspired and share your best photos</h1>
        <h2>Find your home among the world's best photographers</h2>
        <Link to="/signup" className="signup">Join Aperture</Link>
      </div>
      
      <section className="full-features">
      </section>

      <footer className="footer">

      </footer>
    </section>
  );
};

export default Welcome;
