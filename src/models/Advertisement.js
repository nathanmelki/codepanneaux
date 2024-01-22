const { Model } = require('objection');
const knex = require('../db'); // Assurez-vous d'ajuster le chemin selon votre structure de projet

Model.knex(knex);

class Advertisement extends Model {
  static get tableName() {
    return 'advertisements'; // Assurez-vous d'avoir une table "advertisements" dans votre base de données
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'description', 'timestamp'],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 1000 },
        timestamp: { type: 'timestamp' }, // Assurez-vous d'ajuster le type de données selon votre base de données
      },
    };
  }
}

module.exports = Advertisement;
//npm install objection knex
//Assurez-vous également d'ajuster la configuration de la base de données dans le fichier //knexfile.js selon vos paramètres.