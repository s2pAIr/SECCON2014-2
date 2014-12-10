
/*
 * GET home page.
 */

var fs = require('fs');
var inFileName = 'c:/tmp/Revit';
var outFileName = 'c:/tmp/dump';
var result = [];

function revereseLowUp(num) {
  var MASK_LOW = 0x0000000F;
  
  var low2up = ((num & MASK_LOW) << 4);
  var up2low = (num >>> 4);
  var revNum = (low2up | up2low);
  
  return revNum;
};

fs.readFile(inFileName, function(err, data) {
  if(err) {
    throw err;
  } else {
    var tmpBuf = new Buffer(data);
    var revBuf = new Buffer(data);
    for(var i = tmpBuf.length-1, j = 0; i > 0; i--, j++) {
      tmpBuf[j] = data[i];
    }
    for(var i = 0; i < revBuf.length; i++) {
      revBuf[i] = revereseLowUp(tmpBuf[i]);
      result.push(revBuf[i]);
    }
    fs.writeFile(outFileName, revBuf, function(err) {
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