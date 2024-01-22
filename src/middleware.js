const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Middleware pour gérer le corps des requêtes au format JSON
const jsonParser = bodyParser.json();

// Middleware pour gérer les en-têtes CORS
const corsMiddleware = cors();

// Middleware pour ajouter des en-têtes de sécurité
const helmetMiddleware = helmet();

// Middleware personnalisé pour l'authentification, par exemple
const authenticationMiddleware = (req, res, next) => {
  // Votre logique d'authentification ici
  // Vous pouvez vérifier les jetons, les sessions, etc.
  // Si l'authentification réussit, appelez next()
  // Sinon, renvoyez une réponse non autorisée (401)
  next();
};

module.exports = {
  jsonParser,
  corsMiddleware,
  helmetMiddleware,
  authenticationMiddleware,
  // Ajoutez d'autres middlewares personnalisés selon vos besoins
};
