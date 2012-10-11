helpers = require('./helpers'); AWS = helpers.AWS

describe 'AWS.EC2', ->

  service = new AWS.EC2()

  it 'should send a request with parameters', ->

    # limit the list of regions returned with this filter
    params = { RegionNames: ['us-east-1', 'us-west-1'] }

    helpers.integration (-> service.describeRegions(params)), (resp) ->
      expect(resp.error).toEqual(null)
      expect(resp.data.Regions).toEqual([
        { RegionName: 'us-east-1', Endpoint: 'ec2.us-east-1.amazonaws.com' },
        { RegionName: 'us-west-1', Endpoint: 'ec2.us-west-1.amazonaws.com' },
      ])

  it 'should returns client errors', ->

    params = { InstanceIds : ['i-12345678'] }

    helpers.integration (-> service.describeInstances(params)), (resp) ->
      expect(resp.data).toEqual(null)
      expect(resp.error).toEqual(
        code : 'InvalidInstanceID.NotFound',
        message : "The instance ID 'i-12345678' does not exist",
        statusCode : 400,
        retryable : false
      )

