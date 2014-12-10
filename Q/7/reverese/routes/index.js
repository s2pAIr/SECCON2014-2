
/*
 * GET home page.
 */

var fs = require('fs');
var Reverese = require('./Reverese');
var inFileName = 'c:/tmp/Revit';
var outFileName = 'c:/tmp/dump';
var result = [];

fs.readFile(inFileName, function(err, data) {
  if(err) {
    throw err;
  } else {
    var rev = new Reverese(data);
    rev.reverese();
    for(var i = 0; i < rev.buf.length; i++) {
      rev.buf[i] = rev.revereseLowUp(rev.buf[i]);
      result.push(rev.buf[i]);
    }
    fs.writeFile(outFileName, rev.buf, function(err) {
      if(err) {
        throw err;
      } else {
        console.log("Reverese ended.");
      }
    });
  }
});

exports.index = function(req, res){
  res.render('index', { title: result });
};
