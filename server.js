var http = require('http');
var test = require('monmodule'); // Call monmodule.js (subfolder node_modules)

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Salut tout le monde !");
});

server.listen(8080); // Start the server
