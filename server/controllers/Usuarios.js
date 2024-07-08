const mysql = require('mysql2/promise');
const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};

const cambio_nombre = async (req, res) => {
  const { Nombre_usuario, Nombre_nuevo } = req.params;

  try {
    const connection = await mysql.createConnection(db);
    const [userData] = await connection.execute('SELECT Id_usuario FROM usuario WHERE Nombre_usuario = ?', [Nombre_usuario]);
    const Id_usuario = userData[0].Id_usuario;
    const [rows] = await connection.execute('UPDATE usuario SET Nombre_usuario = ? WHERE Id_usuario = ?', [Nombre_nuevo, Id_usuario]);
    if (rows.affectedRows > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: 'Error al cambiar el nombre' });
    }

    await connection.end();
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
}

const cambio_contrasena = async (req, res) => {
  const { Nombre_usuario, Nueva_contrasena } = req.params;

  try {
    const connection = await mysql.createConnection(db);
    const [userData] = await connection.execute('SELECT Id_usuario FROM usuario WHERE Nombre_usuario = ?', [Nombre_usuario]);
    const Id_usuario = userData[0].Id_usuario;
    const [rows] = await connection.execute('UPDATE `usuario` SET `Contraseña` = ? WHERE Id_usuario = ?', [Nueva_contrasena, Id_usuario]);
    if (rows.affectedRows > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: 'Error al cambiar la contraseña' });
    }

    await connection.end();
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
}

const cambio_correo = async (req, res) => {
  const { Nombre_usuario, Nuevo_correo } = req.params;

  try {
    const connection = await mysql.createConnection(db);
    const [userData] = await connection.execute('SELECT Id_usuario FROM usuario WHERE Nombre_usuario = ?', [Nombre_usuario]);
    const Id_usuario = userData[0].Id_usuario;
    
    const [result] = await connection.execute('UPDATE usuario SET Correo = ? WHERE Id_usuario = ?', [Nuevo_correo, Id_usuario]);
    
    if (result.affectedRows > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: 'Error al cambiar el correo' });
    }

    await connection.end();
  } catch (err) {
    console.error('Error en la consulta:', err);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
}


module.exports = { cambio_contrasena, cambio_correo, cambio_nombre };
