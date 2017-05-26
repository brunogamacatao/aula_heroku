var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
  nome:  String,
  valor: Number
});

var Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;