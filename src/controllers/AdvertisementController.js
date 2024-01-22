const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement'); // Assurez-vous d'ajuster le chemin selon votre structure de projet

// Endpoint pour récupérer toutes les annonces publicitaires
router.get('/', async (req, res) => {
  try {
    const advertisements = await Advertisement.query();
    res.json(advertisements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des annonces publicitaires' });
  }
});

// Endpoint pour créer une nouvelle annonce publicitaire
router.post('/', async (req, res) => {
  const { panelId, content, timestamp } = req.body;

  try {
    const newAdvertisement = await Advertisement.query().insert({
      panelId,
      content,
      timestamp,
    });

    res.status(201).json(newAdvertisement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'annonce publicitaire' });
  }
});

// Endpoint pour mettre à jour une annonce publicitaire
router.put('/:id', async (req, res) => {
  const advertisementId = req.params.id;
  const { panelId, content, timestamp } = req.body;

  try {
    const updatedAdvertisement = await Advertisement.query().patchAndFetchById(advertisementId, {
      panelId,
      content,
      timestamp,
    });

    if (!updatedAdvertisement) {
      res.status(404).json({ error: 'Annonce publicitaire non trouvée' });
      return;
    }

    res.json(updatedAdvertisement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'annonce publicitaire' });
  }
});

// Endpoint pour supprimer une annonce publicitaire
router.delete('/:id', async (req, res) => {
  const advertisementId = req.params.id;

  try {
    const deletedCount = await Advertisement.query().deleteById(advertisementId);

    if (deletedCount === 0) {
      res.status(404).json({ error: 'Annonce publicitaire non trouvée' });
      return;
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'annonce publicitaire' });
  }
});

module.exports = router;
