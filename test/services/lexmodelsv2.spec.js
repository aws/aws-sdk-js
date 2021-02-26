var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.LexModelsV2', function() {
  var lexmodelsv2 = null;
  beforeEach(function() {
    lexmodelsv2 = new AWS.LexModelsV2();
  });

  it('should set Content-Type header to application/x-amz-json-1.1', function () {
    helpers.mockHttpResponse(200, {}, '');
    req = lexmodelsv2.listBots();
    req.build();
    return expect(req.httpRequest.headers['Content-Type']).to.equal('application/x-amz-json-1.1');
  });
});
