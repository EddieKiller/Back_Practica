const express = require("express");
const Router = express.Router();
const usuario = require('../controllers/Usuarios')


Router.post('/MODnombre/:Nombre_usuario/:Nombre_nuevo',usuario.cambio_nombre)
Router.post('/MODcontrasena/:Nombre_usuario/:Nueva_contrasena',usuario.cambio_contrasena)
Router.post('/MODcorreo/:Nombre_usuario/:Nuevo_correo',usuario.cambio_correo)

module.exports = Router;