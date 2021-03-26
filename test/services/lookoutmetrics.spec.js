var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.LookoutMetrics', function() {
  var lookoutmetrics = null;
  beforeEach(function() {
    lookoutmetrics = new AWS.LookoutMetrics();
  });

  it('should set Content-Type header to application/x-amz-json-1.1', function () {
    helpers.mockHttpResponse(200, {}, '');
    req = lookoutmetrics.listAnomalyDetectors({ MaxResults: 10 });
    req.build();
    return expect(req.httpRequest.headers['Content-Type']).to.equal('application/x-amz-json-1.1');
  });
});
