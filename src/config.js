// src/config.js
module.exports = {
  dbURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name',
  // Ajoutez d'autres variables de configuration au besoin
};
