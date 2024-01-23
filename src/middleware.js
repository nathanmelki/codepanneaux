// src/middleware.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Add middleware as needed
app.use(bodyParser.json());

module.exports = app;
