var express = require('express');
var app = express();

app.get('/beers', function (req, res) {
  console.log('Received request for beers from', req.ip)
  res.send('Hello beers');
});

app.get('/beer/:beerId', function (req, res) {
  console.log('Received request for '+req.params['beerId']+' from', req.ip)
  res.send('Hello beer '+req.params['beerId']);
});


app.use('/img', express.static('img'));
app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
