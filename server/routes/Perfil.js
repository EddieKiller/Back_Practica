const express = require('express');
const Router = express.Router();
const Perfil = require('../controllers/Perfil');

Router.get('/Perfil/:Nombre', Perfil); 

module.exports = Router;
