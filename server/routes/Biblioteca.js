// router.js
const express = require('express');
const router = express.Router();
const mostrarJuegos = require('../controllers/biblioteca');

// Configura una ruta para mostrar juegos
router.get('/biblioteca', mostrarJuegos);

module.exports = router;
