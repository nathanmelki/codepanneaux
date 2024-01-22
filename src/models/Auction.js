const { Model } = require('objection');
const knex = require('../db'); // Assurez-vous d'ajuster le chemin selon votre structure de projet

Model.knex(knex);

class Auction extends Model {
  static get tableName() {
    return 'auctions'; // Assurez-vous d'avoir une table "auctions" dans votre base de données
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['adId', 'startTime', 'endTime'],
      properties: {
        id: { type: 'integer' },
        adId: { type: 'integer' },
        startTime: { type: 'timestamp' }, // Assurez-vous d'ajuster le type de données selon votre base de données
        endTime: { type: 'timestamp' }, // Assurez-vous d'ajuster le type de données selon votre base de données
      },
    };
  }

  static get relationMappings() {
    const Advertisement = require('./Advertisement'); // Assurez-vous d'ajuster le chemin selon votre structure de projet

    return {
      advertisement: {
        relation: Model.BelongsToOneRelation,
        modelClass: Advertisement,
        join: {
          from: 'auctions.adId',
          to: 'advertisements.id',
        },
      },
    };
  }
}

module.exports = Auction;
//npm install objection knex
//Assurez-vous également d'ajuster la configuration de la base de données dans le fichier //knexfile.js selon vos paramètres.