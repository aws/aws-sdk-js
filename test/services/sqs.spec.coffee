helpers = require('../helpers')
AWS = helpers.AWS

describe 'AWS.SQS', ->
  sqs = null
  beforeEach -> sqs = new AWS.SQS params: QueueUrl: 'http://url'

  checksumValidate = (operation, input, response, shouldPass, cb) ->
    output = null
    helpers.mockHttpResponse 200, {}, response
    runs ->
      sqs[operation](input, (e, d) -> output = error: e, data: d)
    waitsFor -> output
    runs ->
      if shouldPass
        expect(output.error).toEqual(null)
      else
        expect(output.error).not.toEqual(null)
      if cb
        cb(output.error, output.data)

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

    it 'correctly validates MD5 of message input', ->
      checksumValidate 'sendMessage', input, payload(md5), true, (err, data) ->
        expect(data.MD5OfMessageBody).toEqual(md5)

    it 'raises InvalidChecksum if MD5 does not match message input', ->
      checksumValidate 'sendMessage', input, payload('000'), false, (err) ->
        expect(err.message).toMatch('Got "000", expecting "acbd18db4cc2f85cedef654fccc4a4d8"')
        expect(err.messageIds).toEqual(['MSGID'])

    it 'ignores checksum errors if computeChecksums is false', ->
      sqs.config.computeChecksums = false
      checksumValidate 'sendMessage', input, payload('000'), true

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

    it 'correctly validates MD5 of operation', ->
      output = payload(md5foo, md5bar, md5bar)
      checksumValidate 'sendMessageBatch', input, output, true, (err, data) ->
        expect(data.Successful[0].MD5OfMessageBody).toEqual(md5foo)
        expect(data.Successful[1].MD5OfMessageBody).toEqual(md5bar)
        expect(data.Successful[2].MD5OfMessageBody).toEqual(md5bar)

    it 'raises InvalidChecksum with relevent message IDs', ->
      output = payload('000', md5bar, '000')
      checksumValidate 'sendMessageBatch', input, output, false, (err, data) ->
        expect(err.message).toMatch('Invalid messages: a, c')
        expect(err.messageIds).toEqual(['MSGID1', 'MSGID3'])

    it 'ignores checksum errors if computeChecksums is false', ->
      output = payload(md5foo, '000', md5bar)
      sqs.config.computeChecksums = false
      checksumValidate 'sendMessageBatch', input, output, true

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

    it 'correctly validates MD5 of operation', ->
      output = payload('foo', md5, 'MSGID')
      checksumValidate 'receiveMessage', {}, output, true, (err, data) ->
        expect(data.Messages[0].MD5OfBody).toEqual(md5)

    it 'raises InvalidChecksum with relevent message IDs', ->
      output = payload('foo', '000', 'MSGID')
      checksumValidate 'receiveMessage', {}, output, false, (err, data) ->
        expect(err.message).toMatch('Invalid messages: MSGID')
        expect(err.messageIds).toEqual(['MSGID'])

    it 'ignores checksum errors if computeChecksums is false', ->
      output = payload('foo', '000', 'MSGID')
      sqs.config.computeChecksums = false
      checksumValidate 'receiveMessage', {}, output, true, (err, data) ->
        expect(data.Messages[0].MD5OfBody).not.toEqual(md5)
