const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnidadesSchema = new Schema({
    Marca: String,
    Modelo: String,
    Placa: String,
    Ubicacion: String,
    Kilometraje: String,
    Gasolina: String
});

module.exports = mongoose.model('unidades',UnidadesSchema);