module.exports = function() {
  this.Before("@directconnect", function (callback) {
    this.service = new this.AWS.DirectConnect();
    callback();
  });

  this.Given(/^I create a Direct Connect connection with an invalid location$/, function(callback) {
    var params = {
      bandwidth: '1Gbps',
      location: 'INVALID_LOCATION',
      connectionName: this.uniqueName('aws-sdk-js')
    };
    this.request(null, 'createConnection', params, callback, false);
  });
};
