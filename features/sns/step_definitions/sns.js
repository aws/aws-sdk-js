module.exports = function() {
  this.Before("@sns", function (callback) {
    this.service = new this.AWS.SNS.Client();
    callback();
  });

  this.Given(/^I create an SNS topic with name "([^"]*)"$/, function(name, callback) {
    var world = this;
    this.request(null, 'createTopic', {Name: name}, callback, function (resp) {
      world.topicArn = resp.data.TopicArn;
    });
  });

  this.Given(/^I list the SNS topics$/, function(callback) {
    this.request(null, 'listTopics', {}, callback);
  });

  this.Then(/^the list should contain the topic ARN$/, function(callback) {
    var arn = this.topicArn;
    this.assert.contains(this.data.Topics, function(topic) {
      return topic.TopicArn === arn;
    });
    callback();
  });

  this.Then(/^I delete the SNS topic$/, function(callback) {
    this.request(null, 'deleteTopic', {TopicArn: this.topicArn}, callback);
  });

  this.Given(/^I get SNS topic attributes with an invalid ARN$/, function(callback) {
    this.request(null, 'getTopicAttributes', {TopicArn:'INVALID'}, callback, false);
  });
};
