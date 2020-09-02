var fs = require('fs');

var evalCode = function(code, preamble) {
  return eval('(function() {\n  var window = global;\n  ' + preamble + ';\n  return ' + code + ';\n})();');
};

module.exports = {
  AWS: require('../../'),
  build: require('../browser-builder'),
  collector: require('../service-collector'),
  chai: require('chai'),
  evalCode: evalCode
};
