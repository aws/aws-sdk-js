var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.Finspace', function() {
  var finspace = null;
  beforeEach(function() {
    finspace = new AWS.Finspace();
  });

  it('should set Content-Type header to application/x-amz-json-1.1', function () {
    helpers.mockHttpResponse(200, {}, '');
    req = finspace.listEnvironments();
    req.build();
    return expect(req.httpRequest.headers['Content-Type']).to.equal('application/x-amz-json-1.1');
  });
});
