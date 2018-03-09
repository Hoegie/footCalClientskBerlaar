var http = require('http');
var sourcefile = require('./footcal.js');

var app = sourcefile.exportapp;

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});