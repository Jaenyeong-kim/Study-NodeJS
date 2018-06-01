var Users = [{
  name: '소녀시대',
  age: 20
}, {
  name: '걸스데이',
  age: 22
}];
console.log('push() 호출 전 배열의 수: ' + Users.length);

Users.push({
  name: '티아라',
  age: 23
});
console.log('push() 호출 후 배열의 수: ' + Users.length);

Users.pop();
console.log('pop() 호출 후 배열의 수: ' + Users.length);
