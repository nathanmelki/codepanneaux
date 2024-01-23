const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Gérer toutes les routes et renvoyer 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
