'use strict';

var http = require('http')
var url = require('url')
var port = process.argv[2]

var server = http.createServer(function (req, res) {
  var baseURI = url.parse(req.url, true)
  var queryParams = baseURI.query
  if(req.method === 'GET') {
    var date = new Date(queryParams['iso'])
    res.writeHead(200, {'Content-type': 'application/json'})
    switch (baseURI.pathname) {
      case '/api/parsetime':
        var result = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}
        res.end(JSON.stringify(result))
        break;
      case '/api/unixtime':
        var result = {'unixtime': date.getTime()}
        res.end(JSON.stringify(result))
        break;
      default:

    }
  } else {
    console.log('Cannot accept request!')
  }
})
server.listen(port)

// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//  return {
//    hour: time.getHours(),
//    minute: time.getMinutes(),
//    second: time.getSeconds()
//  }
// }
//
// function unixtime (time) {
//  return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
// var parsedUrl = url.parse(req.url, true)
// var time = new Date(parsedUrl.query.iso)
// var result
//
// if (/^\/api\/parsetime/.test(req.url))
//  result = parsetime(time)
// else if (/^\/api\/unixtime/.test(req.url))
//  result = unixtime(time)
//
// if (result) {
//  res.writeHead(200, { 'Content-Type': 'application/json' })
//  res.end(JSON.stringify(result))
// } else {
//  res.writeHead(404)
//  res.end()
// }
// })
// server.listen(Number(process.argv[2]))
