import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/restauranfood.jpg';

const Hero = () => {
  return (
    <main className="hero-container">
      {/* Left Section */}
      <div className="hero-left">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <br />
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>
        <button>Book Now</button>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <img className="hero-image" src={heroImage} alt="Restaurant Food" />
      </div>
    </main>
  );
};

export default Hero;
