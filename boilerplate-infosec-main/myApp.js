const express = require('express');
const app = express();

// 👉 AÑADE ESTO AQUÍ
const helmet = require('helmet');
app.use(helmet());
// 👈 HASTA AQUÍ

module.exports = app;

