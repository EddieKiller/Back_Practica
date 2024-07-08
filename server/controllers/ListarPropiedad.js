const db = require('../database/Config_mysql');

const listarPropiedades = (req, res) => {
  db.query("SELECT * FROM propiedad", (err, rows, fields) => {
    if (!err) {
      const propiedades = rows.map(row => ({
        direccion: row.direccion_completa, 
        precio: row.precio,
        numero_habitaciones: row.numero_habitaciones,
        numero_banos: row.numero_banos,
        imagen: row.imagen_propiedad

      }));

      res.send(propiedades);
    } else {
      console.log(err);
    }
  });
}

module.exports = listarPropiedades;