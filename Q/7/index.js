
/*
 * GET home page.
 */

var fs = require('fs');
var inFileName = 'c:/tmp/Revit';
var outFileName = 'c:/tmp/dump';
var result = [];

fs.readFile(inFileName, {encoding:"binary"}, function(err, data) {
  if(err) {
    throw err;
  } else {
    var buf = new Buffer(data);
    for(var i = data.length, j = 0; i > 0; i--, j++) {
      buf[j] = data[i];
    }
    for(var i = 0, j = 1; i < buf.length; i++, j++) {
      var tmp = [];
      tmp[0] = buf[i];
      buf[i] = buf[j];
      buf[j] = tmp[0];
    }
    fs.writeFile(outFileName, buf, {encoding:"binary"}, function(err) {
      if(err) {
        throw err;
      } else {
        console.log("Reverese ended.");
      }
    });
  }
});


/*
fs.open(inFileName, 'r', function(err, fd) {
  if(err) {
    throw err;
  } else {
    console.log('"' + inFileName + '" opened.');
    fs.read(fd, new Buffer(2048), 0, 1, 0, function(err, bytesRead, buffer) {
      if(err) {
        throw err;
      } else {
        console.log("bytesRead: " + bytesRead);
        console.log("buffer: " + buffer);
      }
    });
  }
});
*/

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};