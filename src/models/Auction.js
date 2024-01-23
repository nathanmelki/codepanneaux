// src/models/Auction.js
const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  bids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bid',
  }],
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
