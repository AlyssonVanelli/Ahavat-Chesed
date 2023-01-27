var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materiaisSchema = new Schema({
    titulo: String,
    image: String,
    conteudoCurto: String,
    categoria: String,
    conteudo: String,
    url: String
}, { collection: 'materiais' })

var Materiais = mongoose.model('Materiais', materiaisSchema)

module.exports = Materiais;