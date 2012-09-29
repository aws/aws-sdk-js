sync = (code, finished) ->
  resp = null
  runs ->
    code() ->
      resp = arguments
  waitsFor -> resp != null
  runs -> finished(resp)

integration = (reqBuilder, respCallback) ->
  req = reqBuilder()
  resp = null
  runs -> req.always (respObject) -> resp = respObject
  waitsFor -> resp != null
  runs -> respCallback(resp)

module.exports =
  AWS: require('../lib/aws')
  sync: sync
  integration: integration

