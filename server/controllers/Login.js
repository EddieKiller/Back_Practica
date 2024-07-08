const mysql = require('mysql2/promise'); 

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};

const logeo = async (req, res) => {
  const { Nombre_usuario, Contraseña } = req.body;

  if (!Nombre_usuario || !Contraseña) {
    res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    return;
  }

  const values = [Nombre_usuario, Contraseña];

  try {
    const connection = await mysql.createConnection(db);

    const [rows] = await connection.query('SELECT * FROM usuario WHERE Nombre_usuario = ? AND Contraseña = ?', values);

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(400).json({ error: 'Usuario no existe' });
    }

    await connection.end();
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
};

module.exports = logeo;
