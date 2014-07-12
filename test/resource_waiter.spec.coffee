helpers = require('./helpers')
AWS = helpers.AWS

describe 'AWS.ResourceWaiter', ->
  describe 'wait', ->
    it 'waits until a given state is met', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      helpers.mockResponses db, [
        {data: {Table: TableStatus: 'LOADING'}},
        {data: {Table: TableStatus: 'LOADING'}},
        {data: {Table: TableStatus: 'ACTIVE'}}
      ]

      waiter = new AWS.ResourceWaiter(db, 'tableExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data.Table.TableStatus).to.equal('ACTIVE')
      expect(resp.retryCount).to.equal(2)

    it 'can override the final state', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      helpers.mockResponses db, [
        {data: {Table: TableStatus: 'LOADING'}},
        {data: {Table: TableStatus: 'LOADING'}},
        {data: {Table: TableStatus: 'ACTIVE'}},
        {data: {Table: TableStatus: 'FOO'}}
      ]

      waiter = new AWS.ResourceWaiter(db, {tableExists: 'FOO'})
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data.Table.TableStatus).to.equal('FOO')
      expect(resp.retryCount).to.equal(3)

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
      helpers.mockResponses db, resps

      waiter = new AWS.ResourceWaiter(db, 'tableExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(data).to.equal(null)
      expect(err.code).to.equal('ResourceNotReady')
      expect(resp.retryCount).to.equal(25)          # 25 max retries
      expect(resp.error.retryDelay).to.equal(20000) # 20s delay

    it 'accepts error state as a terminal state', ->
      err = null; data = null; resp = null
      s3 = new AWS.S3
      helpers.mockResponses s3, [
        {httpResponse: {statusCode: 200}},
        {httpResponse: {statusCode: 200}},
        {httpResponse: {statusCode: 404}}
      ]

      waiter = new AWS.ResourceWaiter(s3, 'bucketNotExists')
      waiter.wait Bucket: 'bucket', (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(resp.httpResponse.statusCode).to.equal(404)
      expect(resp.retryCount).to.equal(3)

    it 'supports error codes as error state', ->
      err = null; data = null; resp = null
      db = new AWS.DynamoDB
      helpers.mockResponses db, [
        {data: {Table: TableStatus: 'ACTIVE'}},
        {data: {Table: TableStatus: 'ACTIVE'}},
        {error: {code: 'ResourceNotFoundException'}}
      ]

      waiter = new AWS.ResourceWaiter(db, 'tableNotExists')
      waiter.wait (e, d) -> resp = this; err = e; data = d
      expect(err).to.equal(null)
      expect(data).to.eql({})
      expect(resp.retryCount).to.equal(2)

    it 'fails fast if failure value is found', ->
      err = null; data = null; resp = null
      ec2 = new AWS.EC2
      helpers.mockResponses ec2, [
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
