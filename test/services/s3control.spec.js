var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('AWS.S3Control', function() {

  var env = process.env;
  afterEach(function() {
    process.env = env;
  });
  beforeEach(function() {
    process.env = {};
  });

  it('should add hostId and requestId to exception response', function() {
    var client = new AWS.S3Control({region: 'us-east-1'});
    var request = client.deletePublicAccessBlock({AccountId: '111'});
    helpers.mockHttpResponse(404, {
      'x-amz-request-id': 'requestId123',
      'x-amz-id-2': 'hostId321',
    }, '<?xml version="1.0" encoding="UTF-8"?><ErrorResponse><Error><Code>NoSuchAccount</Code><Message>The account was not found</Message><AccountId>111</AccountId></Error><RequestId>requestId123</RequestId><HostId>hostId321</HostId></ErrorResponse>');
    request.send(function(err, data) {
      expect(data).to.eql(null);
      expect(err.extendedRequestId).to.eql('hostId321');
      expect(err.requestId).to.eql('requestId123');
      expect(err.code).to.eql('NoSuchAccount');
      expect(err.message).to.eql('The account was not found');
    });
  });

  it('should add hostId and requestId from successful response', function() {
    var client = new AWS.S3Control({region: 'us-east-1'});
    var request = client.deletePublicAccessBlock({AccountId: '111'});
    helpers.mockHttpResponse(200, {
      'x-amz-request-id': 'requestId123',
      'x-amz-id-2': 'hostId321',
    }, '');
    request.send(function(err, data) {
      expect(err).to.eql(null);
      expect(this.extendedRequestId).to.eql('hostId321');
      expect(this.requestId).to.eql('requestId123');
    });
  });

  it('should use the V4 signer', function() {
    var client = new AWS.S3Control();
    expect(client.getSignerClass()).to.eql(AWS.Signers.V4);
  });

  it('does not double encode path for S3Control', function() {
    var client = new AWS.S3Control();
    var req;
    req = client.putPublicAccessBlock({
      AccountId: '111',
      PublicLockdownConfiguration: {
        RejectPublicAcls: false
      }
    }).build();
    req.httpRequest.path = '/fake%3Apath';
    var SignerClass = client.getSignerClass(req);
    signer = new SignerClass(req.httpRequest, req.service.api.signingName || req.service.api.endpointPrefix);
    return expect(signer.canonicalString().split('\n')[1]).to.equal('/fake%3Apath');
  });

  it('validate accountId type', function() {
    var client = new AWS.S3Control();
    var possibleValues = [123, null, undefined, NaN, {}, ['a'], AWS.util.buffer.toBuffer('111')];
    for (var i = 0; i < possibleValues.length; i++) {
      var accountId = possibleValues[i];
      var request = client.getPublicAccessBlock({AccountId: accountId}).build();
      var response = request.response;
      expect(response.error).not.to.be.null;
      expect(response.data).to.eql(null);
      expect(response.error.code).to.eql('ValidationError');
      expect(response.error.message).to.eql('AccountId must be a string.');
    }
  });

  it('validate accountId length', function() {
    var client = new AWS.S3Control({region: 'us-east-1'});

    var stringlength = [0, 64, 65];
    for (var i = 0; i < stringlength.length; i++) {
      var len = stringlength[i];
      var wrongLengthString = '';
      for (var j = 0; j < len; j++) wrongLengthString += '1';
      var request = client.getPublicAccessBlock({AccountId: wrongLengthString}).build();
      var response = request.response;
      expect(response.error).not.to.be.null;
      expect(response.data).to.eql(null);
      expect(response.error.code).to.eql('ValidationError');
      expect(response.error.message).to.eql('AccountId length should be between 1 to 63 characters, inclusive.');
    }
    stringlength = [1, 16, 32, 63];
    for (var i = 0; i < stringlength.length; i++) {
      var len = stringlength[i];
      var stringRightLength = '';
      for (var j = 0; j < len; j++) stringRightLength += '1';
      var request = client.getPublicAccessBlock({AccountId: stringRightLength}).build();
      var response = request.response;
      expect(response.error).to.be.null;
    }
  });

  it('validate accountId pattern', function() {
    var client = new AWS.S3Control({region: 'us-east-1'});
    var wrongStrings = ['a.b', '.ab', 'ab.', '-ab', 'Ab-', 'asdw*', '.', '-'];
    for (var i = 0; i < wrongStrings.length; i++) {
      var request = client.getPublicAccessBlock({AccountId: wrongStrings[i]});
      request.send();
      expect(request.response.error).not.to.be.undefined;
      expect(request.response.data).to.eql(null);
      expect(request.response.error.code).to.eql('ValidationError');
      expect(request.response.error.message).to.eql('AccountId should be hostname compatible. AccountId: ' + wrongStrings[i]);
    }

    var correctStrings = ['a', '6', 'B', 'a-b', '6-D', 'C-6', 'a-b-c'];
    for (var i = 0; i < correctStrings.length; i++) {
      var request = client.getPublicAccessBlock({AccountId: correctStrings[i]});
      request.send();
      expect(request.response.error).to.be.null;
    }
  });

  describe('Access Point', function() {
    var iniLoader = AWS.util.iniLoader;
    afterEach(function() {
      if (AWS.util.isNode()) {
        iniLoader.clearCachedFiles();
      }
    });

    describe('validateArnService', function() {
      it('should throw if supplied non-s3 ARN', function(done) {
        var client = new AWS.S3Control();
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:sqs:us-west-2:123456789012:someresource'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('expect \'s3\' or \'s3-outposts\' or \'s3-object-lambda\' in ARN service component');
          done();
        });
      });
    });

    describe('validateArnAccount', function() {
      it('should throw if supplied empty accountId in ARN', function(done) {
        var client = new AWS.S3Control();
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-west-2::outpost:op-01234567890123456:bucket:mybucket'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN accountID does not match regex "[0-9]{12}"');
          done();
        });
      });

      it('should throw if supplied invalid accountId in ARN', function(done) {
        var client = new AWS.S3Control();
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-west-2:invalidaccountID:outpost:op-01234567890123456:bucket:mybucket'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN accountID does not match regex "[0-9]{12}"');
          done();
        });
      });

      it('should throw if different accountId is passed in ARN and in params', function(done) {
        var client = new AWS.S3Control();
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:bucket:mybucket',
          AccountId: '123456789021'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('ValidationError');
          expect(err.message).to.equal('AccountId in ARN and request params should be same.');
          done();
        });
      });
    });

    describe('validateArnRegion', function() {
      it('should throw if supplied empty region in ARN', function(done) {
        var client = new AWS.S3Control();
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts::123456789012:bucket:mybucket'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN region is empty');
          done();
        });
      });

      it('should correctly generate access point endpoint for s3-external-1', function() {
        var client = new AWS.S3Control({region: 'us-east-1'});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:s3-external-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
        });
        var built = request.build(function() {});
        expect(
          built.httpRequest.endpoint.hostname
        ).to.equal('s3-outposts.s3-external-1.amazonaws.com');
      });

      it('should correctly generate access point endpoint when useFipsEndpoint=true', function() {
        var client = new AWS.S3Control({region: 'us-gov-west-1', useFipsEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-gov-west-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
        });
        var built = request.build(function() {});
        expect(
          built.httpRequest.endpoint.hostname
        ).to.equal('s3-outposts-fips.us-gov-west-1.amazonaws.com');
      });

      it('should throw when fips region is passed in ARN', function() {
        var client = new AWS.S3Control({region: 'us-gov-west-1', useFipsEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:fips-us-gov-west-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
        });
        var error;
        request.build(function(err) {
          error = err;
        });
        expect(error.name).to.equal('InvalidConfiguration');
        expect(error.message).to.equal('FIPS region not allowed in ARN');
      });

      it('should use regions from ARN if s3UseArnRegion config is set to false', function(done) {
        var client = new AWS.S3Control({region: 'us-west-2', s3UseArnRegion: false});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Configured region conflicts with access point region');
          done();
        });
      });

      if (AWS.util.isNode()) {
        it('should throw if AWS_S3_USE_ARN_REGION env is invalid', function(done) {
          process.env.AWS_S3_USE_ARN_REGION = 'foo';
          var client = new AWS.S3Control({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = client.getBucket({
            Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
          });
          request.send(function(err, data) {
            expect(err).to.exist;
            expect(err.name).to.equal('InvalidConfiguration');
            expect(err.message).to.equal('AWS_S3_USE_ARN_REGION only accepts true or false. Got foo');
            done();
          });
        });

        it('should use regions from ARN if AWS_S3_USE_ARN_REGION env is set', function(done) {
          process.env.AWS_S3_USE_ARN_REGION = 'false';
          var client = new AWS.S3Control({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = client.getBucket({
            Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
          });
          request.send(function(err, data) {
            expect(err).to.exist;
            expect(err.name).to.equal('InvalidConfiguration');
            expect(err.message).to.equal('Configured region conflicts with access point region');
            done();
          });
        });

        it('should throw s3_use_arn_region config is invalid', function(done) {
          var mock = '[default]\ns3_use_arn_region = foo';
          process.env.HOME = 'foo';
          helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock);
          var client = new AWS.S3Control({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = client.getBucket({
            Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/bucket/mybucket'
          });
          request.send(function(err, data) {
            expect(err).to.exist;
            // expect(err.name).to.equal('InvalidConfiguration');
            expect(err.message).to.equal('s3_use_arn_region only accepts true or false. Got foo');
            done();
          });
        });

        it('should use regions from ARN if s3_use_arn_region config is set', function(done) {
          var mock = '[default]\ns3_use_arn_region = false';
          process.env.HOME = 'foo';
          helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock);
          var client = new AWS.S3Control({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = client.getBucket({
            Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
          });
          request.send(function(err, data) {
            expect(err).to.exist;
            expect(err.name).to.equal('InvalidConfiguration');
            expect(err.message).to.equal('Configured region conflicts with access point region');
            done();
          });
        });
      }

      it('should throw if cross region enabled but region from different partition', function(done) {
        var client = new AWS.S3Control({region: 'us-west-2'});
        var request = client.getBucket({
          Bucket: 'arn:aws-cn:s3:cn-north-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Configured region and access point region not in same partition');
          done();
        });
      });

      it('should throw if useAccelerateEndpoint is set to true', function(done) {
        var client = new AWS.S3Control({region: 'us-west-2', useAccelerateEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/bucket/mybucket'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('useAccelerateEndpoint config is not supported with access point ARN');
          done();
        });
      });

      it('should throw if useDualstackEndpoint it set to true for outposts Arn', function(done) {
        var client = new AWS.S3Control({region: 'us-west-2', useDualstackEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.getBucket({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/accesspoint/myendpoint'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Dualstack is not supported with outposts access point ARN');
          done();
        });
      });
    });
  });

  describe('validateOutpostsArn', function() {
    it('should throw if ARN doesn\'t begin with outpost', function(done) {
      var client = new AWS.S3Control();
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getBucket({
        Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:bucket_name:mybucket'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidARN');
        expect(err.message).to.equal('ARN resource should begin with \'outpost/\'');
        done();
      });
    });

    it('should throw if outpost ID is not valid RFC 3986 Host', function(done) {
      var client = new AWS.S3Control();
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getBucket({
        Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op.outpostId:accesspoint:mybucket'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidARN');
        expect(err.message).to.equal('Outpost resource in ARN is not DNS compatible. Got op.outpostId');
        done();
      });
    });
  });

  describe('validateOutpostsAccessPointArn', function() {
    it('should throw if ARN resource format is incorrect', function(done) {
      var client = new AWS.S3Control();
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getAccessPoint({
        Name: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:mybucket:blah'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidARN');
        expect(err.message).to.equal(
          'Outposts ARN should have two resources outpost/{outpostId}/accesspoint/{accesspointName}'
        );
        done();
      });
    });

    it('should throw if name is not dns compatible', function(done) {
      var client = new AWS.S3Control();
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getAccessPoint({
        Name: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:my.accesspoint'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidARN');
        expect(err.message).to.equal('Access point resource in ARN is not DNS compatible. Got my.accesspoint');
        done();
      });
    });
  });

  describe('validateOutpostsBucketArn', function() {
    it('should throw if ARN resource format is incorrect', function(done) {
      var client = new AWS.S3Control();
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getBucket({
        Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:mybucket:blah'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidARN');
        expect(err.message).to.equal(
          'Bucket ARN should have two resources outpost/{outpostId}/bucket/{accesspointName}'
        );
        done();
      });
    });

    it('should throw if name is not dns compatible', function(done) {
      var client = new AWS.S3Control();
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getBucket({
        Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:bucket:my.bucket'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidARN');
        expect(err.message).to.equal('Bucket ARN is not DNS compatible. Got my.bucket');
        done();
      });
    });
  });

  describe('validatePopulateUriFromArn', function() {
    it('should throw if manually-set endpoint is present', function(done) {
      var client = new AWS.S3Control({region: 'us-west-2', endpoint: 'https://bucket.s3.us-west-2.amazonaws.com'});
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getBucket({
        Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidConfiguration');
        expect(err.message).to.equal('Custom endpoint is not compatible with access point ARN');
        done();
      });
    });

    it('should throw if s3forcePathStyle co-exists with access point ARN', function(done) {
      var client = new AWS.S3Control({s3ForcePathStyle: true});
      helpers.mockHttpResponse(200, {}, '');
      var request = client.getBucket({
        Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/bucket/mybucket'
      });
      request.send(function(err, data) {
        expect(err).to.exist;
        expect(err.name).to.equal('InvalidConfiguration');
        expect(err.message).to.equal('Cannot construct path-style endpoint with access point');
        done();
      });
    });
  });
});
