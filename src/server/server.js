var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.send('سلام');
});


app.listen(8000);
