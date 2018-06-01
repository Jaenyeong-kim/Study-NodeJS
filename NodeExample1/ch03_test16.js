function add(a, b, callback) {
  var result = a + b;
  callback(result);

  var history = function () {
    return a + ' + ' + b + ' = ' + result;
  }

  return history;
}

var add_history = add(10, 10, function (result) {
  console.log('파라미터로 전달된 콜백함수 호출');
  console.log('더하기 (10, 10) 결과: ');
});

console.log('결과 값으로 받은 함수 실행 결과: ' + add_history());
