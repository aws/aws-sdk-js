helpers = require('./helpers')
AWS = helpers.AWS

describe 'AWS.ResourceWaiter', ->
  describe 'wait', ->
    it 'waits until a given state is met', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      helpers.mockResponses [
        {data: {Table: TableStatus: 'LOADING'}},
        {data: {Table: TableStatus: 'LOADING'}},
        {data: {Table: TableStatus: 'ACTIVE'}}
      ]

      waiter = new AWS.ResourceWaiter(db, 'tableExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data.Table.TableStatus).to.equal('ACTIVE')
      expect(resp.retryCount).to.equal(2)

    it 'throws an error if terminal state is not configured', ->
      try
        new AWS.ResourceWaiter(new AWS.DynamoDB, 'invalidState')
      catch e
        err = e
      expect(err.message).to.equal('State invalidState not found.')

    it 'gives up after a maximum number of retries', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      resps = ({data: {Table: {TableStatus: 'LOADING'}}} for _ in [1..26])
      resps.push({data: {Table: {TableStatus: 'ACTIVE'}}})
      helpers.mockResponses resps

      waiter = new AWS.ResourceWaiter(db, 'tableExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(data).to.equal(null)
      expect(err.code).to.equal('ResourceNotReady')
      expect(resp.retryCount).to.equal(25)          # 25 max retries
      expect(resp.error.retryDelay).to.equal(20000) # 20s delay

    it 'accepts error state as a terminal state', ->
      err = null; data = null; resp = null
      s3 = new AWS.S3
      reqs = helpers.mockResponses [
        {httpResponse: {statusCode: 200}, error: null, data: {}},
        {httpResponse: {statusCode: 200}, error: null, data: {}},
        {httpResponse: {statusCode: 404}, error: {code: 404}, data: null}
      ]

      waiter = new AWS.ResourceWaiter(s3, 'bucketNotExists')
      waiter.wait Bucket: 'bucket', (e, d) -> resp = this; err = e; data = d
      expect(helpers.operationsForRequests(reqs)).to.eql [
        's3.headBucket', 's3.headBucket', 's3.headBucket'
      ]
      expect(err).to.equal(null)
      expect(resp.httpResponse.statusCode).to.equal(404)
      expect(resp.retryCount).to.equal(2)

    it 'fails fast if failure value is found', ->
      err = null; data = null; resp = null
      ec2 = new AWS.EC2
      helpers.mockResponses [
        {data: {Reservations: [{Instances: [{State: {Name: 'pending'}}]}]}},
        {data: {Reservations: [{Instances: [{State: {Name: 'pending'}}]}]}},
        {data: {Reservations: [{Instances: [{State: {Name: 'pending'}}]}]}},
        {data: {Reservations: [{Instances: [{State: {Name: 'terminated'}}]}]}},
        {data: {Reservations: [{Instances: [{State: {Name: 'pending'}}]}]}},
        {data: {Reservations: [{Instances: [{State: {Name: 'running'}}]}]}}
      ]

      waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning')
      waiter.wait InstanceIds: ['id-123456'], (e, d) -> resp = this; err = e; data = d
      expect(data).to.equal(null)
      expect(err.code).to.equal('ResourceNotReady')
      expect(resp.retryCount).to.equal(3)

    it 'retries or fails depending on whether error is thrown when no acceptors match', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      helpers.mockResponses [
        {data: {Table: TableStatus: 'ACTIVE'}},
        {error: {code: 'WrongErrorCode'}}
      ]

      waiter = new AWS.ResourceWaiter(db, 'tableNotExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(data).to.equal(null)
      expect(err.code).to.equal('ResourceNotReady')
      expect(resp.retryCount).to.equal(1)

    it 'fully supports jmespath expressions', ->
      err = null; data = null; resp = null
      ecs = new AWS.ECS
      helpers.mockResponses [
        {data: {services: [{desiredCount: 1, runningCount: 1, deployments: []}, {desiredCount: 1, runningCount: 1, deployments: [{}]}]}},
        {data: {services: [{desiredCount: 1, runningCount: 0, deployments: [{}]}, {desiredCount: 1, runningCount: 1, deployments: [{}]}]}},
        {data: {services: [{desiredCount: 1, runningCount: 1, deployments: [{}]}, {desiredCount: 1, runningCount: 1, deployments: [{}]}]}}
      ]
      waiter = new AWS.ResourceWaiter(ecs, 'servicesStable')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.not.eql(null)
      expect(resp.retryCount).to.equal(2)

    it 'supports status matcher', ->
      err = null; data = null; resp = null
      s3 = new AWS.S3
      helpers.mockResponses [
        {httpResponse: {statusCode: 201}, error: null, data: {}},
        {httpResponse: {statusCode: 404}, error: {code: 404}, data: null}
        {httpResponse: {statusCode: 301}, error: null, data: {}},
      ]

      waiter = new AWS.ResourceWaiter(s3, 'bucketExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.eql({})
      expect(resp.retryCount).to.equal(2)

    it 'supports error matcher', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      helpers.mockResponses [
        {data: {Table: TableStatus: 'ACTIVE'}},
        {data: {Table: TableStatus: 'ACTIVE'}},
        {error: {code: 'ResourceNotFoundException'}}
      ]

      waiter = new AWS.ResourceWaiter(db, 'tableNotExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.eql({})
      expect(resp.retryCount).to.equal(2)

    it 'supports path matcher', ->
      err = null; data = null; resp = null
      cf = new AWS.CloudFront
      helpers.mockResponses [
        {data: {Distribution: Status: 'Pending'}},
        {data: {Distribution: Status: 'Deployed'}}
      ]

      waiter = new AWS.ResourceWaiter(cf, 'distributionDeployed')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.not.eql(null)
      expect(resp.retryCount).to.equal(1)

    it 'supports pathAny matcher', ->
      err = null; data = null; resp = null
      elb = new AWS.ELB
      helpers.mockResponses [
        {data: {InstanceStates: [{State: 'Pending'},{State: 'Stopped'}]}},
        {data: {InstanceStates: [{State: 'Pending'},{State: 'InService'}]}}
      ]

      waiter = new AWS.ResourceWaiter(elb, 'anyInstanceInService')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.not.eql(null)
      expect(resp.retryCount).to.equal(1)

    it 'supports pathAll matcher', ->
      err = null; data = null; resp = null
      elb = new AWS.ELB
      helpers.mockResponses [
        {data: {InstanceStates: [{State: 'Pending'},{State: 'Stopped'}]}},
        {data: {InstanceStates: [{State: 'Pending'},{State: 'InService'}]}},
        {data: {InstanceStates: [{State: 'InService'},{State: 'InService'}]}}
      ]

      waiter = new AWS.ResourceWaiter(elb, 'instanceInService')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.not.eql(null)
      expect(resp.retryCount).to.equal(2)

    it 'supports acceptors of mixed matcher types', ->
      err = null; data = null; resp = null
      rs = new AWS.Redshift
      helpers.mockResponses [
        {error: {code: 'ClusterNotFound'}},
        {data: {Clusters: [{ClusterStatus: 'pending'},{ClusterStatus: 'available'}]}},
        {data: {Clusters: [{ClusterStatus: 'available'},{ClusterStatus: 'available'}]}},
      ]

      waiter = new AWS.ResourceWaiter(rs, 'clusterAvailable')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.not.eql(null)
      expect(resp.retryCount).to.equal(2)
