// src/controllers/PanelController.js
const express = require('express');
const router = express.Router();
const VirtualPanel = require('../models/VirtualPanel');

// Récupérer tous les panneaux virtuels
router.get('/virtual-panels', async (req, res) => {
  try {
    const virtualPanels = await VirtualPanel.find();
    res.json(virtualPanels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
