// src/components/AdvertisementForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AdvertisementForm = () => {
  const [advertisement, setAdvertisement] = useState({
    videoUrl: '',
    logoUrl: '',
    timestamp: new Date().toISOString(),
  });

  const handleSubmit = () => {
    // Effectuez une requête à votre API pour créer une nouvelle publicité
    axios.post('/api/advertisements', advertisement)
      .then(response => console.log('Advertisement created:', response.data))
      .catch(error => console.error('Error creating advertisement:', error));
  };

  return (
    <div>
      <h1>Advertisement Form</h1>
      {/* Intégrez ici le formulaire de création/modification de publicité */}
      <form onSubmit={handleSubmit}>
        <label>Video URL:</label>
        <input
          type="text"
          value={advertisement.videoUrl}
          onChange={e => setAdvertisement({ ...advertisement, videoUrl: e.target.value })}
        />
        <br />
        <label>Logo URL:</label>
        <input
          type="text"
          value={advertisement.logoUrl}
          onChange={e => setAdvertisement({ ...advertisement, logoUrl: e.target.value })}
        />
        <br />
        <button type="submit">Create Advertisement</button>
      </form>
    </div>
  );
};

export default AdvertisementForm;
