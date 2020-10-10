require('./helpers');
const AWS = require('../lib/node_loader');

describe('node_loader', () => {
  describe('AWS.CredentialProviderChain', () => {
    it('initiates providers with named functions', () => {
      console.log(AWS.CredentialProviderChain.defaultProviders)
      expect(
        AWS.CredentialProviderChain.defaultProviders.map((fn) => fn.name)
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
