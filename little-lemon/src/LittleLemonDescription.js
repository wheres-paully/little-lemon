import React from 'react';
import './LittleLemonDescription.css';
import lemonImage from './assets/lemon-chef.jpg'; // Replace with your image path

function LittleLemonDescription() {
  return (
    <div className="little-lemon-container">
      <div className="text-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming restaurant that specializes in Mediterranean cuisine
          with a focus on fresh, locally sourced ingredients. Known for its vibrant flavors,
          the menu features dishes inspired by Greek, Italian, and Middle Eastern traditions,
          including handmade pasta, grilled seafood, and flavorful mezze platters.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="image-section">
        <img src={lemonImage} alt="Little Lemon cuisine" />
      </div>
    </div>
  );
}

export default LittleLemonDescription;