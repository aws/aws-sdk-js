module.exports = function() {

  this.Given(/^I create a service role with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.service = new this.AWS.IAM();
    this.serviceRole = this.uniqueName(prefix);
    var params = {
      RoleName: this.serviceRole,
      AssumeRolePolicyDocument: JSON.stringify({
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: 'elasticmapreduce.amazonaws.com'
            },
            Action: 'sts:AssumeRole'
          }
        ]
      })
    };
    this.request(null, 'createRole', params, callback);
  });

  this.Given(/^I create an instance profile with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.instanceProfile = this.uniqueName(prefix);
    this.request(null, 'createInstanceProfile', {InstanceProfileName: this.instanceProfile}, callback);
  });


  this.Given(/^I create a job flow role with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.jobFlowRole = this.uniqueName(prefix);
    var params = {
      RoleName: this.jobFlowRole,
      AssumeRolePolicyDocument: JSON.stringify({
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: 'ec2.amazonaws.com'
            },
            Action: 'sts:AssumeRole'
          }
        ]
      })
    };
    this.request(null, 'createRole', params, callback);
  });

  this.Given(/^I add the job flow role to the instance profile$/, function(callback) {
    var params = {
      RoleName: this.jobFlowRole,
      InstanceProfileName: this.instanceProfile
    };
    this.request(null, 'addRoleToInstanceProfile', params, callback);
  });

  this.Then(/^I run an EMR job flow with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.service = new this.AWS.EMR();
    var params = {
      Name: this.uniqueName(prefix),
      AmiVersion: 'latest',
      Instances: {
        MasterInstanceType: 'm3.xlarge',
        InstanceCount: 1,
        TerminationProtected: false,
        KeepJobFlowAliveWhenNoSteps: true
      },
      ServiceRole: this.serviceRole,
      JobFlowRole: this.jobFlowRole
    };
    this.request(null, 'runJobFlow', params, callback);
  });

  this.Then(/^I store the job flow ID$/, function(callback) {
    this.jobFlowId = this.data.JobFlowId;
    callback();
  });

  this.Then(/^when I describe the EMR job flows$/, function(callback) {
    this.request(null, 'listClusters', {}, callback);
  });

  this.Then(/^the list should contain the job flow ID$/, function(callback) {
    var jobFlowId = this.jobFlowId;
    this.assert.contains(this.data.Clusters, function(cluster) {
      return cluster.Id === jobFlowId;
    });
    callback();
  });

  this.Then(/^I terminate the job flow$/, function(callback) {
    this.request(null, 'terminateJobFlows', {JobFlowIds: [this.jobFlowId]}, callback);
  });

  this.Then(/^I delete the service role$/, function(callback) {
    this.service = new this.AWS.IAM();
    this.request(null, 'deleteRole', {RoleName: this.serviceRole}, callback);
  });

  this.Then(/^I remove the job flow role from the instance profile$/, function(callback) {
    var params = {
      RoleName: this.jobFlowRole,
      InstanceProfileName: this.instanceProfile
    };
    this.request(null, 'removeRoleFromInstanceProfile', params, callback);
  });

  this.Then(/^I delete the job flow role$/, function(callback) {
    this.request(null, 'deleteRole', {RoleName: this.jobFlowRole}, callback);
  });

  this.Then(/^I delete the instance profile$/, function(callback) {
    this.request(null, 'deleteInstanceProfile', {InstanceProfileName: this.instanceProfile}, callback);
  });

  this.Given(/^I run an EMR job flow with invalid parameters$/, function(callback) {
    this.service = new this.AWS.EMR();
    var params = {Name: '', Instances: {MasterInstanceType: 'invalid'}};
    this.request(null, 'runJobFlow', params, callback, false);
  });
};
