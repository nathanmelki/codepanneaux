import React, { useState, useEffect } from 'react';
import AdvertisementForm from './AdvertisementForm';
import AuctionComponent from './AuctionComponent';

const Panel = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);

  // Fonction pour charger les publicités depuis le backend
  const loadAdvertisements = async () => {
    // Mettez votre logique pour charger les publicités depuis le backend ici
    // Utilisez fetch, axios, ou une bibliothèque similaire pour effectuer une requête HTTP
    // Mise à jour de l'état avec les données chargées depuis le backend
  };

  // Utilisez useEffect pour charger les publicités lorsque le composant est monté
  useEffect(() => {
    loadAdvertisements();
  }, []); // Le tableau vide en second argument signifie que cela s'exécutera uniquement lors du montage initial

  // Fonction pour gérer la sélection d'une publicité
  const handleAdvertisementSelect = (advertisement) => {
    setSelectedAdvertisement(advertisement);
  };

  return (
    <div>
      <h2>Virtual Panels</h2>
      <div>
        <h3>Advertisements</h3>
        <ul>
          {advertisements.map((ad) => (
            <li key={ad.id} onClick={() => handleAdvertisementSelect(ad)}>
              {ad.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Selected Advertisement</h3>
        {selectedAdvertisement ? (
          <div>
            <p>Title: {selectedAdvertisement.title}</p>
            <p>Description: {selectedAdvertisement.description}</p>
            <p>Timestamp: {selectedAdvertisement.timestamp}</p>
          </div>
        ) : (
          <p>Select an advertisement to view details.</p>
        )}
      </div>
      <div>
        <AdvertisementForm />
      </div>
      <div>
        <AuctionComponent />
      </div>
    </div>
  );
};

export default Panel;
