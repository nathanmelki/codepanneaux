// src/models/Advertisement.js
const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

module.exports = Advertisement;
