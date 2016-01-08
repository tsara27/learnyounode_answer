var filtering = require('./filter_module');
var dir = process.argv[2];
var ext = process.argv[3];

filtering(dir, ext, function(err, data) {
  if(err) {
    console.log("There's error");
  } else {
    data.forEach(function (file) {
      console.log(file);
    });
  };
});
