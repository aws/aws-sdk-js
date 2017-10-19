module.exports = function() {
  this.Before("@directconnect", function (callback) {
    this.service = new this.AWS.DirectConnect();
    callback();
  });

  this.When(/^I describe the connection$/, function(callback) {
    var params = {connectionId: this.connectionId};
    this.request(null, 'describeConnections', params, callback);
  });

  this.Then(/^I should get response of type "([^"]*)"$/, function(array, callback) {
    this.assert.equal(this.data.connections.constructor.name, array)
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
