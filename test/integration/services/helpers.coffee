AWS = require('../../../lib/aws')
config = new AWS.FileSystemConfig(__dirname + '/../../../configuration')

module.exports =
  AWS: AWS,
  config: config,
  integration: (reqBuilder, respCallback) ->
    req = reqBuilder()
    resp = null
    runs -> req.always (respObject) -> resp = respObject
    waitsFor -> resp != null
    runs -> respCallback(resp)
