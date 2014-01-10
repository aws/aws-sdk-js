through = require('through')
fs = require('fs')

stringstream = ->
  s = through (buf) -> @data = (@data || '') + buf
  s._stringstream = true
  s.data = ''
  s

evalCode = (code, preamble) ->
  eval """
    (function() {
      var window = {};
      #{preamble};
      return #{code};
    })();
  """

module.exports =
  AWS: require('../../lib/aws')
  evalCode: evalCode
  stringstream: stringstream
