const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartamentoSchema = new Schema({
    Nombre: String,
    Correo: String,
    Contraseña: String,
    Sexo: String,
    Departamento: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('departamento',DepartamentoSchema);