// src/routes/api.js
const express = require('express');
const router = express.Router();
const AdvertisementController = require('../controllers/AdvertisementController');
const AuctionController = require('../controllers/AuctionController');

// Routes for Advertisement
router.post('/advertisements', AdvertisementController.createAdvertisement);
router.get('/advertisements', AdvertisementController.getAllAdvertisements);
router.get('/advertisements/:id', AdvertisementController.getAdvertisementById);
router.put('/advertisements/:id', AdvertisementController.updateAdvertisement);
router.delete('/advertisements/:id', AdvertisementController.deleteAdvertisement);

// Routes for Auction
router.post('/auctions', AuctionController.createAuction);
router.get('/auctions', AuctionController.getAllAuctions);
router.get('/auctions/:id', AuctionController.getAuctionById);
router.put('/auctions/:id', AuctionController.updateAuction);
router.delete('/auctions/:id', AuctionController.deleteAuction);

module.exports = router;
