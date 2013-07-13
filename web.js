var express = require('express');

var app = express.createServer(express.logger());

var indexfile = fs.readFile('index.html');

var buffer = new Buffer(indexfile);

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
