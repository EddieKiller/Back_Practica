const mysql =require('mysql2');
const values = require('../const/const.js');

const bd = mysql.createConnection( {
    host: values.HOST,
    user: values.USER,
    password: '',
    database: values.DATABASE
  });
  bd.connect((err)=>{
        if(!err){ console.log('MySQL Conectado!')}
        else{console.log('no se conecto', err)}
});

module.exports = bd;