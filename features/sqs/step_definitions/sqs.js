module.exports = function() {
  this.Before("@sqs", function (callback) {
    this.service = new this.AWS.SQS({region: 'us-east-1'});
    this.createdQueues = [];
    callback();
  });

  this.After("@sqs", async function () {
    for (var queueUrl of this.createdQueues) {
      await this.service.deleteQueue({QueueUrl: queueUrl}).promise();
    }
  });
};
