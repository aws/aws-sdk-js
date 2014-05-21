helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.Signers.Presign', ->
  it 'presigns requests', ->
    spyOn(AWS.util.date, 'getDate').andReturn(new Date(0))
    resultUrl = 'https://monitoring.mock-region.amazonaws.com/?' +
      'Action=ListMetrics&Version=2010-08-01&' +
      'X-Amz-Algorithm=AWS4-HMAC-SHA256&' +
      'X-Amz-Credential=akid%2F19700101%2Fmock-region%2Fmonitoring%2Faws4_request&' +
      'X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&' +
      'X-Amz-SignedHeaders=host&' +
      'X-Amz-Signature=737f3a09adc9c334cf9fbee99c339dac34a0054dbc10d7aa4b5a3cc6e1c7cf28'
    cw = new AWS.CloudWatch()
    cw.listMetrics().presign (err, url) ->
      expect(url).toEqual(resultUrl)
