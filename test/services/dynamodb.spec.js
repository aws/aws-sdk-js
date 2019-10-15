var AWS, helpers;

helpers = require('../helpers');

AWS = helpers.AWS;

describe('AWS.DynamoDB', function() {
  var client, configure, ddb;
  configure = function(options) {
    return new AWS.Config(options);
  };
  ddb = function(options) {
    return new AWS.DynamoDB(configure(options));
  };
  client = ddb();
  describe('config', function() {
    return it('returns the configuration object it was constructed with', function() {
      var config, dynamo;
      config = configure({
        endpoint: 'localhost'
      });
      dynamo = new AWS.DynamoDB(config);
      return expect(dynamo.config).to.eql(config);
    });
  });
  describe('numRetries', function() {
    it('defaults to 10', function() {
      return expect(client.numRetries()).to.equal(10);
    });
    return it('can be overridden in the config', function() {
      return expect(ddb({
        maxRetries: 2
      }).numRetries()).to.equal(2);
    });
  });
  describe('retryDelays', function() {
    beforeEach(function() {
      return helpers.spyOn(Math, 'random').andReturn(1);
    });
    it('has a custom backoff function', function() {
      var actualDelays, expectedDelays, i;
      expectedDelays = [50, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];
      actualDelays = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 0, ref = client.numRetries() - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          results.push(client.retryDelays(i));
        }
        return results;
      })();
      return expect(actualDelays).to.eql(expectedDelays);
    });
    it('can accept a user-defined delay base', function() {
      var actualDelays, expectedDelays, i, service;
      service = ddb({
        retryDelayOptions: {
          base: 100
        }
      });
      expectedDelays = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];
      actualDelays = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 0, ref = service.numRetries() - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          results.push(service.retryDelays(i));
        }
        return results;
      })();
      return expect(actualDelays).to.eql(expectedDelays);
    });
    it('can pass error through to user-defined custom backoff', function() {
      var customBackoff = function(retryCount, err) {
        if (err.code === 'NetworkingError') {
          return -1;
        } else {
          return 100 * retryCount;
        }
      };
      var service = ddb({
        retryDelayOptions: {
          customBackoff: customBackoff
        }
      });
      var err = {
        code: 'NetworkingError',
        message: 'Invalid character',
      };
      var delays = service.retryDelays(1, err);
      return expect(delays).to.eql(-1);
    });
    return it('can accept a user-defined custom backoff', function() {
      var actualDelays, customBackoff, expectedDelays, i, service;
      customBackoff = function(retryCount) {
        return 100 * retryCount;
      };
      service = ddb({
        retryDelayOptions: {
          customBackoff: customBackoff
        }
      });
      expectedDelays = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
      actualDelays = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 0, ref = service.numRetries() - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
          results.push(service.retryDelays(i));
        }
        return results;
      })();
      return expect(actualDelays).to.eql(expectedDelays);
    });
  });

  describe('CRC32 check', function() {
    var dynamo;
    dynamo = null;
    beforeEach(function() {
      return dynamo = ddb({
        accessKeyId: 'AKID',
        secretAccessKey: 'SECRET',
        region: 'us-west-2'
      });
    });

    if (AWS.util.isNode()) {
      it('does not verify response checksum when streaming', function(done) {
        var err, request, s;
        err = null;
        helpers.mockHttpResponse(200, {
          'x-amz-crc32': '0'
        }, '{"TableNames":["mock-table"]}');
        request = dynamo.listTables();
        s = request.createReadStream();
        s.on('error', function(e) {
          err = e;
        });
        s.on('end', function() {
          expect(err).to.eql(null);
          done();
        });
        s.on('data', function() {});
      });
    }

    it('does verify response checksum when not streaming', function() {
      var request;
      helpers.mockHttpResponse(200, {
        'x-amz-crc32': '1575962599'
      }, '{"TableNames":["mock-table"]}');
      request = dynamo.listTables();
      return request.send(function(err, data) {
        return expect(err).to.eql(null);
      });
    });

    it('does not verify response checksum when no [x-amz-crc32] header', function() {
      var request;
      helpers.mockHttpResponse(200, {}, '{"TableNames":["mock-table"]}');
      request = dynamo.listTables();
      return request.send(function(err, data) {
        return expect(err).to.eql(null);
      });
    });

    it('throws an error when response checksum does not match', function() {
      var request;
      helpers.mockHttpResponse(200, {
        'x-amz-crc32': '0'
      }, '{"TableNames":["mock-table"]}');
      request = dynamo.listTables();
      return request.send(function(err, data) {
        expect(err.code).to.eql('CRC32CheckFailed');
        return expect(data).to.eql(null);
      });
    });

    it('retries request when response checksum does not match', function() {
      var request;
      helpers.mockHttpResponse(200, {
        'x-amz-crc32': '0'
      }, '{"TableNames":["mock-table"]}');
      request = dynamo.listTables();
      return request.send(function(err, data) {
        return expect(this.retryCount).to.eql(10);
      });
    });
  });
});
