var http = require('http')
var port = process.argv[2]
var file = process.argv[3]
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var read_file = fs.createReadStream(file)
  read_file.pipe(res)
})
server.listen(port)

// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//  res.writeHead(200, { 'content-type': 'text/plain' })
//
//  fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
