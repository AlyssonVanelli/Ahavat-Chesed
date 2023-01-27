var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destaqueSchema = new Schema({
    titulo:String,
    image:String,
    url:String,
},{collection:'destaques'})

var Destaques = mongoose.model('Destaques',destaqueSchema)

module.exports = Destaques;