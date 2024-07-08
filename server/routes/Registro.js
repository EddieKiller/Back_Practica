const express = require('express');

const Registro = require('../controllers/Registro');
const Router = express.Router();


Router.post('/api/Registro', Registro)
module.exports = Router;