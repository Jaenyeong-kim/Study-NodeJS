var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port, function () {
  console.log('웹 서버 시작! ' + port)
});

var host = '192.168.0.5';
var port = 3000;

server.listen(port, host, '50000', function () {
  console.log('웹 서버 시작 %s %d', host, port);
});
