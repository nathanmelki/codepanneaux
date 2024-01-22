import React, { useState } from 'react';

const AuctionComponent = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');

  const handleSubmitBid = event => {
    event.preventDefault();

    // Logique pour envoyer l'enchère au serveur
    const bidData = {
      bidAmount,
      selectedStartTime,
      selectedEndTime,
    };

    // Envoyer bidData à votre API d'enchères
    fetch('/api/auctions/placeBid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bidData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Bid placed successfully:', data);
        // Ajoutez une logique de redirection ou de gestion des résultats ici
      })
      .catch(error => console.error('Error placing bid:', error));
  };

  return (
    <div>
      <h1>Auction Component</h1>
      <form onSubmit={handleSubmitBid}>
        <div>
          <label htmlFor="bidAmount">Bid Amount:</label>
          <input
            type="number"
            id="bidAmount"
            value={bidAmount}
            onChange={e => setBidAmount(e.target.value)}
            min="0"
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            id="startTime"
            value={selectedStartTime}
            onChange={e => setSelectedStartTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            id="endTime"
            value={selectedEndTime}
            onChange={e => setSelectedEndTime(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Place Bid</button>
        </div>
      </form>
    </div>
  );
};

export default AuctionComponent;
