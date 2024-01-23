// src/components/AuctionComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const AuctionComponent = () => {
  const [bidAmount, setBidAmount] = useState(0);

  const handleBid = () => {
    // Effectuez une requête à votre API pour soumettre une enchère
    axios.post('/api/bids', { amount: bidAmount })
      .then(response => console.log('Bid submitted:', response.data))
      .catch(error => console.error('Error submitting bid:', error));
  };

  return (
    <div>
      <h1>Auction Component</h1>
      {/* Intégrez ici la logique de gestion des enchères */}
      <div>
        <h2>Auction Details</h2>
        <p>Current Bid: $100</p>
        <label>Your Bid:</label>
        <input
          type="number"
          value={bidAmount}
          onChange={e => setBidAmount(e.target.value)}
        />
        <button onClick={handleBid}>Place Bid</button>
      </div>
    </div>
  );
};

export default AuctionComponent;
