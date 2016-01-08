var http = require('http')
var arr = []
var urls = process.argv.slice(2, 5)
var counter = 0

urls.forEach(function(url, index) {
  http.get(url, function(res) {
    res.setEncoding('utf8')
    res.on("data", function (data) {
      arr[index] += data.toString()
    })
    res.on('end', function() {
      counter++
      if(counter === urls.length) {
        new_arr = arr.join('')
        splitted = new_arr.split('undefined')
        splitted.slice(1,5).forEach(function(text) {
          console.log(text)
        })
      }
    })
  }).on('error', function(e) {
    console.log("Got error: " + e.message)
  })
})


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//  for (var i = 0; i < 3; i++)
//    console.log(results[i])
// }
//
// function httpGet (index) {
//  http.get(process.argv[2 + index], function (response) {
//    response.pipe(bl(function (err, data) {
//      if (err)
//        return console.error(err)
//
//      results[index] = data.toString()
//      count++
//
//      if (count == 3)
//        printResults()
//    }))
//  })
// }
//
// for (var i = 0; i < 3; i++)
//  httpGet(i)
