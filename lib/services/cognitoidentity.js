var AWS = require('../core');

AWS.util.update(AWS.CognitoIdentity.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    var self = this;
    if (request.operation === 'getId') {
      request.addListener('complete', self.cacheServerTime);
    }
  },

  cacheServerTime: function(response) {
    var serverTime = Date.parse(response.httpResponse.headers.date);
    AWS.config.cachedServerTime = serverTime;
  },

  getOpenIdToken: function getOpenIdToken(params, callback) {
    return this.makeUnauthenticatedRequest('getOpenIdToken', params, callback);
  },

  getId: function getId(params, callback) {
    return this.makeUnauthenticatedRequest('getId', params, callback);
  },

  getCredentialsForIdentity: function getCredentialsForIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('getCredentialsForIdentity', params, callback);
  }

});
