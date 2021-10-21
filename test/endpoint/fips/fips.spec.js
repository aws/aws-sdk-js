const test_cases = require('./test_cases.json');
const helpers = require('../../helpers');
const AWS = helpers.AWS;

function getFunctionName (client) {
  const funcPrefixes = ['list', 'describe', 'query', 'get', 'invoke', 'send'];
  const properties = Object.getOwnPropertyNames(Object.getPrototypeOf(client));
  for (const funcPrefix of funcPrefixes) {
    function startsWith(property) {
      return property.startsWith(funcPrefix);
    }
    if (properties.some(startsWith)) {
      return properties.find(startsWith);
    }
  }
};

async function testApiCall(input) {
  const { clientName, region, signingRegion, hostname } = input;
  if (clientName === 'IotData') {
    // requires an explicit `endpoint' configuration option.
    return;
  }
  if (!AWS[clientName]) {
    throw new Error(`${clientName} does not exist`);
  }

  const client = new AWS[clientName]({ region });

  const functionName = getFunctionName(client);
  if (!functionName) {
    throw new Error(
      `Function starting with list/describe does not exist for ${clientName}`
    );
  }

  const req = client[getFunctionName(client)]();
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
