const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};
const Juego = async (req, res) => {
    const { Titulo } = req.params; 
  
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.query('SELECT * FROM videojuego WHERE Titulo = ?', [Titulo]);
  
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(400).json({ error: 'Juego no encontrado' });
      }
  
      await connection.end();
    } catch (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
  };

  const Genero = async (req, res) => {
    const { Titulo } = req.params; 
  
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.query('SELECT genero.Nombre_genero FROM pertenece JOIN genero ON pertenece.Id_genero = genero.Id_genero WHERE pertenece.Titulo = ? ', [Titulo]);
  
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(400).json({ error: 'Juego no encontrado' });
      }
  
      await connection.end();
    } catch (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
  };


  const Plataforma = async (req, res) => {
    const { Titulo } = req.params; 
  
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.query('SELECT plataforma.Nombre_plataforma FROM se_encuentra JOIN plataforma ON se_encuentra.Id_plataforma = plataforma.Id_plataforma WHERE se_encuentra.Titulo = ?', [Titulo]);
  
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(400).json({ error: 'Juego no encontrado' });
      }
  
      await connection.end();
    } catch (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
  };


module.exports = {Juego,Plataforma,Genero};