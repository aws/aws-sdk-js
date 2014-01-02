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

apiDir = __dirname + '/../../lib/services/api'
apiFiles = fs.readdirSync(apiDir)
apiFilesMap = {}
apiFiles.forEach (file) ->
  match = file.match(/^(.+?)-(.+)\.js$/)
  apiFilesMap[match[1]] = (apiFilesMap[match[1]] || []).concat(match[2])

module.exports =
  apiFiles: apiFiles
  apiFilesMap: apiFilesMap
  evalCode: evalCode
  stringstream: stringstream
