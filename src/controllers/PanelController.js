const express = require('express');
const router = express.Router();
const Panel = require('../models/Panel'); // Assurez-vous d'ajuster le chemin selon votre structure de projet

// Endpoint pour récupérer tous les panneaux
router.get('/', async (req, res) => {
  try {
    const panels = await Panel.query();
    res.json(panels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des panneaux' });
  }
});

// Endpoint pour créer un nouveau panneau
router.post('/', async (req, res) => {
  const { name, location, advertiserId, videoUrl, logoUrl, timestamp } = req.body;

  try {
    const newPanel = await Panel.query().insert({
      name,
      location,
      advertiserId,
      videoUrl,
      logoUrl,
      timestamp,
    });

    res.status(201).json(newPanel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création du panneau' });
  }
});

// Endpoint pour mettre à jour un panneau
router.put('/:id', async (req, res) => {
  const panelId = req.params.id;
  const { name, location, advertiserId, videoUrl, logoUrl, timestamp } = req.body;

  try {
    const updatedPanel = await Panel.query().patchAndFetchById(panelId, {
      name,
      location,
      advertiserId,
      videoUrl,
      logoUrl,
      timestamp,
    });

    if (!updatedPanel) {
      res.status(404).json({ error: 'Panneau non trouvé' });
      return;
    }

    res.json(updatedPanel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du panneau' });
  }
});

// Endpoint pour supprimer un panneau
router.delete('/:id', async (req, res) => {
  const panelId = req.params.id;

  try {
    const deletedCount = await Panel.query().deleteById(panelId);

    if (deletedCount === 0) {
      res.status(404).json({ error: 'Panneau non trouvé' });
      return;
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression du panneau' });
  }
});

module.exports = router;
