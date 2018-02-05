var http = require('http');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("Salut tout le monde !");
});

server.listen(8080); // Start the server

var game = new EventEmitter();

game.on('gameover', function(message) {
  console.log(message);
})

game.emit('gameover', 'vous avez perdu !');
