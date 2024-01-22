const { Pool } = require('pg');

// Configurations de la base de données
const dbConfig = {
  user: 'votre_utilisateur',
  host: 'votre_host',
  database: 'votre_base_de_donnees',
  password: 'votre_mot_de_passe',
  port: 'votre_port',
};

// Créez une nouvelle instance de Pool avec les configurations
const pool = new Pool(dbConfig);

// Fonction pour exécuter des requêtes SQL
const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Exécuté la requête', { text, duration, rows: res.rowCount });
  return res;
};

// Exportez la pool et la fonction de requête pour les utiliser ailleurs dans votre application
module.exports = {
  pool,
  query,
};
