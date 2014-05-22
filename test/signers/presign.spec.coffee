helpers = require('../helpers')
AWS = helpers.AWS
cw = new AWS.CloudWatch()

describe 'AWS.Signers.Presign', ->
  resultUrl = "https://monitoring.mock-region.amazonaws.com/?" +
    "Action=ListMetrics&Version=#{cw.api.apiVersion}&" +
    "X-Amz-Algorithm=AWS4-HMAC-SHA256&" +
    "X-Amz-Credential=akid%2F19700101%2Fmock-region%2Fmonitoring%2Faws4_request&" +
    "X-Amz-Date=19700101T000000Z&X-Amz-Expires=3600&X-Amz-Security-Token=session&" +
    "X-Amz-Signature=953bd6d74e86c12adc305f656473d614269d2f20a0c18c5edbb3d7f57ca2b439&" +
    "X-Amz-SignedHeaders=host"

  beforeEach ->
    spyOn(AWS.util.date, 'getDate').andReturn(new Date(0))

  it 'presigns requests', ->
    cw.listMetrics().presign (err, url) ->
      expect(url).toEqual(resultUrl)

  it 'presigns synchronously', ->
    expect(cw.listMetrics().presign()).toEqual(resultUrl)

  it 'allows specifying different expiry time', ->
    expect(cw.listMetrics().presign(900)).toMatch('X-Amz-Expires=900&')

  it 'limits expiry time to a week in SigV4', ->
    cw.listMetrics().presign 9999999, (err) ->
      expect(err.code).toEqual('InvalidExpiryTime')
      expect(err.message).toEqual(
        'Presigning does not support expiry time greater than a week with SigV4 signing.')

  it 'only supports s3 or v4 signers', ->
    new AWS.EC2().describeInstances().presign (err) ->
      expect(err.code).toEqual('UnsupportedSigner')
      expect(err.message).toEqual('Presigning only supports S3 or SigV4 signing.')
