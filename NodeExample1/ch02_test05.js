var calc = require('./calc');
console.log('모듈 분리 후 결과: ' + calc.add(10, 20));

var calc2 = require('./calc2');
console.log('모듈 분리 후 결과2: ' + calc2.add(10, 25));
