// routes/movieRoutes.js
const express = require('express');
const router = express.Router();

// Definir rutas
router.get('/', (req, res) => {
    res.send('Lista de películas');
});

// Exportar el router
module.exports = router;
