require('./helpers');
const AWS = require('../lib/node_loader');

describe('node_loader', function () {
  describe('AWS.CredentialProviderChain', function () {
    it('initiates providers with named functions', function () {
      expect(
        AWS.CredentialProviderChain.defaultProviders.map(function (fn) {
          return fn.name;
        })
      ).to.eql([
          'EnvironmentCredentialsAWS',
          'EnvironmentCredentialsAMAZON',
          'SharedIniFileCredentials',
          'ECSCredentials',
          'ProcessCredentials',
          'TokenFileWebIdentityCredentials',
          'EC2MetadataCredentials'
      ]);
    });
  });
});
