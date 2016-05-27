'use strict'

var express    = require('express')
var app        = express()

app.use(express.static('public'))           // Setup static file server

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})