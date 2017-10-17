module.exports = function() {
  this.Before("@directconnect", function (callback) {
    this.service = new this.AWS.DirectConnect();
    callback();
  });

  this.Given(/^I describe the connection$/, function(prefix, callback) {
    var params = {};
    this.request(null, 'describeConnections', params, callback);
  });

  this.Then(/^I should get response of type ([^"]*)$/, function(callback) {
      console.log('_____________', this.data.connections.prototype.constructor.name)
    this.assert.equal(this.data.connections.prototype.constructor.name, type)
    callback();
  });

//   this.Then(/^I describe the connection$/, function(callback) {
//     var params = {connectionId: this.connectionId};
//     this.request(null, 'describeConnections', params, callback);
//   });

//   this.Then(/^the bandwidth should match the connection bandwidth$/, function(callback) {
//     this.assert.equal(this.connectionData.bandwidth, this.data.connections[0].bandwidth);
//     callback();
//   });

//   this.Then(/^I delete the Direct Connect connection$/, function(callback) {
//     var params = {connectionId: this.connectionId};
//     this.request(null, 'deleteConnection', params, callback);
//   });

  this.Given(/^I create a Direct Connect connection with an invalid location$/, function(callback) {
    var params = {
      bandwidth: '1Gbps',
      location: 'INVALID_LOCATION',
      connectionName: this.uniqueName('aws-sdk-js')
    };
    this.request(null, 'createConnection', params, callback, false);
  });
};
