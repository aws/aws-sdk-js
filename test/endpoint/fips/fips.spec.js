var test_cases = require('./test_cases.json');
var helpers = require('../../helpers');
var AWS = helpers.AWS;

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
  var { clientName, region, signingRegion, hostname } = input;
  if (clientName === 'IotData') {
    // requires an explicit `endpoint' configuration option.
    return;
  }
  if (!AWS[clientName]) {
    throw new Error(`${clientName} does not exist`);
  }

  var client = new AWS[clientName]({ region });

  var functionName = getFunctionName(client);
  if (!functionName) {
    throw new Error(
      `Function starting with list/describe does not exist for ${clientName}`
    );
  }

  var req = client[getFunctionName(client)]();
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
  for (const test_case of test_cases) {
    it(`testing ${test_case.clientName} with region: ${test_case.region}`, async function() {
      await testApiCall(test_case);
    });
  }
});
