var fs = require('fs');
path = require('path')
loc = process.argv[2];
ext = "."+process.argv[3];

fs.readdir(loc, function(err, files) {
  if (err) throw err;
  for (i = 0; i < files.length; i++) {
    location = loc + files[i];
    if (path.extname(files[i]) === ext) {
      console.log(files[i]);
    }
  }

});
