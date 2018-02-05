var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Salut tout le monde !");
});

server.on('close', function() { // Listen to thye close event
  console.log('Bye bye !');
})

server.listen(8080); // Start the server

server.close() // Stop the server. Trigger the close event
