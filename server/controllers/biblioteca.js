const db = require('../database/Config_mysql');

const mostrarJuegos = (req, res) => {
  db.query("SELECT * FROM videojuego", (err, rows, fields) => {
    if (!err) {
      const juegos = rows.map(row => ({
        titulo: row.Titulo, 
        img: row.Portada 
        
      }));

      res.send(juegos);
    } else {
      console.log(err);
    }
  });
}

module.exports = mostrarJuegos;

