helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.SQS', ->
  sqs = null
  beforeEach ->
    sqs = new AWS.SQS params: QueueUrl: 'http://url'

  checksumValidate = (operation, input, response, shouldPass, cb) ->
    helpers.mockHttpResponse 200, {}, response
    sqs[operation](input).send (err, data) ->
      if shouldPass
        expect(err).to.equal(null)
      else
        expect(err).not.to.equal(null)
      cb(err, data)

  describe 'buildEndpoint', ->
    it 'should detect correct region from QueueUrl', ->
      sqs = new AWS.SQS
        computeChecksums: false
        params: QueueUrl: 'http://sqs.region-1.amazonaws.com/queue'
      helpers.mockHttpResponse 200, {}, ''
      req = sqs.sendMessage(MessageBody: 'foo')
      req.build()
      expect(req.httpRequest.region).to.equal('region-1')

  describe 'sendMessage', ->
    input = MessageBody: 'foo'
    md5 = 'acbd18db4cc2f85cedef654fccc4a4d8'
    payload = (md5) ->
      """
      <SendMessageResponse><SendMessageResult>
        <MD5OfMessageBody>#{md5}</MD5OfMessageBody>
        <MessageId>MSGID</MessageId>
      </SendMessageResult></SendMessageResponse>
      """

    it 'correctly validates MD5 of message input', (done) ->
      checksumValidate 'sendMessage', input, payload(md5), true, (err, data) ->
        expect(data.MD5OfMessageBody).to.equal(md5)
        done()

    it 'raises InvalidChecksum if MD5 does not match message input', (done) ->
      checksumValidate 'sendMessage', input, payload('000'), false, (err) ->
        expect(err.message).to.contain('Got "000", expecting "acbd18db4cc2f85cedef654fccc4a4d8"')
        expect(err.messageIds).to.eql(['MSGID'])
        done()

    it 'ignores checksum errors if computeChecksums is false', (done) ->
      sqs.config.computeChecksums = false
      checksumValidate 'sendMessage', input, payload('000'), true, -> done()

  describe 'sendMessageBatch', ->
    input = Entries: [
      { Id: 'a', MessageBody: 'foo' },
      { Id: 'b', MessageBody: 'bar' },
      { Id: 'c', MessageBody: 'bar' }
    ]
    md5foo = 'acbd18db4cc2f85cedef654fccc4a4d8'
    md5bar = '37b51d194a7513e45b56f6524f2d51f2'
    payload = (md5a, md5b, md5c) ->
      """
      <SendMessageBatchResponse><SendMessageBatchResult>
        <SendMessageBatchResultEntry>
          <Id>a</Id>
          <MessageId>MSGID1</MessageId>
          <MD5OfMessageBody>#{md5a}</MD5OfMessageBody>
        </SendMessageBatchResultEntry>
        <SendMessageBatchResultEntry>
          <Id>b</Id>
          <MessageId>MSGID2</MessageId>
          <MD5OfMessageBody>#{md5b}</MD5OfMessageBody>
        </SendMessageBatchResultEntry>
        <SendMessageBatchResultEntry>
          <Id>c</Id>
          <MessageId>MSGID3</MessageId>
          <MD5OfMessageBody>#{md5c}</MD5OfMessageBody>
        </SendMessageBatchResultEntry>
      </SendMessageBatchResult></SendMessageBatchResponse>
      """

    it 'correctly validates MD5 of operation', (done) ->
      output = payload(md5foo, md5bar, md5bar)
      checksumValidate 'sendMessageBatch', input, output, true, (err, data) ->
        expect(data.Successful[0].MD5OfMessageBody).to.equal(md5foo)
        expect(data.Successful[1].MD5OfMessageBody).to.equal(md5bar)
        expect(data.Successful[2].MD5OfMessageBody).to.equal(md5bar)
        done()

    it 'raises InvalidChecksum with relevent message IDs', (done) ->
      output = payload('000', md5bar, '000')
      checksumValidate 'sendMessageBatch', input, output, false, (err, data) ->
        expect(err.message).to.contain('Invalid messages: a, c')
        expect(err.messageIds).to.eql(['MSGID1', 'MSGID3'])
        done()

    it 'ignores checksum errors if computeChecksums is false', (done) ->
      output = payload(md5foo, '000', md5bar)
      sqs.config.computeChecksums = false
      checksumValidate 'sendMessageBatch', input, output, true, -> done()

  describe 'receiveMessage', ->
    md5 = 'acbd18db4cc2f85cedef654fccc4a4d8'
    payload = (body, md5, id) ->
      """
      <ReceiveMessageResponse><ReceiveMessageResult><Message>
        <Body>#{body}</Body>
        <MD5OfBody>#{md5}</MD5OfBody>
        <MessageId>#{id}</MessageId>
      </Message></ReceiveMessageResult></ReceiveMessageResponse>
      """

    it 'correctly validates MD5 of operation', (done) ->
      output = payload('foo', md5, 'MSGID')
      checksumValidate 'receiveMessage', {}, output, true, (err, data) ->
        expect(data.Messages[0].MD5OfBody).to.equal(md5)
        done()

    it 'raises InvalidChecksum with relevent message IDs', (done) ->
      output = payload('foo', '000', 'MSGID')
      checksumValidate 'receiveMessage', {}, output, false, (err, data) ->
        expect(err.message).to.contain('Invalid messages: MSGID')
        expect(err.messageIds).to.eql(['MSGID'])
        done()

    it 'ignores checksum errors if computeChecksums is false', (done) ->
      output = payload('foo', '000', 'MSGID')
      sqs.config.computeChecksums = false
      checksumValidate 'receiveMessage', {}, output, true, (err, data) ->
        expect(data.Messages[0].MD5OfBody).not.to.equal(md5)
        done()
