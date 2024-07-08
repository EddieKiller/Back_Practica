const Comentario = require('../models/Comentario/noqls'); 

const crearComentario = async (req, res) => {
    try {
        const { idUsuario, Titulo, Texto } = req.body;

        if (!idUsuario || !Titulo || !Texto) {
            return res.status(400).json({
                success: false,
                message: "Los campos idUsuario, Titulo y Texto son obligatorios."
            });
        }
        const comentario = new Comentario({ idUsuario, Titulo, Texto });
        await comentario.save();

        return res.status(201).json({
            success: true,
            message: "Comentario creado exitosamente",
            data: comentario
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error
        });
    }
};


const obtenerComentarios = async (req, res) => {
    try {
        const { tituloJuego } = req.params;
        const comentarios = await Comentario.find({ Titulo: tituloJuego });

        return res.status(200).json({
            success: true,
            message: "Comentarios obtenidos",
            data: comentarios
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error
        });
    }
};



module.exports = {
    crearComentario,
    obtenerComentarios
};
