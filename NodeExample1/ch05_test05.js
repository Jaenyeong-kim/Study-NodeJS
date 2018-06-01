var http = require('http');
var fs = require('fs');

var server = http.createServer();

var port = 3000;
server.listen(port, function () {
  console.log('웹 서버 시작 ' + port);
});

server.on('connection', function (socket) {
  var addr = socket.address();
  console.log('클라이언트 접속: %s, %d', addr.address, addr.port);
});

server.on('request', function (req, res) {
  console.log('클라이언트 요청');

  var filename = 'house.png';
  fs.readFile(filename, function (err, data) {
    res.writeHead(200, {
      "Content-Type": "image/png"
    });
    res.write(data);
    res.end();
  });
});

server.on('close', function () {
  console.log('서버 종료');
});