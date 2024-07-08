const express = require('express');

const logeo = require('../controllers/login');
const Router = express.Router();


Router.post('/api/log', logeo)
module.exports = Router;