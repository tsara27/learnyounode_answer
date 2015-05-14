var fs = require('fs');

str = fs.readFileSync(process.argv[2], { encoding: 'utf-8'});
arr = str.split('\n');
console.log(arr.length - 1);
