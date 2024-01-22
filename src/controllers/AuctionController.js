const Auction = require('../models/Auction'); // Assurez-vous d'ajuster le chemin selon votre structure de projet

// Récupérer toutes les enchères
const getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.query();
    res.json(auctions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des enchères' });
  }
};

// Créer une nouvelle enchère
const createAuction = async (req, res) => {
  const { advertiserId, startTime, endTime } = req.body;

  try {
    const newAuction = await Auction.query().insert({
      advertiserId,
      startTime,
      endTime,
    });

    res.status(201).json(newAuction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'enchère' });
  }
};

// Mettre à jour une enchère
const updateAuction = async (req, res) => {
  const auctionId = req.params.id;
  const { advertiserId, startTime, endTime } = req.body;

  try {
    const updatedAuction = await Auction.query().patchAndFetchById(auctionId, {
      advertiserId,
      startTime,
      endTime,
    });

    if (!updatedAuction) {
      res.status(404).json({ error: 'Enchère non trouvée' });
      return;
    }

    res.json(updatedAuction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'enchère' });
  }
};

// Supprimer une enchère
const deleteAuction = async (req, res) => {
  const auctionId = req.params.id;

  try {
    const deletedCount = await Auction.query().deleteById(auctionId);

    if (deletedCount === 0) {
      res.status(404).json({ error: 'Enchère non trouvée' });
      return;
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'enchère' });
  }
};

module.exports = {
  getAllAuctions,
  createAuction,
  updateAuction,
  deleteAuction,
};
