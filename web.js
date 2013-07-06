var express = require('express');

var app = express.createServer(express.logger());

var file_name = "index.html";
data = fs.readFileSync( this.dir + "/" + file_name );
app.get('/', function(request, response) {
  response.send('Hello World2!'+data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});