const test_cases = require('./test_cases.json');
const helpers = require('../../helpers');
const AWS = helpers.AWS;

async function testApiCall(input) {
  const { clientName, region, signingRegion, hostname } = input;

  if (!AWS[clientName]) {
    throw new Error(`${clientName} does not exist`);
  }

  const client =
    clientName === 'IotData'
      ? // requires an explicit `endpoint' configuration option.
        new AWS.IotData({ region, endpoint: 'endpoint' })
      : new AWS[clientName]({ region });

  const req = client[Object.keys(client.api.operations)[0]]();
  req.on('complete', () => {
    expect(region).to.equal(client.config.region);
    expect(signingRegion).to.equal(req.httpRequest.region);
    expect(hostname).to.equal(req.httpRequest.endpoint.host);
  });

  try {
    await req.promise();
  } catch (error) {}
};

describe('endpoints.fips', function() {
  beforeEach(function () {
    helpers.mockResponse({
      data: {}
    });
  });

  for (const test_case of test_cases) {
    it(`testing ${test_case.clientName} with region: ${test_case.region}`, async function() {
      await testApiCall(test_case);
    });
  }
});
