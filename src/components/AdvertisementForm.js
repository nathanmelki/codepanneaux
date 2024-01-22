import React, { useState } from 'react';

const AdvertisementForm = () => {
  const [video, setVideo] = useState(null);
  const [logo, setLogo] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleVideoChange = event => {
    // Logique pour gérer le changement de fichier vidéo
    const selectedVideo = event.target.files[0];
    setVideo(selectedVideo);
  };

  const handleLogoChange = event => {
    // Logique pour gérer le changement de fichier logo
    const selectedLogo = event.target.files[0];
    setLogo(selectedLogo);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Logique pour envoyer le formulaire au serveur
    const formData = new FormData();
    formData.append('video', video);
    formData.append('logo', logo);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);

    // Envoyer formData à votre API d'annonces
    fetch('/api/advertisements', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Advertisement submitted successfully:', data);
        // Ajoutez une logique de redirection ou de gestion des résultats ici
      })
      .catch(error => console.error('Error submitting advertisement:', error));
  };

  return (
    <div>
      <h1>Advertisement Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">Video:</label>
          <input type="file" id="video" accept="video/*" onChange={handleVideoChange} />
        </div>
        <div>
          <label htmlFor="logo">Logo:</label>
          <input type="file" id="logo" accept="image/*" onChange={handleLogoChange} />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit Advertisement</button>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementForm;
