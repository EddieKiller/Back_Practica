const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};



const Perfil = async (req, res) => {
  const { Nombre } = req.params; 

  try {
    const connection = await mysql.createConnection(db);
    const [rows] = await connection.query('SELECT * FROM usuario WHERE Nombre_usuario = ?', [Nombre]);

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(400).json({ error: 'Usuario no existe' });
    }

    await connection.end();
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
};



module.exports = Perfil;
