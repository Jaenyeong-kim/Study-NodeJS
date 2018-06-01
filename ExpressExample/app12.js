var express = require('express'),
  http = require('http'),
  path = require('path'),
  expressErrorHandler = require('express-error-handler'),
  cookieParser = require('cookie-parser'),
  expressSession = require('express-session');

var bodyParser = require('body-parser'),
  static = require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(expressSession({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}));

var router = express.Router();

router.route('/process/product').get(function (req, res) {
  console.log('/process/product 호출');

  if (req.session.user) {
    res.redirect('/product.html');
  } else {
    res.redirect('/login2.html');
  }
});

router.route('/process/login').post(function (req, res) {
  console.log('/process/login 호출');

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  if (req.session.user) {
    console.log('이미 로그인 되어 있는 상품 페이지로 이동');
    res.redirect('/product.html');
  } else {
    req.session.user = {
      id: paramId,
      name: '소녀시대',
      authorized: true
    };

    res.writeHead('200', {
      'Content-Type': 'text/html;charset=utf8'
    });
    res.write('<h1>로그인 성공.</h1>');
    res.write('<div><p>Param id : ' + paramId + ' </p></div>');
    res.write('<div><p>Param password : ' + paramPassword + ' </p></div>');
    res.write("<br><br><a href='/process/product'>상품 페이지로 이동</a>");
    res.end();
  }
});

router.route('/process/logout').get(function (req, res) {
  console.log('/process/logout 호출');

  if (req.session.user) {
    console.log('로그아웃');
    
    req.session.destory(function(err) {
      if (err) {throw err};
      
      console.log('세션을 삭제하고 로그아웃 되었습니다.');
      res.redirect('/public/login2.html');
    });
  } else {
    console.log('로그인이 되어 있지 않음');
    
    res.redirect('/public/login2.html');
  }
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
