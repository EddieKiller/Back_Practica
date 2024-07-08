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

const login = require('./routes/Login');
app.use('/', login);

const comentario = require('./routes/comentario.js');
app.use('/', comentario);

const usuario = require('./routes/user');
app.use('/', usuario);

const Registro = require('./routes/Registro');
app.use('/', Registro);

const biblioteca = require('./routes/Biblioteca');
app.use('/', biblioteca)

const consulta1 = require('./routes/consultas');
app.use('/', consulta1);

const Perfil = require('./routes/Perfil')
app.use('/',Perfil)

const Juego = require('./routes/Juego')
app.use('/',Juego)

const Lista_juegos = require('./routes/Lista_juegos')
app.use('/',Lista_juegos)

app.listen(4001, () => console.log('Inicio de servidor'));