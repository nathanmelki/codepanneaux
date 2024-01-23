// src/controllers/AuctionController.js
const express = require('express');
const router = express.Router();
const Bid = require('../models/Bid');

// Soumettre une nouvelle enchère
router.post('/bids', async (req, res) => {
  const { amount } = req.body;
  const newBid = new Bid({
    amount,
  });

  try {
    const submittedBid = await newBid.save();
    res.status(201).json(submittedBid);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
