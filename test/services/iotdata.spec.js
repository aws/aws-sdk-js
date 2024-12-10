var helpers = require('../helpers');
var AWS = helpers.AWS;
var Buffer = AWS.util.Buffer;

describe('AWS.IotData', function() {
  var blobPayloadOutputOps = [
    'deleteThingShadow',
    'getThingShadow',
    'updateThingShadow'
  ];

  for (var i = 0; i < blobPayloadOutputOps.length; i++) {
    describe(blobPayloadOutputOps[i], (function(operation) {
      return function() {
        it('converts the body to a string', function(done) {
          var client = new AWS.IotData({endpoint: 'localhost'});
          var shadow = JSON.stringify({foo: 'bar', fizz: ['buzz', 'pop']});
          var body = AWS.util.buffer.toBuffer(shadow);
          helpers.mockHttpResponse(200, {}, body);
          client[operation]({thingName: 'thing'}, function(err, data) {
            expect(Buffer.isBuffer(data.payload)).to.be.false;
            expect(data.payload).to.eql(shadow);
            done();
          });
        });
      };
    })(blobPayloadOutputOps[i]));
  }
});
