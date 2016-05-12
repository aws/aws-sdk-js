helpers = require('./helpers')
AWS = helpers.AWS
config = {}
try
  config = require('./configuration')

acm = new AWS.ACM(AWS.util.merge(config, config.acm))
apigateway = new AWS.APIGateway(AWS.util.merge(config, config.apigateway))
cloudfront = new AWS.CloudFront(AWS.util.merge(config, config.cloudfront))
cloudtrail = new AWS.CloudTrail(AWS.util.merge(config, config.cloudtrail))
cloudwatch = new AWS.CloudWatch(AWS.util.merge(config, config.cloudwatch))
cloudwatchlogs = new AWS.CloudWatchLogs(AWS.util.merge(config, config.cloudwatchlogs))
cloudwatchevents = new AWS.CloudWatchEvents(AWS.util.merge(config, config.cloudwatchevents))
cognitoidentity = new AWS.CognitoIdentity(AWS.util.merge(config, config.cognitoidentity))
configservice = new AWS.ConfigService(AWS.util.merge(config, config.configservice))
codecommit = new AWS.CodeCommit(AWS.util.merge(config, config.codecommit))
codepipeline = new AWS.CodePipeline(AWS.util.merge(config, config.codepipeline))
cognitosync = new AWS.CognitoSync(AWS.util.merge(config, config.cognitosync))
devicefarm = new AWS.DeviceFarm(AWS.util.merge(config, config.devicefarm))
directconnect = new AWS.DirectConnect(AWS.util.merge(config, config.directconnect))
dynamodb = new AWS.DynamoDB(AWS.util.merge(config, config.dynamodb))
dynamodbstreams = new AWS.DynamoDBStreams(AWS.util.merge(config, config.dynamodbstreams))
ec2 = new AWS.EC2(AWS.util.merge(config, config.ec2))
ecr = new AWS.ECR(AWS.util.merge(config, config.ecr))
ecs = new AWS.ECS(AWS.util.merge(config, config.ecs))
elastictranscoder = new AWS.ElasticTranscoder(AWS.util.merge(config, config.elastictranscoder))
elb = new AWS.ELB(AWS.util.merge(config, config.elb))
firehose = new AWS.Firehose(AWS.util.merge(config, config.firehose))
gamelift = new AWS.GameLift(AWS.util.merge(config, config.gamelift))
config.inspector = config.inspector || {}
config.inspector.region = 'us-west-2'
inspector = new AWS.Inspector(AWS.util.merge(config, config.inspector))
kinesis = new AWS.Kinesis(AWS.util.merge(config, config.kinesis))
kms = new AWS.KMS(AWS.util.merge(config, config.kms))
lambda = new AWS.Lambda(AWS.util.merge(config, config.lambda))
mobileanalytics = new AWS.MobileAnalytics(AWS.util.merge(config, config.mobileanalytics))
machinelearning = new AWS.MachineLearning(AWS.util.merge(config, config.machinelearning))
opsworks = new AWS.OpsWorks(AWS.util.merge(config, config.opsworks))
rds = new AWS.RDS(AWS.util.merge(config, config.rds))
route53 = new AWS.Route53(AWS.util.merge(config, config.route53))
route53domains = new AWS.Route53Domains(AWS.util.merge(config, config.route53domains))
s3 = new AWS.S3(AWS.util.merge(config, config.s3))
ses = new AWS.SES(AWS.util.merge(config, config.ses))
sns = new AWS.SNS(AWS.util.merge(config, config.sns))
sqs = new AWS.SQS(AWS.util.merge(config, config.sqs))
ssm = new AWS.SSM(AWS.util.merge(config, config.ssm))
storagegateway = new AWS.StorageGateway(AWS.util.merge(config, config.storagegateway))
sts = new AWS.STS(AWS.util.merge(config, config.sts))
waf = new AWS.WAF(AWS.util.merge(config, config.waf))

uniqueName = (prefix) ->
  if prefix
    prefix + '-' + AWS.util.date.getDate().getTime()
  else
    AWS.util.date.getDate().getTime().toString()

eventually = (condition, next, done) ->
  options = delay: 0, backoff: 500, maxTime: 10
  delay = options.delay
  started = AWS.util.date.getDate()
  id = 0
  nextFn = ->
    now = AWS.util.date.getDate()
    if (now - started < options.maxTime * 1000)
      next (err, data) ->
        if condition(err, data)
          done(err, data)
        else
          timeoutFn = ->
            clearInterval(id)
            delay += options.backoff
            nextFn()
          id = setInterval(timeoutFn, delay)
  nextFn()

noError = (err) -> expect(err).to.equal(null)
noData = (data) -> expect(data).to.equal(null)
assertError = (err, code) -> expect(err.code).to.equal(code)
matchError = (err, message) ->
  expect(! !err.message.match(new RegExp(message, 'gi'))).to.eql(true)

integrationTests = (fn) ->
  if config.accessKeyId and AWS.util.isBrowser()
    describe 'Integration tests', fn

integrationTests ->
  describe 'Request.abort', ->
    it 'can abort a request', (done) ->
      req = s3.putObject Key: 'key', Body: 'body'
      req.on 'send', (resp) -> resp.request.abort()
      req.send (err) ->
        expect(err.name).to.equal('RequestAbortedError')
        done()

  describe 'XHR', ->
    it 'does not emit http events if networking issue occurs', (done) ->
      err = null
      httpHeaders = false; httpData = false; httpError = false; httpDone = false
      svc = new AWS.S3(accessKeyId: 'akid', secretAccessKey: 'secret', maxRetries: 0)
      date = AWS.util.date.iso8601().replace(/[^0-9]/g,'')
      req = svc.getObject(Bucket:'invalidbucket' + date, Key: 'foo')
      req.on 'httpHeaders', -> httpHeaders = true
      req.on 'httpData', -> httpData = true
      req.on 'httpDone', -> httpDone = true
      req.on 'httpError', -> httpError = true
      req.send (err) ->
        expect(httpHeaders).to.equal(false)
        expect(httpData).to.equal(false)
        expect(httpDone).to.equal(false)
        expect(httpError).to.equal(true)
        expect(err.name).to.equal('NetworkingError')
        done()

    it 'can send synchronous requests', (done) ->
      key = uniqueName('test')
      opts = AWS.util.merge(config, config.s3)
      opts.httpOptions = xhrAsync: false
      svc = new AWS.S3(opts)
      resp1 = svc.putObject(Key: key, Body: 'body').send()
      resp2 = svc.getObject(Key: key).send()
      expect(resp2.data.Body.toString()).to.equal('body')
      svc.deleteObject(Key: key).send()
      done()

    it 'lower cases HTTP headers', ->
      rawHeaders =
      """
      x-amzn-Foo: foo
      x-amzn-Bar: bar
      """
      client = new AWS.XHRClient()
      headers = client.parseHeaders(rawHeaders)
      expect(headers['x-amzn-foo']).to.equal('foo')
      expect(headers['x-amzn-bar']).to.equal('bar')

  describe 'AWS.ACM', ->
    it 'makes a request', (done) ->
      acm.listCertificates {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.CertificateSummaryList)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        CertificateArn: 'fake-arn'
      acm.describeCertificate params, (err, data) ->
        assertError(err, 'ValidationException')
        noData(data)
        done()

  describe 'AWS.APIGateway', ->
    it 'makes a request', (done) ->
      apigateway.getRestApis {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.items)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        restApiId: 'fake-id'
      apigateway.getRestApi params, (err, data) ->
        assertError(err, 'NotFoundException')
        noData(data)
        done()

  describe 'AWS.CloudFront', ->
    it 'makes a request', (done) ->
      cloudfront.listDistributions {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.DistributionList.Items)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        Id: 'fake-distro'
      cloudfront.getDistribution params, (err, data) ->
        assertError(err, 'NoSuchDistribution')
        noData(data)
        done()

  describe 'AWS.CloudTrail', ->
    it 'makes a request', (done) ->
      cloudtrail.listPublicKeys (err, data) ->
        noError(err)
        expect(Array.isArray(data.PublicKeyList)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      cloudtrail.listTags {ResourceIdList: ['fake-arn']}, (err, data) ->
        noData(data)
        assertError(err, 'CloudTrailARNInvalidException')
        done()

  describe 'AWS.CloudWatch', ->
    it 'makes a request', (done) ->
      cloudwatch.listMetrics (err, data) ->
        noError(err)
        expect(Array.isArray(data.Metrics)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        AlarmName: 'abc'
        StateValue: 'efg'
        StateReason: 'xyz'
      cloudwatch.setAlarmState params, (err, data) ->
        assertError(err, 'ValidationError')
        matchError(err, 'failed to satisfy constraint')
        noData(data)
        done()

  describe 'AWS.CloudWatchEvents', ->
    it 'makes a request', (done) ->
      cloudwatchevents.listRules (err, data) ->
        noError(err)
        expect(Array.isArray(data.Rules)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        Name: 'fake-rule'
      cloudwatchevents.describeRule params, (err, data) ->
        assertError(err, 'ResourceNotFoundException')
        noData(data)
        done()

  describe 'AWS.CloudWatchLogs', ->
    it 'makes a request', (done) ->
      cloudwatchlogs.describeLogGroups (err, data) ->
        noError(err)
        expect(Array.isArray(data.logGroups)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        logGroupName: 'fake-group'
        logStreamName: 'fake-stream'
      cloudwatchlogs.getLogEvents params, (err, data) ->
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'The specified log group does not exist')
        noData(data)
        done()

    describe 'AWS.CodeCommit', ->
      it 'makes a request', (done) ->
        codecommit.listRepositories {}, (err, data) ->
          noError(err)
          expect(Array.isArray(data.repositories)).to.equal(true)
          done()

      it 'handles errors', (done) ->
        params =
          repositoryName: 'fake-repo'
        codecommit.listBranches params, (err, data) ->
          assertError(err, 'RepositoryDoesNotExistException')
          noData(data)
          done()

  describe 'AWS.CodePipeline', ->
    it 'makes a request', (done) ->
      codepipeline.listPipelines {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.pipelines)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        name: 'fake-pipeline'
      codepipeline.getPipeline params, (err, data) ->
        assertError(err, 'PipelineNotFoundException')
        noData(data)
        done()

  describe 'AWS.CognitoIdentity', ->
    it 'makes a request', (done) ->
      cognitoidentity.listIdentityPools MaxResults: 10, (err, data) ->
        noError(err)
        expect(Array.isArray(data.IdentityPools)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        IdentityPoolId: 'us-east-1:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
      cognitoidentity.describeIdentityPool params, (err, data) ->
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'IdentityPool \'us-east-1:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee\' not found')
        noData(data)
        done()

  describe 'AWS.CognitoSync', ->
    it 'makes a request', (done) ->
      cognitosync.listIdentityPoolUsage (err, data) ->
        noError(err)
        expect(Array.isArray(data.IdentityPoolUsages)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        IdentityPoolId: 'us-east-1:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
      cognitosync.describeIdentityPoolUsage params, (err, data) ->
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'IdentityPool \'us-east-1:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee\' not found')
        noData(data)
        done()

  describe 'AWS.ConfigService', ->
    it 'makes a request', (done) ->
      configservice.describeDeliveryChannels {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.DeliveryChannels)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        DeliveryChannel: {name: ''}
      configservice.putDeliveryChannel params, (err, data) ->
        assertError(err, 'ValidationException')
        noData(data)
        done()

  describe 'AWS.DeviceFarm', ->
    it 'makes a request', (done) ->
      devicefarm.listDevices (err, data) ->
        noError(err)
        expect(Array.isArray(data.devices)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        arn: 'arn:aws:devicefarm:us-west-2::device:00000000000000000000000000000000'
      devicefarm.getDevice params, (err, data) ->
        assertError(err, 'NotFoundException')
        matchError(err, 'No device was found for arn arn:aws:devicefarm:us-west-2::device:00000000000000000000000000000000')
        noData(data)
        done()

  describe 'AWS.DirectConnect', ->
    it 'makes a request', (done) ->
      directconnect.describeConnections (err, data) ->
        noError(err)
        expect(Array.isArray(data.connections)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        connectionId: 'dxcon-fakeconn'
      directconnect.confirmConnection params, (err, data) ->
        assertError(err, 'DirectConnectClientException')
        matchError(err, 'ConfirmConnection failed. dxcon-fakeconn doesn\'t exist.')
        noData(data)
        done()

  describe 'AWS.DynamoDB', ->
    it 'writes and reads from a table', (done) ->
      key = uniqueName('test')
      dynamodb.putItem {Item: {id: {S: key}, data: {S: 'ƒoo'}}}, (err, data) ->
        noError(err)
        dynamodb.getItem {Key: {id: {S: key}}}, (err, data) ->
          noError(err)
          expect(data.Item.data.S).to.equal('ƒoo')
          dynamodb.deleteItem({Key: {id: {S: key}}}).send(done)

    it 'handles errors', (done) ->
      dynamodb.describeTable {TableName: 'fake-table'}, (err, data) ->
        noData(data)
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'Requested resource not found: Table: fake-table not found')
        done()

  describe 'AWS.DynamoDBStreams', ->
    it 'makes a request', (done) ->
      dynamodbstreams.listStreams (err, data) ->
        noError(err)
        expect(Array.isArray(data.Streams)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      params =
        StreamArn: 'fake-stream'
      dynamodbstreams.describeStream params, (err, data) ->
        assertError(err, 'ValidationException')
        matchError(err, 'Invalid StreamArn')
        noData(data)
        done()

  describe 'AWS.EC2', ->
    it 'makes a request', (done) ->
      ec2.describeInstances (err, data) ->
        noError(err)
        expect(Array.isArray(data.Reservations)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      ec2.deleteVolume {VolumeId: 'vol-12345678'}, (err, data) ->
        noData(data)
        assertError(err, 'InvalidVolume.NotFound')
        matchError(err, 'The volume \'vol-12345678\' does not exist')
        done()

  describe 'AWS.ECR', ->
    it 'makes a request', (done) ->
      ecr.describeRepositories (err, data) ->
        noError(err)
        expect(Array.isArray(data.repositories)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      ecr.listImages {repositoryName: 'fake-name'}, (err, data) ->
        noData(data)
        assertError(err, 'RepositoryNotFoundException')
        done()

  describe 'AWS.ECS', ->
    it 'makes a request', (done) ->
      ecs.listClusters {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.clusterArns)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      ecs.stopTask {task: 'xxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxx'}, (err, data) ->
        assertError(err, 'ClusterNotFoundException')
        noData(data)
        done()

  describe 'AWS.ElasticTranscoder', ->
    it 'makes a request', (done) ->
      elastictranscoder.listPipelines (err, data) ->
        noError(err)
        expect(Array.isArray(data.Pipelines)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      elastictranscoder.readJob {Id: '3333333333333-abcde3'}, (err, data) ->
        noData(data)
        assertError(err, 'ResourceNotFoundException')
        done()

  describe 'AWS.ELB', ->
    it 'makes a request', (done) ->
      elb.describeLoadBalancers {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.LoadBalancerDescriptions)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      elb.describeTags {LoadBalancerNames: ['fake-name']}, (err, data) ->
        assertError(err, 'LoadBalancerNotFound')
        noData(data)
        done()

  describe 'AWS.Firehose', ->
    it 'makes a request', (done) ->
      firehose.listDeliveryStreams {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.DeliveryStreamNames)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      firehose.describeDeliveryStream {DeliveryStreamName: 'fake-name'}, (err, data) ->
        assertError(err, 'ResourceNotFoundException')
        noData(data)
        done()

  describe 'AWS.GameLift', ->
    it 'makes a request', (done) ->
      gamelift.listBuilds {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.Builds)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      gamelift.describeAlias {AliasId: 'fake-id'}, (err, data) ->
        assertError(err, 'InvalidRequestException')
        noData(data)
        done()

  describe 'AWS.Inspector', ->
    it 'makes a request', (done) ->
      inspector.listRulesPackages (err, data) ->
        noError(err)
        expect(Array.isArray(data.rulesPackageArns)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      inspector.stopAssessmentRun {assessmentRunArn: 'fake-arn'}, (err, data) ->
        noData(data)
        assertError(err, 'InvalidInputException')
        done()

  describe 'AWS.Kinesis', ->
    it 'makes a request', (done) ->
      kinesis.listStreams (err, data) ->
        noError(err)
        expect(Array.isArray(data.StreamNames)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      kinesis.describeStream {StreamName: 'fake-stream'}, (err, data) ->
        noData(data)
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'Stream fake-stream under account')
        done()

  describe 'AWS.KMS', ->
    it 'lists keys', (done) ->
      kms.listKeys (err, data) ->
        noError(err)
        expect(Array.isArray(data.Keys)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      kms.createAlias {AliasName: 'fake-alias', TargetKeyId: 'non-existent'}, (err, data) ->
        noData(data)
        assertError(err, 'ValidationException')
        done()

  describe 'AWS.Lambda', ->
    it 'makes a request', (done) ->
      lambda.listFunctions (err, data) ->
        noError(err)
        expect(Array.isArray(data.Functions)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      lambda.invoke {FunctionName: 'fake-function'}, (err, data) ->
        noData(data)
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'function not found')
        done()

  describe 'AWS.MobileAnalytics', ->
    it 'makes a request', (done) ->
      params =
        'events': [ {
          'eventType': '_session.start'
          'timestamp': '2015-03-19T17:32:40.577Z'
          'session':
            'id': '715fc007-8c32-1e50-0cf2-c45311393281'
          'startTimestamp': '2015-03-19T17:32:40.560Z'
          'version': 'v2.0'
          'attributes': {}
          'metrics': {}
        } ]
        'clientContext': '{"client":{"client_id":"b4a5edf7-fbd4-6e8f-e0ba-8a5632c76191"},"env":{"platform":""},"services":{"mobile_analytics":{"app_id":"f94b9f4fd5004f94a31b66187a227610","sdk_name":"aws-sdk-mobile-analytics-js","sdk_version":"0.9.0"}},"custom":{}}'
      mobileanalytics.putEvents params, (err, data) ->
        noError(err)
        done()

    it 'handles errors', (done) ->
      params =
        'events': [ {
          'eventType': 'test'
          'timestamp': 'test'
        } ]
        'clientContext': 'test'
      mobileanalytics.putEvents params, (err, data) ->
        noData(data)
        assertError(err, 'BadRequestException')
        matchError(err, 'Client context is malformed or missing')
        done()

  describe 'AWS.MachineLearning', ->
    it 'makes a request', (done) ->
      machinelearning.describeMLModels (err, data) ->
        noError(err)
        expect(Array.isArray(data.Results)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      machinelearning.getBatchPrediction {BatchPredictionId: 'fake-id'}, (err, data) ->
        noData(data)
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'No BatchPrediction with id fake-id exists')
        done()

  describe 'AWS.OpsWorks', ->
    it 'makes a request', (done) ->
      opsworks.describeStacks (err, data) ->
        noError(err)
        expect(Array.isArray(data.Stacks)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      opsworks.describeLayers {StackId: 'fake-id'}, (err, data) ->
        noData(data)
        assertError(err, 'ResourceNotFoundException')
        matchError(err, 'Unable to find stack with ID fake-id')
        done()

  describe 'AWS.RDS', ->
    it 'makes a request', (done) ->
      rds.describeCertificates (err, data) ->
        noError(err)
        expect(Array.isArray(data.Certificates)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      rds.listTagsForResource {ResourceName: 'fake-name'}, (err, data) ->
        noData(data)
        assertError(err, 'InvalidParameterValue')
        done()

  describe 'AWS.Route53', ->
    it 'makes a request', (done) ->
      route53.listHostedZones (err, data) ->
        noError(err)
        expect(Array.isArray(data.HostedZones)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      route53.createHostedZone {Name: 'fake-name', 'CallerReference': 'fake-ref'}, (err, data) ->
        noData(data)
        assertError(err, 'InvalidDomainName')
        done()

  describe 'AWS.Route53Domains', ->
    it 'makes a request', (done) ->
      route53domains.listDomains (err, data) ->
        noError(err)
        expect(Array.isArray(data.Domains)).to.equal(true)
        done()

    it 'handles errors', (done) ->
      route53domains.registerDomain {DomainName: 'example.com', DurationInYears: '1', AdminContact: {}, RegistrantContact: {}, TechContact: {}}, (err, data) ->
        noData(data)
        assertError(err, 'InvalidInput')
        done()

  describe 'AWS.S3', ->
    testWrite = (done, body, compareFn, svc) ->
      svc = svc || s3
      key = uniqueName('test')
      s3.putObject {Key: key, Body: body}, (err, data) ->
        noError(err)
        s3.getObject {Key: key}, (err, data) ->
          noError(err)
          if compareFn
            compareFn(data)
          else
            expect(data.Body.toString()).to.equal(body)
          s3.deleteObject(Key: key).send(done)

    it 'GETs and PUTs objects to a bucket', (done) ->
      testWrite done, 'ƒoo'

    it 'GETs and PUTs objects to a bucket with signature version 4', (done) ->
      svc = new AWS.S3(AWS.util.merge({signatureVersion: 'v4'}, config.s3))
      testWrite done, 'ƒoo', null, svc

    it 'writes typed array data', (done) ->
      testWrite done, new Uint8Array([2, 4, 8]), (data) ->
        expect(data.Body[0]).to.equal(2)
        expect(data.Body[1]).to.equal(4)
        expect(data.Body[2]).to.equal(8)

    it 'writes blobs', (done) ->
      testWrite done, new Blob(['a', 'b', 'c']), (data) ->
        expect(data.Body[0]).to.equal(97)
        expect(data.Body[1]).to.equal(98)
        expect(data.Body[2]).to.equal(99)

    it 'writes with charset', (done) ->
      key = uniqueName('test')
      body = 'body string'
      s3.putObject {Key: key, Body: body, ContentType: 'text/html'}, (err, data) ->
        noError(err)
        s3.deleteObject(Key: key).send ->
          s3.putObject {Key: key, Body: body, ContentType: 'text/html; charset=utf-8'}, (err, data) ->
            noError(err)
            s3.deleteObject(Key: key).send(done)

    describe 'upload()', ->
      it 'supports blobs using upload()', (done) ->
        key = uniqueName('test')
        size = 100
        u = s3.upload(Key: key, Body: new Blob([new Uint8Array(size)]))
        u.send (err, data) ->
          expect(err).not.to.exist
          expect(typeof data.ETag).to.equal('string')
          expect(typeof data.Location).to.equal('string')
          done()

    describe 'progress events', ->
      it 'emits http(Upload|Download)Progress events (no phantomjs)', (done) ->
        data = []
        progress = []
        key = uniqueName('test')
        body = new Blob([new Uint8Array(512 * 1024)])
        req = s3.putObject(Key: key, Body: body)
        req.on 'httpUploadProgress', (p) -> progress.push(p)
        req.send (err, data) ->
          noError(err)
          expect(progress.length > 1).to.equal(true)
          expect(progress[0].total).to.equal(body.size)
          expect(progress[0].loaded > 10).to.equal(true)

          progress = []
          req = s3.getObject(Key: key)
          req.on 'httpDownloadProgress', (p) -> progress.push(p)
          req.send (err, data) ->
            noError(err)
            expect(progress.length > 1).to.equal(true)
            expect(progress[0].total).to.equal(body.size)
            expect(progress[0].loaded > 10).to.equal(true)
            s3.deleteObject(Key: key).send(done)

  describe 'AWS.SES', ->
    it 'makes a request', (done) ->
      ses.listIdentities {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.Identities)).to.equal(true)
        done()
    it 'handles errors', (done) ->
      params =
        RuleSetName: 'fake-name'
        RuleName: 'fake-name'
      ses.describeReceiptRule params, (err, data) ->
        assertError(err, 'RuleSetDoesNotExist')
        noData(data)
        done()

  describe 'AWS.SNS', ->
    it 'creates and deletes topics', (done) ->
      sns.createTopic {Name: uniqueName('aws-sdk-js')}, (err, data) ->
        noError(err)
        arn = data.TopicArn
        sns = new AWS.SNS(sns.config)
        sns.config.params = TopicArn: arn
        sns.listTopics (err, data) ->
          expect(data.Topics.filter((o) -> o.TopicArn == arn)).not.to.equal(null)
          sns.deleteTopic(done)

  describe 'AWS.SQS', ->
    it 'posts and receives messages on a queue', (done) ->
      name = uniqueName('aws-sdk-js')
      msg = 'ƒoo'
      sqs.createQueue {QueueName: name}, (err, data) ->
        url = data.QueueUrl
        sqs = new AWS.SQS(sqs.config)
        sqs.config.params = QueueUrl: url
        eventually ((err) -> err == null),
          ((cb) -> sqs.getQueueUrl({QueueName: name}, cb)), ->
            sqs.sendMessage {MessageBody:msg}, (err, data) ->
              noError(err)
              eventually ((err, data) -> data.Messages[0].Body == msg),
                ((cb) -> sqs.receiveMessage(cb)), (err, data) ->
                  noError(err)
                  expect(data.Messages[0].MD5OfBody).to.equal(AWS.util.crypto.md5(msg, 'hex'))
                  sqs.deleteQueue(done)

  describe 'AWS.SSM', ->
    it 'makes a request', (done) ->
      ssm.listCommands {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.Commands)).to.equal(true)
        done()
    it 'handles errors', (done) ->
      params =
        Name: 'fake-name'
      ssm.describeDocument params, (err, data) ->
        assertError(err, 'InvalidDocument')
        noData(data)
        done()

    describe 'AWS.StorageGateway', ->
    it 'makes a request', (done) ->
      storagegateway.listGateways {}, (err, data) ->
        noError(err)
        expect(Array.isArray(data.Gateways)).to.equal(true)
        done()
    it 'handles errors', (done) ->
      params =
        GatewayARN: 'fake-arn'
      storagegateway.describeGatewayInformation params, (err, data) ->
        assertError(err, 'ValidationException')
        noData(data)
        done()

  describe 'AWS.STS', ->
    it 'gets a session token', (done) ->
      sts.getSessionToken (err, data) ->
        noError(err)
        expect(data.Credentials.AccessKeyId).not.to.equal('')
        done()

  describe 'AWS.WAF', ->
    it 'makes a request', (done) ->
      params =
        Limit: 20
      waf.listRules params, (err, data) ->
        noError(err)
        expect(Array.isArray(data.Rules)).to.equal(true)
        done()
    it 'handles errors', (done) ->
      params =
        Name: 'fake-name'
        ChangeToken: 'fake-token'
      waf.createSqlInjectionMatchSet params, (err, data) ->
        assertError(err, 'WAFStaleDataException')
        noData(data)
        done()
