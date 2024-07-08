// router.js
const express = require('express');
const router = express.Router();
const listarPropiedades = require('../controllers/ListarPropiedad');

// Configura una ruta para mostrar juegos
router.get('/ListarPropiedad', listarPropiedades);

module.exports = router;
