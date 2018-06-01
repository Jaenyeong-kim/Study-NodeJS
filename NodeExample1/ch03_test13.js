var Users = [{
  name: '소녀시대',
  age: 20
}, {
  name: '걸스데이',
  age: 22
}, {
  name: '티아라',
  age: 23
}];
console.log('delete() 호출 전 배열의 수: ' + Users.length);

delete Users[1];
console.log('delete 호출 후');
console.dir(Users);

Users.splice(1, 0, {
  name: '애프터스쿨',
  age: 25
});
console.log('splice()로 요소를 인덱스 1에 추가');
console.dir(Users);

Users.splice(2, 1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제');
console.dir(Users);
