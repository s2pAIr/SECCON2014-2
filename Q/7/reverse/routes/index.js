
/*
 * GET home page.
 */

var fs = require('fs');
var Reverse = require('./Reverse');
var inFileName = 'c:/tmp/Reverseit';
var outFileName = 'c:/tmp/dump';
var result = [];

fs.readFile(inFileName, function(err, data) {
  if(err) {
    throw err;
  } else {
    var rev = new Reverse(data);
    rev.reverse();
    for(var i = 0; i < rev.buf.length; i++) {
      rev.buf[i] = rev.reverseLowUp(rev.buf[i]);
      result.push(rev.buf[i]);
    }
    fs.writeFile(outFileName, rev.buf, function(err) {
      if(err) {
        throw err;
      } else {
        console.log("Reverse ended.");
      }
    });
  }
});

exports.index = function(req, res){
  res.render('index', { title: result });
};
