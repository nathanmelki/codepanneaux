// src/controllers/AdvertisementController.js
const express = require('express');
const router = express.Router();
const Advertisement = require('../models/Advertisement');

// Créer une nouvelle publicité
router.post('/advertisements', async (req, res) => {
  const { videoUrl, logoUrl, timestamp } = req.body;
  const newAdvertisement = new Advertisement({
    videoUrl,
    logoUrl,
    timestamp,
  });

  try {
    const createdAdvertisement = await newAdvertisement.save();
    res.status(201).json(createdAdvertisement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
