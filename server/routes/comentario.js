const { crearComentario, obtenerComentarios } = require('../controllers/Comentario_nosql.js');
const express = require('express');
const router = express.Router();

router.route('/create/nosql')
    .post(crearComentario);

    router.get('/mostrar/nosql/:tituloJuego', obtenerComentarios);


module.exports = router;
