// server.js
const express = require('express');
const sequelize = require('./db'); // Asegúrate de importar db.js

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware y rutas aquí...

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
