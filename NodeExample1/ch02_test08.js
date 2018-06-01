var path = require('path');

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);

console.log('문서 디렉토리: ' + docsDirectory);

var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일 패스: ', curPath);

var filename = "C://Users/mike/notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉토리: %s, 파일명: %s, 확장자: %s', dirname, basename, extname);
