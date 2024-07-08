const express = require('express');
const ConsultasController = require('../controllers/Consultas');

const Router = express.Router();

Router.get('/Consulta1', ConsultasController.Consulta1);
Router.get('/Consulta2', ConsultasController.Consulta2);
Router.get('/Consulta3', ConsultasController.Consulta3);
Router.get('/Consulta4', ConsultasController.Consulta4);
Router.get('/Consulta5', ConsultasController.Consulta5);

module.exports = Router;