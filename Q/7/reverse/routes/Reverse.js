/*
 * Reverse
 */

var Reverse = function(data) {
  this.data = data;
  this.buf = new Buffer(data.length);
  this.buf.fill(0);
};

Reverse.prototype = {
  reverse: function() {
    for(var i = this.buf.length-1, j = 0; i > 0; i--, j++) {
      this.buf[j] = this.data[i];
    }
  },
  reverseLowUp: function (num) {
    var MASK_LOW = 0x0000000F;
  
    var low2up = ((num & MASK_LOW) << 4);
    var up2low = (num >>> 4);
    var revNum = (low2up | up2low);
  
    return revNum;
  }
};

module.exports = Reverse;
