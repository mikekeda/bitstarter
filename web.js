var express = require('express');

var app = express.createServer(express.logger());

var file_name = "index.html";
data = fs.readFileSync( this.dir + "/" + file_name );
data = data.buf.toString();

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});