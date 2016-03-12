// Magic 8 ball
var express = require('express');
var app = express();
var port = 9001;
var bodyParser = require('body-parser');
var eightBall = require('./controllers/eight-ball');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/fortune', eightBall.fortune);

app.listen(port, function (e) {
  if (e) return console.error(e);
  console.log('Now listening on port:', port)
})
