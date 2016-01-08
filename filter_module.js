var fs = require('fs');
var path = require('path');
var arr = [];

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      return callback(err);
    } else {
      for (i = 0; i < files.length; i++) {
        location = dir + files[i];
        if (path.extname(files[i]) === '.' + ext) {
          arr.push(files[i]);
        }
      }
      return callback(null, arr);
    }
  });
};

// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
