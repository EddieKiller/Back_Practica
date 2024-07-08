const mysql = require('mysql2/promise');

const db = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'progra_web'
};
const Agregar = async (req, res) => {
  const { Nombre_usuario, Nombre_juego } = req.params;

  try {
    const connection = await mysql.createConnection(db);
    const [userData] = await connection.execute('SELECT lv.Id_lista FROM lista_videojuegos lv JOIN usuario u ON lv.Id_usuario = u.Id_usuario WHERE u.Nombre_usuario= ?', [Nombre_usuario]);
    const Id_lista= userData[0].Id_lista;

    const [rows] = await connection.query('INSERT INTO contiene (Id_lista, Titulo) VALUES (?, ?)', [Id_lista, Nombre_juego]);
    console.log(rows)
    if (rows.affectedRows > 0) {
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


const Eliminar= async (req, res) => {
  const { Nombre_usuario, Nombre_juego } = req.params;
  
    try {
      const connection = await mysql.createConnection(db);
      const [userData] = await connection.execute('SELECT lv.Id_lista FROM lista_videojuegos lv JOIN usuario u ON lv.Id_usuario = u.Id_usuario WHERE u.Nombre_usuario= ?', [Nombre_usuario]);
      const Id_lista= userData[0].Id_lista;

      const [rows] = await connection.query('DELETE FROM contiene WHERE Id_lista = ? AND Titulo = ?', [Id_lista, Nombre_juego]);

      if (rows.affectedRows > 0) {
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

const Mostrar_Lista= async (req, res) => {
    const { Nombre_usuario } = req.params; 
  
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.query('SELECT v.* FROM videojuego v JOIN contiene p ON v.Titulo = p.Titulo JOIN lista_videojuegos lv ON p.Id_lista = lv.Id_lista JOIN usuario u ON lv.Id_usuario = u.Id_usuario WHERE u.Nombre_usuario = ?', [Nombre_usuario]);
  
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
 




module.exports = {Agregar, Eliminar, Mostrar_Lista};


