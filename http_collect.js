var http = require('http')
var arr = []

var req = http.get(process.argv[2], function(res) {
  res.setEncoding('utf8')
  res.on("data", function (data) {
    arr.push(data)
  })
  res.on('end', function() {
    console.log(arr.join('').length)
    console.log(arr.join(''))
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message)
})

// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//  response.pipe(bl(function (err, data) {
//    if (err)
//      return console.error(err)
//    data = data.toString()
//    console.log(data.length)
//    console.log(data)
//  }))
// })
