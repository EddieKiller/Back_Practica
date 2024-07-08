const express = require('express');
const Router = express.Router();
const Lista_juegos = require('../controllers/Lista_juegos');


Router.post('/Lista_juegos/agregar/:Nombre_usuario/:Nombre_juego', Lista_juegos.Agregar); 
Router.get('/Lista_juegos/obtener/:Nombre_usuario',Lista_juegos.Mostrar_Lista);
Router.post('/Lista_juegos/Eliminar/:Nombre_usuario/:Nombre_juego',Lista_juegos.Eliminar);

module.exports = Router;
