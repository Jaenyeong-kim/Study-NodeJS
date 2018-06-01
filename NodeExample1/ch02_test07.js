var os = require('os');

console.log('hostname: ' + os.hostname);
console.log('memory: ' + os.freemem(), +" " + os.totalmem());
console.log('cpu: ');
console.dir(os.cpus());
console.log('network interface info: ');
console.dir(os.networkInterfaces());
