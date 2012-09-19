AWS = require('../../../lib/aws')
AWS.configuration = new AWS.FileSystemConfig(__dirname + '/../../../configuration')

module.exports =
  AWS: AWS,
  integration: (reqBuilder, respCallback) ->
    req = reqBuilder()
    resp = null
    runs -> req.always (respObject) -> resp = respObject
    waitsFor -> resp != null
    runs -> respCallback(resp)
