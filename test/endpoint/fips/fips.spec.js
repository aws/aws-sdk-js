const test_cases = require('./test_cases_supported.json');
const helpers = require('../../helpers');
const AWS = helpers.AWS;

function testApiCall(input, done) {
  const { clientName, region, hostname } = input;

  if (!AWS[clientName]) {
    throw new Error(`${clientName} does not exist`);
  }

  const client = new AWS[clientName]({ region });

  const req = client[Object.keys(client.api.operations)[0]]();
  req.on('complete', function() {
    expect(hostname).to.equal(req.httpRequest.endpoint.host);
    done();
  });

  req.send(function() {});
};

describe('endpoints.fips', function() {
  beforeEach(function () {
    helpers.mockResponse({
      data: {}
    });
  });

  for (const test_case of test_cases) {
    it(`testing ${test_case.clientName} with region: ${test_case.region}`, function(done) {
      testApiCall(test_case, done);
    });
  }
});
