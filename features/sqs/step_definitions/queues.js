module.exports = function () {

  this.Given(/^I create a queue with the prefix name "([^"]*)"$/, function(prefix, callback) {
    var name = this.uniqueName(prefix);
    this.request(null, 'createQueue', { QueueName: name }, callback, function() {
      this.queueUrl = this.data.QueueUrl;
      this.createdQueues.push(this.queueUrl);
    });
  });

  this.Then(/^list queues should eventually return the queue urls$/, function(callback) {
    this.eventually(callback, function (next) {
      next.condition = function() {
        var matchingCount = 0;
        for (var i = 0; i < this.createdQueues.length; ++i) {
          for (var j = 0; j < this.data.QueueUrls.length; ++j) {
            if (this.createdQueues[i] == this.data.QueueUrls[j]) {
              matchingCount++;
            }
          }
        }
        return matchingCount == this.createdQueues.length;
      };
      this.request(null, 'listQueues', {}, next);
    }, { maxTime: 60 });
  });

  this.Then(/^I delete the SQS queue$/, function (callback) {
    var url = this.createdQueues.pop();
    this.request(null, 'deleteQueue', { QueueUrl: url }, callback);
  });

};
