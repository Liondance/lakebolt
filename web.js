//
// web.js
//

var
    express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https');

var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', function(request, response) {
  var data = fs.readFileSync('lakebolt.html').toString();
  response.send(data);
});

app.get('/consulting', function(request, response) {
  var data = fs.readFileSync('consulting.html').toString();
  response.send(data);
});

app.get('/contact', function(request, response) {
  var data = fs.readFileSync('contact.html').toString();
  response.send(data);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
