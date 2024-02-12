var createError = require('html-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World v2.0')
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});

