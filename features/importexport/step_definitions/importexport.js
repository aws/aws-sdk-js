module.exports = function() {
  this.Before("@importexport", function (callback) {
    this.s3 = new this.AWS.S3.Client();
    this.service = new this.AWS.ImportExport.Client();
    callback();
  });

  this.When(/^I create an (Import|Export) job with manifest:$/, function(type, manifest, callback) {
    manifest = manifest.replace('{ACCESS_KEY_ID}', this.service.config.credentials.accessKeyId);
    manifest = manifest.replace('{BUCKET}', this.bucket);
    var params = {JobType: type, Manifest: manifest, ValidateOnly: false};
    this.request(null, 'createJob', params, callback, false);
  });

  this.When(/^I store the Import job ID$/, function(callback) {
    this.jobId = this.data.JobId;
    callback();
  });

  this.Then(/^the result should contain (\S+) with expression (.+)$/, function(property, expr, callback) {
    this.assert.equal(this.data[property], eval(expr));
    callback();
  });

  this.Then(/^the result should contain (\S+) with string value "([^"]*)"$/, function(property, value, callback) {
    this.assert.equal(this.data[property], value);
    callback();
  });

  this.When(/^I get the Import job status$/, function(callback) {
    this.request(null, 'getStatus', {JobId: this.jobId}, callback);
  });

  this.When(/^I cancel the Import job$/, function(callback) {
    var params = {JobId: this.jobId};
    this.request(null, 'cancelJob', params, callback);
  });

  this.When(/^I list Import\/Export jobs$/, function(callback) {
    this.request(null, 'listJobs', {}, callback);
  });
};
