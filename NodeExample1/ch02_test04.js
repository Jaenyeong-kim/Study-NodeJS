var calc = {};

calc.add = function (a, b) {
  return a + b;
}

console.log('모듈 분리 전 결과: ' + calc.add(10, 10));
