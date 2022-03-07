const testCases = require('./test_cases_supported.json');
const helpers = require('../helpers');
const AWS = helpers.AWS;

describe('endpoints', () => {
  beforeEach(function () {
    helpers.mockResponse({
      data: {},
    });
  });

  for (const {
    clientName,
    region,
    useFipsEndpoint,
    useDualstackEndpoint,
    hostname,
  } of testCases) {
    it(`testing "${clientName}" with region: ${region}`, (done) => {
      if (!AWS[clientName]) {
        throw new Error(`${clientName} does not exist`);
      }

      const client = new AWS[clientName]({
        region,
        useFipsEndpoint,
        useDualstackEndpoint,
        hostPrefixEnabled: false
      });

      const req = client[Object.keys(client.api.operations)[0]]();

      req.on('complete', function () {
        expect(hostname).to.equal(req.httpRequest.endpoint.host);
        done();
      });

      req.send(function () {});
    });
  }
});
