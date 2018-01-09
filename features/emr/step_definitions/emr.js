module.exports = function() {
  this.Before("@emr", function (callback) {
    this.service = new this.AWS.EMR();
    callback();
  });

  this.Given(/^I run an EMR job flow with invalid parameters$/, function(callback) {
    this.service = new this.AWS.EMR();
    var params = {Name: '', Instances: {MasterInstanceType: 'invalid'}};
    this.request(null, 'runJobFlow', params, callback, false);
  });
};
