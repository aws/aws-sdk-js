helpers = require('./helpers')
AWS = helpers.AWS
config = {}
try
  config = require('./configuration')

s3 = new AWS.S3(AWS.util.merge(config, config.s3))
dynamodb = new AWS.DynamoDB(AWS.util.merge(config, config.dynamodb))
sqs = new AWS.SQS(AWS.util.merge(config, config.sqs))
sns = new AWS.SNS(AWS.util.merge(config, config.sns))
sts = new AWS.STS(AWS.util.merge(config, config.sts))

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

noError = (err) -> expect(err).toEqual(null)

integration = (label, fn) ->
  if label.match(/\(no phantomjs\)/) and navigator.userAgent.match(/phantomjs/i)
    return
  it label, ->
    done = false
    runs -> fn(-> done = true)
    waitsFor -> done == true

integrationTests = (fn) ->
  if config.accessKeyId and AWS.util.isBrowser()
    describe 'Integration tests', fn

integrationTests ->
  describe 'Request.abort', ->
    it 'can abort a request', ->
      err = null
      done = null
      runs ->
        req = s3.putObject Key: 'key', Body: 'body'
        req.on 'complete', (resp) -> done = true; err = resp.error
        req.on 'send', (resp) -> resp.request.abort()
        req.send()
      waitsFor -> done
      runs ->
        expect(err.name).toEqual('RequestAbortedError')

  describe 'XHR', ->
    it 'does not emit http events if networking issue occurs', ->
      err = null
      done = null
      httpHeaders = false; httpData = false; httpError = false; httpDone = false
      runs ->
        svc = new AWS.S3(accessKeyId: 'akid', secretAccessKey: 'secret', maxRetries: 0)
        date = AWS.util.date.iso8601().replace(/[^0-9]/g,'')
        req = svc.getObject(Bucket:'invalidbucket' + date, Key: 'foo')
        req.on 'httpHeaders', -> httpHeaders = true
        req.on 'httpData', -> httpData = true
        req.on 'httpDone', -> httpDone = true
        req.on 'httpError', -> httpError = true
        req.on 'complete', (resp) -> done = true; err = resp.error
        req.send()
      waitsFor -> done
      runs ->
        expect(httpHeaders).toEqual(false)
        expect(httpData).toEqual(false)
        expect(httpDone).toEqual(false)
        expect(httpError).toEqual(true)
        expect(err.name).toEqual('NetworkingError')

    integration 'can send synchronous requests (no phantomjs)', (done) ->
      key = uniqueName('test')
      opts = AWS.util.merge(config, config.s3)
      opts.httpOptions = xhrAsync: false
      svc = new AWS.S3(opts)
      resp1 = svc.putObject(Key: key, Body: 'body').send()
      resp2 = svc.getObject(Key: key).send()
      expect(resp2.data.Body.toString()).toEqual('body')
      svc.deleteObject(Key: key).send()
      done()

  describe 'AWS.S3', ->
    testWrite = (done, body, compareFn) ->
      key = uniqueName('test')
      s3.putObject {Key: key, Body: body}, (err, data) ->
        noError(err)
        s3.getObject {Key: key}, (err, data) ->
          noError(err)
          if compareFn
            compareFn(data)
          else
            expect(data.Body.toString()).toEqual(body)
          s3.deleteObject(Key: key).send(done)

    integration 'GETs and PUTs objects to a bucket (no phantomjs)', (done) ->
      testWrite done, 'ƒoo'

    integration 'writes typed array data (no phantomjs)', (done) ->
      testWrite done, new Uint8Array([2, 4, 8]), (data) ->
        expect(data.Body[0]).toEqual(2)
        expect(data.Body[1]).toEqual(4)
        expect(data.Body[2]).toEqual(8)

    integration 'writes blobs (no phantomjs)', (done) ->
      testWrite done, new Blob(['a', 'b', 'c']), (data) ->
        expect(data.Body[0]).toEqual(97)
        expect(data.Body[1]).toEqual(98)
        expect(data.Body[2]).toEqual(99)

    integration 'writes with charset', (done) ->
      key = uniqueName('test')
      body = 'body string'
      s3.putObject {Key: key, Body: body, ContentType: 'text/html'}, (err, data) ->
        noError(err)
        s3.deleteObject(Key: key).send(done)
      s3.putObject {Key: key, Body: body, ContentType: 'text/html; charset=utf-8'}, (err, data) ->
        noError(err)
        s3.deleteObject(Key: key).send(done)

    describe 'progress events', ->
      integration 'emits http(Upload|Download)Progress events (no phantomjs)', (done) ->
        data = []
        progress = []
        key = uniqueName('test')
        body = new Blob([new Array(512 * 1024).join('x')])
        req = s3.putObject(Key: key, Body: body)
        req.on 'httpUploadProgress', (p) -> progress.push(p)
        req.send (err, data) ->
          noError(err)
          expect(progress.length > 1).toEqual(true)
          expect(progress[0].total).toEqual(body.size)
          expect(progress[0].loaded > 10).toEqual(true)

          progress = []
          req = s3.getObject(Key: key)
          req.on 'httpDownloadProgress', (p) -> progress.push(p)
          req.send (err, data) ->
            noError(err)
            expect(progress.length > 1).toEqual(true)
            expect(progress[0].total).toEqual(body.size)
            expect(progress[0].loaded > 10).toEqual(true)
            s3.deleteObject(Key: key).send()
            done()

  describe 'AWS.DynamoDB', ->
    integration 'writes and reads from a table', (done) ->
      key = uniqueName('test')
      dynamodb.putItem {Item: {id: {S: key}, data: {S: 'ƒoo'}}}, (err, data) ->
        noError(err)
        dynamodb.getItem {Key: {id: {S: key}}}, (err, data) ->
          noError(err)
          expect(data.Item.data.S).toEqual('ƒoo')
          dynamodb.deleteItem({Key: {id: {S: key}}}).send(done)

  describe 'AWS.STS', ->
    integration 'gets a session token', (done) ->
      sts.getSessionToken (err, data) ->
        noError(err)
        expect(data.Credentials.AccessKeyId).not.toEqual('')
        done()

  describe 'AWS.SQS', ->
    integration 'posts and receives messages on a queue', (done) ->
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
                  expect(data.Messages[0].MD5OfBody).toEqual(AWS.util.crypto.md5(msg, 'hex'))
                  sqs.deleteQueue(done)

  describe 'AWS.SNS', ->
    integration 'creates and deletes topics', (done) ->
      sns.createTopic {Name: uniqueName('aws-sdk-js')}, (err, data) ->
        noError(err)
        arn = data.TopicArn
        sns = new AWS.SNS(sns.config)
        sns.config.params = TopicArn: arn
        sns.listTopics (err, data) ->
          expect(data.Topics.filter((o) -> o.TopicArn == arn)).not.toEqual(null)
          sns.deleteTopic(done)
