fs = require('fs')

evalCode = (code, preamble) ->
  eval """
    (function() {
      var window = global;
      #{preamble};
      return #{code};
    })();
  """

module.exports =
  AWS: require('../../')
  collector: require('../service-collector')
  chai: require('chai')
  evalCode: evalCode
