module.exports = function() {
  this.Before("@sqs", function (callback) {
    this.service = new this.AWS.SQS.Client({region: 'us-east-1'});
    this.createdQueues = [];
    callback();
  });
};
