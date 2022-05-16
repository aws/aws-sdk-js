var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.EventBridge', function() {
  var eventBridge;
  beforeEach(function() {
    return eventBridge = new AWS.EventBridge();
  });
  describe('putEvents', function() {
    it('should throw if EndPointId is supplied', function(done) {
      try {
        eventBridge.putEvents({Entries: [], EndpointId: 'foo'});
      } catch (err) {
        expect(err.name).to.eql('InvalidParameter');
        expect(err.message).to.contain('EndpointId is not supported in current SDK.');
        done();
      }
    });
  });
});
