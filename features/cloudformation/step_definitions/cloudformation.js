module.exports = function() {
  this.Before("@cloudformation", function (callback) {
    this.service = new this.AWS.CloudFormation();
    callback();
  });

  this.Given(/^I create a CloudFormation stack with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.stackName = this.uniqueName(prefix);
    this.templateBody = '{"Resources":{"member":{"Type":"AWS::SQS::Queue"}}}';
    var params = { TemplateBody: this.templateBody, StackName: this.stackName, EnableTerminationProtection: true };
    this.request(null, 'createStack', params, callback, false);
  });
};
