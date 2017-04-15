var helpers = require('../helpers')
  , message_id
  , receipt_handle
  , client
  , AWS;

AWS = helpers.AWS;

describe('AWS.SQS', function() {
  beforeEach(function() {
    client = new AWS.SQS.Client({
      QueueUrl: 'https://sqs.us-east-1.amazonaws.com/<your id>/<your message queue name>'
    });
    return client;
  });

  return describe('read, write and delete messages', function() {
    it('should be able to send a message to the queue', function(done) {
      var  params;

      params = {
          MessageBody: 'Hello World'
        , QueueUrl: client.config.QueueUrl
        , DelaySeconds: 0
      };

      return helpers.integration((function() {
        return client.sendMessage(params);
      }), function(send_response) {
        expect(send_response.error).toEqual(null);
        expect(send_response.data.MD5OfMessageBody).toEqual("b10a8db164e0754105b7a99be72e3fe5");
        messageId = send_response.data.MessageId;
        done();
      });
    });

    it('should be able to receive a message from the queue', function(done) {
      var  params;

      params = {
          QueueUrl: client.config.QueueUrl
        , AttributeNames: [message_id]
      };

      return helpers.integration((function() {
        return client.receiveMessage(params);
      }), function(receive_response) {
        expect(receive_response.error).toEqual(null);
        expect(receive_response.data.Messages[0].MD5OfBody).toEqual("b10a8db164e0754105b7a99be72e3fe5");
        receipt_handle = receive_response.data.Messages[0].ReceiptHandle;
        done();
      });
    });

    it('should be able to delete a message to the queue', function(done) {
      var  params;

      params = {
          QueueUrl: client.config.QueueUrl
        , ReceiptHandle: receipt_handle
      };

      return helpers.integration((function() {
        return client.deleteMessage(params);
      }), function(delete_response) {
        expect(delete_response.error).toEqual(null);
        expect(delete_response.httpResponse.statusCode).toEqual(200);
        done();
      });
    });
  });
});