// About.js
import React from 'react';
import './About.css';
import lemonImage from './assets/ChefSprinkles.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="little-lemon-container" style={{ backgroundImage: `url(${lemonImage})` }}>
      <div className="text-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming restaurant that specializes in Mediterranean cuisine
          with a focus on fresh, locally sourced ingredients. Known for its vibrant flavors,
          the menu features dishes inspired by Greek, Italian, and Middle Eastern traditions,
          including handmade pasta, grilled seafood, and flavorful mezze platters.
        </p>
        <button
          className="reserve-button"
          onClick={() => navigate("/reservation-step-one")}
        >
          Reserve a Table
        </button>
      </div>
    </div>
  );
}

export default About;
