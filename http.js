var http = require('http');

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8')
  res.on("data", function (data) {
    console.log(data)
  })
}).on('error', function(e) {
  console.log("Got error: " + e.message)
})

// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//  response.setEncoding('utf8')
//  response.on('data', console.log)
//  response.on('error', console.error)
// })
