var express = require('express');

var app = express.createServer(express.logger());

var file_name = "index.html";
text = fs.readFileSync( file_name ).toString();

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});