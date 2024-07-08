const express = require("express");
const cors = require("cors");
const app = express();
require('./database/Config_mongo');
require('./database/Config_mysql');

app.use(cors());
app.use(express.json()); // Para analizar solicitudes con contenido de tipo "application/json"
app.use(express.urlencoded({ extended: true })); // Para analizar solicitudes con contenido de tipo "application/x-www-form-urlencoded"

app.use(cors());
app.use(express.json());

const ListarPropiedades = require('./routes/ListarPropiedades');
const { RUN_PORT } = require("./const/const");
app.use('/', ListarPropiedades)

app.listen(RUN_PORT, () => console.log('Inicio de servidor'));