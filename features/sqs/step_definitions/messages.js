module.exports = function () {

  this.When(/^I send the message "([^"]*)"$/, function(message, callback) {
    this.request(null, 'sendMessage', {QueueUrl:this.queueUrl,MessageBody:message}, callback);
  });

  this.Then(/^the result should include a message ID$/, function(callback) {
    this.assert.compare(this.data.MessageId.length, '>', 0);
    callback();
  });

  this.Then(/^the result should have an MD5 digest of "([^"]*)"$/, function(digest, callback) {
    this.assert.equal(this.data.MD5OfMessageBody, digest);
    callback();
  });

  this.Then(/^I should eventually be able to receive "([^"]*)" from the queue$/, function(message, callback) {
    this.eventually(callback, function (next) {
      next.condition = function() {
        return this.data.Messages[0].Body === message;
      };
      this.request(null, 'receiveMessage', {QueueUrl:this.queueUrl}, next);
    });
  });

  this.When(/^I send the message "([^"]*)" with a binary attribute$/, function (message, callback) {
    var params = {
      QueueUrl: this.queueUrl,
      MessageBody: message,
      MessageAttributes: {
        binary: { DataType: 'Binary', BinaryValue: new Buffer([1,2,3]) }
      }
    };
    this.request(null, 'sendMessage', params, callback);
  });

  this.Then(/^I should eventually be able to receive "([^"]*)" from the queue with a binary attribute$/, function (message, callback) {
    this.eventually(callback, function (next) {
      next.condition = function() {
        return this.data.Messages[0].MessageAttributes.binary.BinaryValue.toString() === '\u0001\u0002\u0003';
      };
      var params = {QueueUrl:this.queueUrl,MessageAttributeNames:['binary']};
      this.request(null, 'receiveMessage', params, next);
    });
  });
};
