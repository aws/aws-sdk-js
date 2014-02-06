module.exports = function() {
  this.Before("@cloudformation", function (callback) {
    this.service = new this.AWS.CloudFormation();
    callback();
  });

  this.Given(/^I create a CloudFormation stack with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.stackName = this.uniqueName(prefix);
    this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
    var params = { TemplateBody: this.templateBody, StackName: this.stackName };
    this.request(null, 'createStack', params, callback, false);
  });

  this.Given(/^I get a CloudFormation template for the stack$/, function(callback) {
    this.request(null, 'getTemplate', {StackName: this.stackName}, callback);
  });

  this.Then(/^the result should contain the CloudFormation template body$/, function(callback) {
    this.assert.equal(this.data.TemplateBody.replace(/\s+/, ''), this.templateBody);
    callback();
  });

  this.Then(/^I delete the CloudFormation stack$/, function(callback) {
    this.request(null, 'deleteStack', {StackName: this.stackName}, callback);
  });
};
