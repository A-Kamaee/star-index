const env = process.env;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health', function(req, res) {
  res.status(200).send();
});

app.listen(env.NODE_PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});