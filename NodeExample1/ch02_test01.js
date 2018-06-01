var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000; i++) {
  result += i;
}

console.timeEnd('duration_sum');
console.log('연산 시간: ' + result);

console.log('현재 실행한 파일명: ' + __filename);
console.log('현재 실행한 파일의 경로: ' + __dirname);

var Person = {
  name: "소녀시대",
  age: 20
};
console.log(Person);
