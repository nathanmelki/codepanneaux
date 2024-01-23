// src/utils.js

// Fonction pour formater la date actuelle au format ISO
function getCurrentISODate() {
  return new Date().toISOString();
}

// Fonction pour générer un identifiant unique (UUID)
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Exporte les fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
  getCurrentISODate,
  generateUUID,
  // Ajoutez d'autres fonctions au besoin
};
