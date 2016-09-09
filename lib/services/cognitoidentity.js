var AWS = require('../core');

module.exports = function decorateService(CognitoIdentity) {
  AWS.util.update(CognitoIdentity.prototype, {
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
};