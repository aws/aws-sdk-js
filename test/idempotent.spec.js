var helpers = require('./helpers');
var AWS = helpers.AWS;

// Create a mock service
var apiJson = {
  metadata: {
    apiVersion: '2016-11-22',
    endpointPrefix: 'fake',
    jsonVersion: '1.1',
    protocol: 'json',
    signatureVersion: 'v4',
    targetPrefix: 'Fake'
  },
  operations: {
    fakeOp: {
      input: {
        type: 'structure',
        required: [
          'foo'
        ],
        members: {
          foo: {
            idempotencyToken: true
          },
          bar: {
            idempotencyToken: true
          },
          baz: {}
        }
      }
    }
  }
};
var mockService = new AWS.Service({
  paramValidation: true
});
mockService.api = new AWS.Model.Api(apiJson);

describe('AWS.EventListeners.Core.BUILD_IDEMPOTENCY_TOKENS', function() {
  var buildIdempotencyTokens = AWS.EventListeners.Core.BUILD_IDEMPOTENCY_TOKENS;

  it('automatically fills in fields marked as idempotent', function(done) {
    var params = {};
    var req = mockService.makeRequest('fakeOp', params);
    buildIdempotencyTokens(req);
    expect(params).to.eql({});
    expect(typeof req.params.foo).to.equal('string');
    expect(typeof req.params.bar).to.equal('string');
    expect(typeof req.params.baz).to.equal('undefined');
    done();
  });

  it('will defer to user input if provided', function(done) {
    var params = {foo: 'token'};
    var req = mockService.makeRequest('fakeOp', params);
    buildIdempotencyTokens(req);
    expect(params).to.eql({foo: 'token'});
    expect(req.params.foo).to.equal('token');
    expect(typeof req.params.bar).to.equal('string');
    expect(typeof req.params.baz).to.equal('undefined');
    done();
  });

  it('will use a version 4 UUID as the token', function(done) {
    var uuidV4Regex = new RegExp('[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-4[a-zA-Z0-9]{3}-[ab89][a-zA-Z0-9]{3}-[a-zA-Z0-9]{12}');
    var params = {};
    var req = mockService.makeRequest('fakeOp', params);
    buildIdempotencyTokens(req);
    expect(params).to.eql({});
    expect(typeof req.params.foo).to.equal('string');
    expect(typeof req.params.bar).to.equal('string');
    expect(typeof req.params.baz).to.equal('undefined');
    expect(req.params.foo.search(uuidV4Regex)).to.equal(0);
    expect(req.params.bar.search(uuidV4Regex)).to.equal(0);
    done();
  });

});
