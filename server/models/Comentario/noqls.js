const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const comentarioSchema = new Schema({
    idUsuario: {
        type: String,
        required: true,
    },
    Titulo: {
        type: String,
        required: true,
    },
    Texto: {
        type: String,
        required: true,
        maxlength: 511
    }
}, {
    timestamps: {
        createdAt: 'timestamp'
    }
});

module.exports = model("Comentario", comentarioSchema, "Comentario");
