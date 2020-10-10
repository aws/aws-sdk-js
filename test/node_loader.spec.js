require('./helpers');
const AWS = require('../lib/node_loader');

describe('node_loader', () => {
  describe('AWS.CredentialProviderChain', () => {
    it('initiates providers with named functions', () => {
      expect(
        AWS.CredentialProviderChain.defaultProviders.map((fn) => fn.name)
      ).to.eql([
          'AWS.EnvironmentCredentials(\'AWS\')',
          'AWS.EnvironmentCredentials(\'AMAZON\')',
          'AWS.SharedIniFileCredentials()',
          'AWS.ECSCredentials()',
          'AWS.ProcessCredentials()',
          'AWS.TokenFileWebIdentityCredentials()',
          'AWS.EC2MetadataCredentials()'
      ]);
    });
  });
});
