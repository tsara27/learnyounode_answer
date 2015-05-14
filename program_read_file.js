var fs = require('fs');

fs.readFile(process.argv[2], { encoding: 'utf-8'}, function(err, data){
  if (err) throw err;
  arr = data.split('\n');
  console.log(arr.length - 1);
});
