// src/components/MapPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapPanel = () => {
  const [virtualPanels, setVirtualPanels] = useState([]);

  useEffect(() => {
    // Effectuez une requête à votre API pour récupérer les panneaux virtuels depuis le backend
    axios.get('/api/virtual-panels')
      .then(response => setVirtualPanels(response.data))
      .catch(error => console.error('Error fetching virtual panels:', error));
  }, []);

  return (
    <div>
      <h1>Map Panel</h1>
      {/* Intégrez ici la logique d'affichage de la carte et des panneaux virtuels */}
      <div>
        <h2>Virtual Panels</h2>
        <ul>
          {virtualPanels.map(panel => (
            <li key={panel.id}>{panel.name} - {panel.location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapPanel;
