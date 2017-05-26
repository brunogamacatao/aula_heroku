var mongoose = require('mongoose');

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/produtos', require('./routes/produtos'));

if (process.argv[2] === 'PROD') {
  console.log('Produção');
  mongoose.connect('mongodb://ds155651.mlab.com:55651/heroku_b5vpklrr');
} else {
  console.log('Desenvolvimento');
  mongoose.connect('mongodb://localhost/produtos');
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


