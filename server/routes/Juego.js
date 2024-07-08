const express = require('express');
const Router = express.Router();
const Juego = require('../controllers/Juego');


Router.get('/Juego/Juego/:Titulo', Juego.Juego);
Router.get('/Juego/Plataforma/:Titulo', Juego.Plataforma);
Router.get('/Juego/Genero/:Titulo', Juego.Genero);

module.exports = Router;