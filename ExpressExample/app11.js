var express = require('express'),
  http = require('http'),
  path = require('path'),
  expressErrorHandler = require('express-error-handler');

var bodyParser = require('body-parser'),
  static = require('serve-static');

var cookieParser = require('cookie-parser');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

app.use(cookieParser());

var router = express.Router();

router.route('/process/showCookie').get(function (req, res) {
  console.log('/process/showCookie 호출');

  res.send(req.cookies);
});

router.route('/process/setUserCookie').get(function (req, res) {
  console.log('/process/setUserCookie 호출');

  res.cookie('user', {
    id: 'mike',
    name: '소녀시대',
    authorized: true
  });

  res.redirect('/process/showCookie');
});

app.use('/', router);

var errorHandler = expressErrorHandler({
  static: {
    '404': './public/404.html'
  }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

app.all('*', function (req, res) {
  res.status(404).send('<h1>ERROR 페이지를 찾을 수 없습니다.</h1>');
});

http.createServer(app).listen(3000, function () {
  console.log('Express 서버가 3000번 포트에서 시작');
});
