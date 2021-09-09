const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColaboradoresSchema = new Schema({
    nombre: String,
    correo: String,
    contraseña: String,
    sexo: String,
    area: String,
    puesto: String,
    zona: String,
    asigSemanal: String,
    unidad: String,
    maneja: Boolean
});

module.exports = mongoose.model('colaboradores',ColaboradoresSchema);