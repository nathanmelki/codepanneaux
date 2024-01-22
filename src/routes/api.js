const express = require('express');
const router = express.Router();

const panelController = require('./controllers/PanelController'); // Assurez-vous d'ajuster le chemin selon votre structure de projet
const advertisementController = require('./controllers/AdvertisementController'); // Ajustez le chemin en conséquence
const auctionController = require('./controllers/AuctionController'); // Ajustez le chemin en conséquence

// Routes pour les panneaux virtuels
router.get('/panels', panelController.getAllPanels);
router.post('/panels', panelController.createPanel);
router.put('/panels/:id', panelController.updatePanel);
router.delete('/panels/:id', panelController.deletePanel);

// Routes pour les publicités
router.get('/advertisements', advertisementController.getAllAdvertisements);
router.post('/advertisements', advertisementController.createAdvertisement);
router.put('/advertisements/:id', advertisementController.updateAdvertisement);
router.delete('/advertisements/:id', advertisementController.deleteAdvertisement);

// Routes pour les enchères
router.get('/auctions', auctionController.getAllAuctions);
router.post('/auctions', auctionController.createAuction);
router.put('/auctions/:id', auctionController.updateAuction);
router.delete('/auctions/:id', auctionController.deleteAuction);

module.exports = router;
