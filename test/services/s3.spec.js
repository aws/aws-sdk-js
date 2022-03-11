var helpers = require('../helpers'),
  AWS = helpers.AWS,
  Stream = AWS.util.stream,
  buffer = AWS.util.buffer;

describe('AWS.S3', function() {
  var s3 = null;
  var request = function(operation, params) {
    return s3.makeRequest(operation, params);
  };
  var env = process.env;
  afterEach(function() {
    process.env = env;
  });
  beforeEach(function(done) {
    process.env = {};
    s3 = new AWS.S3({
      region: void 0
    });
    s3.clearBucketRegionCache();
    return done();
  });

  describe('writeGetObjectResponse', function() {
    it('makes the request to object-lambda on writeGetObjectResponse', function() {
      s3client = new AWS.S3({});
      s3client.makeRequest = function () {
        return { httpRequest: { endpoint: {} }};
      };
      var req = s3client.writeGetObjectResponse({
        RequestRoute: 'myroute',
        RequestToken: 'mytoken',
      });
      expect(req.httpRequest.endpoint.host).to.equal('s3-object-lambda.mock-region.amazonaws.com');
    });
  });

  describe('constructor', function() {
    it('requires endpoint if s3BucketEndpoint is passed', function() {
      expect(function() {
        return new AWS.S3({
          s3BucketEndpoint: true
        });
      }).to['throw'](/An endpoint must be provided/);
    });
  });

  describe('endpoint', function() {
    it('sets hostname to s3.amazonaws.com when region is un-specified', function() {
      s3 = new AWS.S3({
        region: void 0
      });
      expect(s3.endpoint.hostname).to.equal('s3.amazonaws.com');
    });

    it('sets hostname to s3.amazonaws.com when region is us-east-1', function() {
      s3 = new AWS.S3({
        region: 'us-east-1'
      });
      expect(s3.endpoint.hostname).to.equal('s3.amazonaws.com');
    });

    it('sets region to us-east-1 when unspecified', function() {
      s3 = new AWS.S3({
        region: 'us-east-1'
      });
      expect(s3.config.region).to.equal('us-east-1');
    });

    it('combines the region with s3 in the endpoint using a .', function() {
      s3 = new AWS.S3({
        region: 'us-west-1'
      });
      expect(s3.endpoint.hostname).to.equal('s3.us-west-1.amazonaws.com');
    });

    it('sets a region-specific dualstack endpoint when dualstack enabled', function() {
      s3 = new AWS.S3({
        region: 'us-west-1',
        useDualstackEndpoint: true
      });
      expect(s3.endpoint.hostname).to.equal('s3.dualstack.us-west-1.amazonaws.com');

      s3 = new AWS.S3({
        region: 'us-east-1',
        useDualstackEndpoint: true
      });
      expect(s3.endpoint.hostname).to.equal('s3.dualstack.us-east-1.amazonaws.com');

      s3 = new AWS.S3({
        region: 'cn-north-1',
        useDualstackEndpoint: true
      });
      expect(s3.endpoint.hostname).to.equal('s3.dualstack.cn-north-1.amazonaws.com.cn');
    });
  });

  describe('clearing bucket region cache', function() {
    beforeEach(function() {
      s3.bucketRegionCache = {
        a: 'rg-fake-1',
        b: 'rg-fake-2',
        c: 'rg-fake-3'
      };
    });

    it('clears one bucket name', function() {
      s3.clearBucketRegionCache('b');
      expect(s3.bucketRegionCache).to.eql({
        a: 'rg-fake-1',
        c: 'rg-fake-3'
      });
    });

    it('clears a list of bucket names', function() {
      s3.clearBucketRegionCache(['a', 'c']);
      expect(s3.bucketRegionCache).to.eql({
        b: 'rg-fake-2'
      });
    });

    it('clears entire cache', function() {
      s3.clearBucketRegionCache();
      expect(s3.bucketRegionCache).to.eql({});
    });
  });

  describe('validateBucketName', function() {
    describe('will not throw an error when', function() {
      it('using sigv4 and the "Bucket" parameter does not contain forward slashes', function(done) {
        helpers.mockResponses([
          {
            data: {
              ETag: 'ETAG'
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v4'});
        s3.putObject({Bucket: 'foo', Key: 'bar/baz', Body: 'test'}, function(err, data) {
          expect(null).to.eql(null);
          expect(data).to.eql({ETag: 'ETAG'});
          done();
        });
      });

      it('using sigv2 and the "Bucket" parameter does not contain forward slashes', function(done) {
        helpers.mockResponses([
          {
            data: {
              ETag: 'ETAG'
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v2'});
        s3.putObject({Bucket: 'foo', Key: 'bar/baz', Body: 'test'}, function(err, data) {
          expect(null).to.eql(null);
          expect(data).to.eql({ETag: 'ETAG'});
          done();
        });
      });

      it('using sigv2 and the "Bucket" parameter contains forward slashes', function(done) {
        helpers.mockResponses([
          {
            data: {
              ETag: 'ETAG'
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v2'});
        s3.putObject({Bucket: 'foo/bar', Key: 'baz', Body: 'test'}, function(err, data) {
          expect(null).to.eql(null);
          expect(data).to.eql({ETag: 'ETAG'});
          done();
        });
      });

      it('using sigv4 and the "Bucket" parameter does not exist', function(done) {
        helpers.mockResponses([
          {
            data: {
              Buckets: []
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v4'});
        s3.listBuckets(function(err, data) {
          expect(null).to.eql(null);
          expect(data).to.eql({Buckets: []});
          done();
        });
      });

      it('using sigv2 and the "Bucket" parameter does not exist', function(done) {
        helpers.mockResponses([
          {
            data: {
              Buckets: []
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v2'});
        s3.listBuckets(function(err, data) {
          expect(null).to.eql(null);
          expect(data).to.eql({Buckets: []});
          done();
        });
      });

      it('using sigv2 and the "Bucket" parameter contains forward slashes and "Key" exists', function(done) {
        helpers.mockResponses([
          {
            data: {
              ETag: 'ETAG'
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v2'});
        s3.putObject({Bucket: 'foo/bar', Key: 'baz', Body: 'test'}, function(err, data) {
          expect(null).to.eql(null);
          expect(data).to.eql({ETag: 'ETAG'});
          done();
        });
      });
    });

    describe('when encountering a "Bucket" and "Key" using sigv4', function() {
      it('will move characters after forward slash in "Bucket" to front of "Key"', function(done) {
        helpers.mockResponses([
          {
            data: {
              ETag: 'ETAG'
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v4'});
        s3.putObject({Bucket: 'foo/bar/dinosaur', Key: 'baz', Body: 'test'}, function(err, data) {
          expect(this.request.params.Bucket).to.eql('foo');
          expect(this.request.params.Key).to.eql('bar/dinosaur/baz');
          expect(null).to.eql(null);
          expect(data).to.eql({ETag: 'ETAG'});
          done();
        });
      });

      it('will prepend trailing slashes in "Bucket" to the "Key"', function(done) {
        helpers.mockResponses([
          {
            data: {
              ETag: 'ETAG'
            }
          }
        ]);
        var s3 = new AWS.S3({signatureVersion: 'v4'});
        s3.putObject({Bucket: 'foo/', Key: '', Body: 'test'}, function(err, data) {
          expect(this.request.params.Bucket).to.eql('foo');
          expect(this.request.params.Key).to.eql('/');
          expect(null).to.eql(null);
          expect(data).to.eql({ETag: 'ETAG'});
          done();
        });
      });
    });

    describe('will throw an error when', function() {
      it('using sigv4 and the "Bucket" parameter starts with a forward slash', function(done) {
        var s3 = new AWS.S3({signatureVersion: 'v4'});
        s3.createBucket({Bucket: '/foo'}, function(err, data) {
          expect(err.code).to.eql('InvalidBucket');
          done();
        });
      });

      it('using sigv4 and the "Bucket" parameter contains forward slashes and "Key" is not defined', function(done) {
        var s3 = new AWS.S3({signatureVersion: 'v4'});
        s3.createBucket({Bucket: 'foo/bar'}, function(err, data) {
          expect(err.code).to.eql('InvalidBucket');
          done();
        });
      });
    });
  });

  describe('getSignatureVersion', function() {
    describe('when using presigned requests', function() {
      var req;
      req = null;
      beforeEach(function(done) {
        req = request('mock');
        helpers.spyOn(req, 'isPresigned').andReturn(true);
        done();
      });

      describe('will return "s3" when', function() {
        it('user does not specify a signatureVersion for a region that supports v2', function(done) {
          s3 = new AWS.S3({
            region: 'eu-west-1'
          });
          expect(s3.getSignatureVersion(req)).to.equal('s3');
          done();
        });

        it('user specifies a signatureVersion of s3', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 's3'
          });
          expect(s3.getSignatureVersion(req)).to.equal('s3');
          done();
        });

        it('user specifies a signatureVersion of v2', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v2'
          });
          expect(s3.getSignatureVersion(req)).to.equal('s3');
          done();
        });
      });

      describe('will return "v4" when', function() {
        it('user does not specify a signatureVersion for a region that supports only v4', function(done) {
          s3 = new AWS.S3({
            region: 'eu-central-1'
          });
          expect(s3.getSignatureVersion(req)).to.equal('v4');
          done();
        });

        it('user specifies a signatureVersion of v4', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v4'
          });
          expect(s3.getSignatureVersion(req)).to.equal('v4');
          done();
        });
      });
    });

    describe('when not using presigned requests', function() {
      describe('will return "s3" when', function() {
        it('user specifies a signatureVersion of s3', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 's3'
          });
          expect(s3.getSignatureVersion()).to.equal('s3');
          done();
        });

        it('user specifies a signatureVersion of v2', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v2'
          });
          expect(s3.getSignatureVersion()).to.equal('s3');
          done();
        });
      });

      describe('will return "v4" when', function() {
        it('user does not specify a signatureVersion', function(done) {
          s3 = new AWS.S3({
            region: 'eu-central-1'
          });
          expect(s3.getSignatureVersion()).to.equal('v4');
          done();
        });

        it('user specifies a signatureVersion of v4', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v4'
          });
          expect(s3.getSignatureVersion()).to.equal('v4');
          done();
        });
      });
    });
  });

  describe('getSigningName', function() {
    it('returns serviceName from BucketArn if present', function(done) {
      s3 = new AWS.S3({
        region: 'us-east-1'
      });
      var req = { _parsedArn: { service: 'SERVICE_NAME' } };
      expect(s3.getSigningName(req)).to.equal(
        req._parsedArn.service
      );
      done();
    });

    it('returns serviceName from super.signingName if BucketArn not present', function(done) {
      s3 = new AWS.S3({
        region: 'us-east-1'
      });
      var serviceName = 'SERVICE_NAME';
      var getSigningName = AWS.Service.prototype.getSigningName;
      AWS.Service.prototype.getSigningName = function() { return serviceName; };
      expect(s3.getSigningName()).to.equal(serviceName);
      AWS.Service.prototype.getSigningName = getSigningName;
      done();
    });
  });

  describe('getSignerClass', function() {
    var getVersion;
    getVersion = function(signer) {
      if (signer === AWS.Signers.S3) {
        return 's3';
      } else if (signer === AWS.Signers.V4) {
        return 'v4';
      } else if (signer === AWS.Signers.V2) {
        return 'v2';
      }
    };

    describe('when using presigned requests', function() {
      var req;
      req = null;
      beforeEach(function(done) {
        req = request('mock');
        helpers.spyOn(req, 'isPresigned').andReturn(true);
        done();
      });

      describe('will return an s3 (v2) signer when', function() {
        it('user does not specify a signatureVersion for a region that supports v2', function(done) {
          s3 = new AWS.S3({
            region: 'us-east-1'
          });
          expect(getVersion(s3.getSignerClass(req))).to.equal('s3');
          done();
        });

        it('user specifies a signatureVersion of s3', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 's3'
          });
          expect(getVersion(s3.getSignerClass(req))).to.equal('s3');
          done();
        });

        it('user specifies a signatureVersion of v2', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v2'
          });
          expect(getVersion(s3.getSignerClass(req))).to.equal('s3');
          done();
        });
      });

      describe('will return a v4 signer when', function() {
        it('user does not specify a signatureVersion for a region that supports only v4', function(done) {
          s3 = new AWS.S3({
            region: 'eu-central-1'
          });
          expect(getVersion(s3.getSignerClass(req))).to.equal('v4');
          done();
        });

        it('user specifies a signatureVersion of v4', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v4'
          });
          expect(getVersion(s3.getSignerClass(req))).to.equal('v4');
          done();
        });
      });
    });

    describe('when not using presigned requests', function() {
      describe('will return an s3 (v2) signer when', function() {
        it('user specifies a signatureVersion of s3', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 's3'
          });
          expect(getVersion(s3.getSignerClass())).to.equal('s3');
          done();
        });

        it('user specifies a signatureVersion of v2', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v2'
          });
          expect(getVersion(s3.getSignerClass())).to.equal('s3');
          done();
        });
      });

      describe('will return a v4 signer when', function() {
        it('user does not specify a signatureVersion', function(done) {
          s3 = new AWS.S3({
            region: 'eu-central-1'
          });
          expect(getVersion(s3.getSignerClass())).to.equal('v4');
          done();
        });

        it('user specifies a signatureVersion of v4', function(done) {
          s3 = new AWS.S3({
            signatureVersion: 'v4'
          });
          expect(getVersion(s3.getSignerClass())).to.equal('v4');
          done();
        });
      });
    });
  });

  describe('building a request', function() {
    var build = function(operation, params) {
      return request(operation, params).build().httpRequest;
    };

    it('obeys the configuration for s3ForcePathStyle', function() {
      var config = new AWS.Config({
        s3ForcePathStyle: true,
        accessKeyId: 'AKID',
        secretAccessKey: 'SECRET'
      });
      s3 = new AWS.S3(config);
      expect(s3.config.s3ForcePathStyle).to.equal(true);
      var req = build('headObject', {
        Bucket: 'bucket',
        Key: 'key'
      });
      expect(req.endpoint.hostname).to.equal('s3.amazonaws.com');
      expect(req.path).to.equal('/bucket/key');
    });

    it('does not enable path style if endpoint is a bucket', function() {
      s3 = new AWS.S3({
        endpoint: 'foo.bar',
        s3BucketEndpoint: true
      });
      var req = build('listObjects', {
        Bucket: 'bucket'
      });
      expect(req.endpoint.hostname).to.equal('foo.bar');
      expect(req.path).to.equal('/');
      expect(req.virtualHostedBucket).to.equal('bucket');
    });

    it('allows user override if an endpoint is specified', function() {
      s3 = new AWS.S3({
        endpoint: 'foo.bar',
        s3ForcePathStyle: true
      });
      var req = build('listObjects', {
        Bucket: 'bucket'
      });
      expect(req.endpoint.hostname).to.equal('foo.bar');
      expect(req.path).to.equal('/bucket');
    });

    it('allows user to use key that is substring of bucket', function() {
      var req = build('putObject', {
        Bucket: 'foobar',
        Key: 'foo'
      });
      expect(req.path).to.equal('/foo');
      expect(req.virtualHostedBucket).to.equal('foobar');
    });

    it('allows user to use key that matches bucket', function() {
      var req = build('putObject', {
        Bucket: 'foobar',
        Key: 'foobar'
      });
      expect(req.path).to.equal('/foobar');
      expect(req.virtualHostedBucket).to.equal('foobar');
    });

    it('allows user to use key, with querystring param, that matches bucket', function() {
      var req = build('headObject', {
        Bucket: 'foobar',
        Key: 'foobar',
        VersionId: 'null'
      });
      expect(req.path).to.equal('/foobar?versionId=null');
      expect(req.virtualHostedBucket).to.equal('foobar');
    });

    it('does not allow non-bucket operations with s3BucketEndpoint set', function() {
      s3 = new AWS.S3({
        endpoint: 'foo.bar',
        s3BucketEndpoint: true,
        paramValidation: true
      });
      var req = s3.listBuckets().build();
      expect(req.response.error.code).to.equal('ConfigError');
    });

    it('corrects virtual-hosted bucket region on request if bucket region stored in cache', function() {
      var httpRequest, param, req;
      s3 = new AWS.S3({
        region: 'us-east-1'
      });
      s3.bucketRegionCache.name = 'us-west-2';
      param = {
        Bucket: 'name'
      };
      req = s3.headBucket(param).build();
      httpRequest = req.httpRequest;
      expect(httpRequest.region).to.equal('us-west-2');
      expect(httpRequest.endpoint.hostname).to.equal('name.s3.us-west-2.amazonaws.com');
      expect(httpRequest.headers.Host).to.equal('name.s3.us-west-2.amazonaws.com');
      expect(httpRequest.path).to.equal('/');
    });

    it('corrects path-style bucket region on request if bucket region stored in cache', function() {
      var httpRequest, param, req;
      s3 = new AWS.S3({
        region: 'us-east-1',
        s3ForcePathStyle: true
      });
      s3.bucketRegionCache.name = 'us-west-2';
      param = {
        Bucket: 'name'
      };
      req = s3.headBucket(param).build();
      httpRequest = req.httpRequest;
      expect(httpRequest.region).to.equal('us-west-2');
      expect(httpRequest.endpoint.hostname).to.equal('s3.us-west-2.amazonaws.com');
      expect(httpRequest.headers.Host).to.equal('s3.us-west-2.amazonaws.com');
      expect(httpRequest.path).to.equal('/name');
    });

    describe('with useAccelerateEndpoint set to true', function() {
      beforeEach(function() {
        s3 = new AWS.S3({
          useAccelerateEndpoint: true
        });
      });

      it('changes the hostname to use s3-accelerate for dns-comaptible buckets', function() {
        var req = build('getObject', {
          Bucket: 'foo',
          Key: 'bar'
        });
        expect(req.endpoint.hostname).to.equal('foo.s3-accelerate.amazonaws.com');
      });

      it('overrides s3BucketEndpoint configuration when s3BucketEndpoint is set', function() {
        s3 = new AWS.S3({
          useAccelerateEndpoint: true,
          s3BucketEndpoint: true,
          endpoint: 'foo.region.amazonaws.com'
        });
        var req = build('getObject', {
          Bucket: 'foo',
          Key: 'baz'
        });
        expect(req.endpoint.hostname).to.equal('foo.s3-accelerate.amazonaws.com');
      });

      describe('does not use s3-accelerate.dualstack or s3-accelerate', function() {
        it('on dns-incompatible buckets', function() {
          var req = build('getObject', {
            Bucket: 'foo.baz',
            Key: 'bar'
          });
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
        });

        it('on excluded operations', function() {
          var req = build('listBuckets');
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
          req = build('createBucket', {
            Bucket: 'foo'
          });
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
          req = build('deleteBucket', {
            Bucket: 'foo'
          });
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
        });
      });
    });

    describe('with useAccelerateEndpoint and dualstack set to true', function() {
      beforeEach(function() {
        s3 = new AWS.S3({
          useAccelerateEndpoint: true,
          useDualstackEndpoint: true
        });
      });

      it('changes the hostname to use s3-accelerate for dns-comaptible buckets', function() {
        var req = build('getObject', {
          Bucket: 'foo',
          Key: 'bar'
        });
        expect(req.endpoint.hostname).to.equal('foo.s3-accelerate.dualstack.amazonaws.com');
      });

      it('overrides s3BucketEndpoint configuration when s3BucketEndpoint is set', function() {
        var req;
        s3 = new AWS.S3({
          useAccelerateEndpoint: true,
          useDualstackEndpoint: true,
          s3BucketEndpoint: true,
          endpoint: 'foo.region.amazonaws.com'
        });
        req = build('getObject', {
          Bucket: 'foo',
          Key: 'baz'
        });
        expect(req.endpoint.hostname).to.equal('foo.s3-accelerate.dualstack.amazonaws.com');
      });

      describe('does not use s3-accelerate.dualstack or s3-accelerate', function() {
        it('on dns-incompatible buckets', function() {
          var req = build('getObject', {
            Bucket: 'foo.baz',
            Key: 'bar'
          });
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
        });

        it('on excluded operations', function() {
          var req = build('listBuckets');
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
          req = build('createBucket', {
            Bucket: 'foo'
          });
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
          req = build('deleteBucket', {
            Bucket: 'foo'
          });
          expect(req.endpoint.hostname).to.not.contain('s3-accelerate');
        });
      });
    });

    describe('uri escaped params', function() {
      it('uri-escapes path and querystring params', function() {
        var params = {
          Bucket: 'bucket',
          Key: 'a b c',
          VersionId: 'a&b'
        };
        var req = build('headObject', params);
        expect(req.path).to.equal('/a%20b%20c?versionId=a%26b');
      });

      it('does not uri-escape forward slashes in the path', function() {
        var params = {
          Bucket: 'bucket',
          Key: 'k e/y'
        };
        var req = build('headObject', params);
        expect(req.path).to.equal('/k%20e/y');
      });

      it('ensures a single forward slash exists', function() {
        var req = build('listObjects', {
          Bucket: 'bucket'
        });
        expect(req.path).to.equal('/');
        req = build('listObjects', {
          Bucket: 'bucket',
          MaxKeys: 123
        });
        expect(req.path).to.equal('/?max-keys=123');
      });
    });

    describe('adding Expect: 100-continue', function() {
      if (AWS.util.isNode()) {
        it('does not add expect header to payloads less than 1MB', function() {
          var req = build('putObject', {
            Bucket: 'bucket',
            Key: 'key',
            Body: buffer.alloc(1024 * 1024 - 1)
          });
          expect(req.headers['Expect']).not.to.exist;
        });

        it('adds expect header to payloads greater than 1MB', function() {
          var req = build('putObject', {
            Bucket: 'bucket',
            Key: 'key',
            Body: buffer.alloc(1024 * 1024 + 1)
          });
          expect(req.headers['Expect']).to.equal('100-continue');
        });
      }

      if (AWS.util.isBrowser()) {
        beforeEach(function() {
          helpers.spyOn(AWS.util, 'isBrowser').andReturn(true);
        });

        it('does not add expect header in the browser', function() {
          var req = build('putObject', {
            Bucket: 'bucket',
            Key: 'key',
            Body: new Buffer(1024 * 1024 + 1)
          });
          expect(req.headers['Expect']).not.to.exist;
        });
      }
    });

    describe('with s3DisableBodySigning set to true', function() {
      it('will disable body signing when using signature version 4 and the endpoint uses https', function() {
        s3 = new AWS.S3({
          s3DisableBodySigning: true,
          signatureVersion: 'v4'
        });
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: AWS.util.buffer.alloc(1024 * 1024 * 5)
        });
        expect(req.headers['X-Amz-Content-Sha256']).to.equal('UNSIGNED-PAYLOAD');
      });

      it('will compute contentMD5', function() {
        s3 = new AWS.S3({
          s3DisableBodySigning: true,
          signatureVersion: 'v4'
        });
        var buf = AWS.util.buffer.alloc(1024 * 1024 * 5);
        buf.fill(0);
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: buf
        });
        expect(req.headers['Content-MD5']).to.equal('XzY+DlipXwbL6bvGYsXftg==');
      });

      it('will not disable body signing when the endpoint is not https', function() {
        s3 = new AWS.S3({
          s3DisableBodySigning: true,
          signatureVersion: 'v4',
          sslEnabled: false
        });
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: AWS.util.buffer.alloc(1024 * 1024 * 5)
        });
        expect(req.headers['X-Amz-Content-Sha256']).to.exist;
        expect(req.headers['X-Amz-Content-Sha256']).to.not.equal('UNSIGNED-PAYLOAD');
      });

      it('will have no effect when sigv2 signing is used', function() {
        s3 = new AWS.S3({
          s3DisableBodySigning: true,
          signatureVersion: 's3',
          sslEnabled: true
        });
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: AWS.util.buffer.alloc(1024 * 1024 * 5)
        });
        expect(req.headers['X-Amz-Content-Sha256']).to.not.exist;
      });
    });

    describe('with s3DisableBodySigning set to false', function() {
      it('will sign the body when sigv4 is used', function() {
        s3 = new AWS.S3({
          s3DisableBodySigning: false,
          signatureVersion: 'v4'
        });
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: AWS.util.buffer.alloc(1024 * 1024 * 5)
        });
        expect(req.headers['X-Amz-Content-Sha256']).to.exist;
        expect(req.headers['X-Amz-Cotnent-Sha256']).to.not.equal('UNSIGNED-PAYLOAD');
      });

      it('will have no effect when sigv2 signing is used', function() {
        s3 = new AWS.S3({
          s3DisableBodySigning: false,
          signatureVersion: 's3',
          sslEnabled: true
        });
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: AWS.util.buffer.alloc(1024 * 1024 * 5)
        });
        expect(req.headers['X-Amz-Content-Sha256']).to.not.exist;
      });
    });

    describe('adding Content-Type', function() {
      beforeEach(function() {
        helpers.spyOn(AWS.util, 'isBrowser').andReturn(true);
      });

      it('adds default content-type when not supplied', function() {
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: 'body'
        });
        expect(req.headers['Content-Type']).to.equal('application/octet-stream; charset=UTF-8');
      });

      it('does not add content-type for GET/HEAD requests', function() {
        var req = build('getObject', {
          Bucket: 'bucket',
          Key: 'key'
        });
        expect(req.headers['Content-Type']).not.to.exist;
        req = build('headObject', {
          Bucket: 'bucket',
          Key: 'key'
        });
        expect(req.headers['Content-Type']).not.to.exist;
      });

      it('adds charset to existing content-type if not supplied', function() {
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: 'body',
          ContentType: 'text/html'
        });
        expect(req.headers['Content-Type']).to.equal('text/html; charset=UTF-8');
      });

      it('normalized charset to uppercase', function() {
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: 'body',
          ContentType: 'text/html; charset=utf-8'
        });
        expect(req.headers['Content-Type']).to.equal('text/html; charset=UTF-8');
      });

      it('does not add charset to non-string data', function() {
        var req = build('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          Body: AWS.util.buffer.toBuffer('body'),
          ContentType: 'image/png'
        });
        expect(req.headers['Content-Type']).to.equal('image/png');
      });
    });

    describe('virtual-hosted vs path-style bucket requests', function() {
      describe('HTTPS', function() {
        beforeEach(function() {
          s3 = new AWS.S3({
            sslEnabled: true,
            region: void 0
          });
        });

        it('puts dns-compat bucket names in the hostname', function() {
          var req = build('headObject', {
            Bucket: 'bucket-name',
            Key: 'abc'
          });
          expect(req.method).to.equal('HEAD');
          expect(req.endpoint.hostname).to.equal('bucket-name.s3.amazonaws.com');
          expect(req.path).to.equal('/abc');
        });

        it('ensures the path contains / at a minimum when moving bucket', function() {
          var req = build('listObjects', {
            Bucket: 'bucket-name'
          });
          expect(req.endpoint.hostname).to.equal('bucket-name.s3.amazonaws.com');
          expect(req.path).to.equal('/');
        });

        it('puts dns-compat bucket names in path if they contain a dot', function() {
          var req = build('listObjects', {
            Bucket: 'bucket.name'
          });
          expect(req.endpoint.hostname).to.equal('s3.amazonaws.com');
          expect(req.path).to.equal('/bucket.name');
        });

        it('puts dns-compat bucket names in path if configured to do so', function() {
          s3 = new AWS.S3({
            sslEnabled: true,
            s3ForcePathStyle: true,
            region: void 0
          });
          var req = build('listObjects', {
            Bucket: 'bucket-name'
          });
          expect(req.endpoint.hostname).to.equal('s3.amazonaws.com');
          expect(req.path).to.equal('/bucket-name');
        });

        it('puts dns-incompat bucket names in path', function() {
          var req = build('listObjects', {
            Bucket: 'bucket_name'
          });
          expect(req.endpoint.hostname).to.equal('s3.amazonaws.com');
          expect(req.path).to.equal('/bucket_name');
        });
      });

      describe('HTTP', function() {
        beforeEach(function() {
          s3 = new AWS.S3({
            sslEnabled: false,
            region: void 0
          });
        });

        it('puts dns-compat bucket names in the hostname', function() {
          var req = build('listObjects', {
            Bucket: 'bucket-name'
          });
          expect(req.endpoint.hostname).to.equal('bucket-name.s3.amazonaws.com');
          expect(req.path).to.equal('/');
        });

        it('puts dns-compat bucket names in the hostname if they contain a dot', function() {
          var req = build('listObjects', {
            Bucket: 'bucket.name'
          });
          expect(req.endpoint.hostname).to.equal('bucket.name.s3.amazonaws.com');
          expect(req.path).to.equal('/');
        });

        it('puts dns-incompat bucket names in path', function() {
          var req = build('listObjects', {
            Bucket: 'bucket_name'
          });
          expect(req.endpoint.hostname).to.equal('s3.amazonaws.com');
          expect(req.path).to.equal('/bucket_name');
        });
      });

      describe('HTTPS dualstack', function() {
        beforeEach(function() {
          s3 = new AWS.S3({
            sslEnabled: true,
            region: void 0,
            useDualstackEndpoint: true
          });
        });

        it('puts dns-compat bucket names in the hostname', function() {
          var req = build('headObject', {
            Bucket: 'bucket-name',
            Key: 'abc'
          });
          expect(req.method).to.equal('HEAD');
          expect(req.endpoint.hostname).to.equal('bucket-name.s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/abc');
        });

        it('ensures the path contains / at a minimum when moving bucket', function() {
          var req = build('listObjects', {
            Bucket: 'bucket-name'
          });
          expect(req.endpoint.hostname).to.equal('bucket-name.s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/');
        });

        it('puts dns-compat bucket names in path if they contain a dot', function() {
          var req = build('listObjects', {
            Bucket: 'bucket.name'
          });
          expect(req.endpoint.hostname).to.equal('s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/bucket.name');
        });

        it('puts dns-compat bucket names in path if configured to do so', function() {
          s3 = new AWS.S3({
            sslEnabled: true,
            s3ForcePathStyle: true,
            region: void 0,
            useDualstackEndpoint: true
          });
          var req = build('listObjects', {
            Bucket: 'bucket-name'
          });
          expect(req.endpoint.hostname).to.equal('s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/bucket-name');
        });

        it('puts dns-incompat bucket names in path', function() {
          var req = build('listObjects', {
            Bucket: 'bucket_name'
          });
          expect(req.endpoint.hostname).to.equal('s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/bucket_name');
        });
      });

      describe('HTTP dualstack', function() {
        beforeEach(function() {
          s3 = new AWS.S3({
            sslEnabled: false,
            region: void 0,
            useDualstackEndpoint: true
          });
        });

        it('puts dns-compat bucket names in the hostname', function() {
          var req = build('listObjects', {
            Bucket: 'bucket-name'
          });
          expect(req.endpoint.hostname).to.equal('bucket-name.s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/');
        });

        it('puts dns-compat bucket names in the hostname if they contain a dot', function() {
          var req = build('listObjects', {
            Bucket: 'bucket.name'
          });
          expect(req.endpoint.hostname).to.equal('bucket.name.s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/');
        });

        it('puts dns-incompat bucket names in path', function() {
          var req = build('listObjects', {
            Bucket: 'bucket_name'
          });
          expect(req.endpoint.hostname).to.equal('s3.dualstack.us-east-1.amazonaws.com');
          expect(req.path).to.equal('/bucket_name');
        });
      });
    });
  });

  describe('SSE support', function() {
    beforeEach(function() {
      s3 = new AWS.S3;
    });

    it('fails if the scheme is not HTTPS: when SSECustomerKey is provided', function() {
      var req = s3.putObject({
        Bucket: 'bucket',
        Key: 'key',
        Body: 'object',
        SSECustomerKey: 'sse-key',
        SSECustomerAlgorithm: 'AES256'
      });
      req.httpRequest.endpoint.protocol = 'http:';
      req.build();
      expect(req.response.error.code).to.equal('ConfigError');
    });

    it('fails if the scheme is not HTTPS: when CopySourceSSECustomerKey is provided', function() {
      var req = s3.putObject({
        Bucket: 'bucket',
        Key: 'key',
        Body: 'object',
        CopySourceSSECustomerKey: 'sse-key',
        CopySourceSSECustomerAlgorithm: 'AES256'
      });
      req.httpRequest.endpoint.protocol = 'http:';
      req.build();
      expect(req.response.error.code).to.equal('ConfigError');
    });

    describe('SSECustomerKey', function() {
      it('encodes strings keys and fills in MD5', function() {
        var req = s3.putObject({
          Bucket: 'bucket',
          Key: 'key',
          Body: 'data',
          SSECustomerKey: 'KEY',
          SSECustomerAlgorithm: 'AES256'
        });
        req.build();
        expect(req.httpRequest.headers['x-amz-server-side-encryption-customer-key']).to.equal('S0VZ');
        expect(req.httpRequest.headers['x-amz-server-side-encryption-customer-key-MD5']).to.equal('O1lJ4MJrh3Z6R1Kidt6VcA==');
      });

      it('encodes blob keys and fills in MD5', function() {
        var req = s3.putObject({
          Bucket: 'bucket',
          Key: 'key',
          Body: 'data',
          SSECustomerKey: AWS.util.buffer.toBuffer('098f6bcd4621d373cade4e832627b4f6', 'hex'),
          SSECustomerAlgorithm: 'AES256'
        });
        req.build();
        expect(req.httpRequest.headers['x-amz-server-side-encryption-customer-key']).to.equal('CY9rzUYh03PK3k6DJie09g==');
        expect(req.httpRequest.headers['x-amz-server-side-encryption-customer-key-MD5']).to.equal('YM1UqSjLvLtue1WVurRqng==');
      });
    });

    describe('CopySourceSSECustomerKey', function() {
      it('encodes string keys and fills in MD5', function() {
        var req = s3.copyObject({
          Bucket: 'bucket',
          Key: 'key',
          CopySource: 'bucket/oldkey',
          Body: 'data',
          CopySourceSSECustomerKey: 'KEY',
          CopySourceSSECustomerAlgorithm: 'AES256'
        });
        req.build();
        expect(req.httpRequest.headers['x-amz-copy-source-server-side-encryption-customer-key']).to.equal('S0VZ');
        expect(req.httpRequest.headers['x-amz-copy-source-server-side-encryption-customer-key-MD5']).to.equal('O1lJ4MJrh3Z6R1Kidt6VcA==');
      });

      it('encodes blob keys and fills in MD5', function() {
        var req = s3.copyObject({
          Bucket: 'bucket',
          Key: 'key',
          CopySource: 'bucket/oldkey',
          Body: 'data',
          CopySourceSSECustomerKey: AWS.util.buffer.toBuffer('098f6bcd4621d373cade4e832627b4f6', 'hex'),
          CopySourceSSECustomerAlgorithm: 'AES256'
        });
        req.build();
        expect(req.httpRequest.headers['x-amz-copy-source-server-side-encryption-customer-key']).to.equal('CY9rzUYh03PK3k6DJie09g==');
        expect(req.httpRequest.headers['x-amz-copy-source-server-side-encryption-customer-key-MD5']).to.equal('YM1UqSjLvLtue1WVurRqng==');
      });
    });
  });

  describe('retry behavior', function() {
    it('retries RequestTimeout errors', function(done) {
      s3.config.maxRetries = 3;
      helpers.mockHttpResponse(400, {}, '<xml><Code>RequestTimeout</Code><Message>message</Message></xml>');
      s3.putObject(function(err, data) {
        expect(this.retryCount).to.equal(s3.config.maxRetries);
        done();
      });
    });
  });

  describe('upload', function() {
    it('sets it\'s signatureVersion to match the calling service client', function() {
      var s3 = new AWS.S3({
        region: 'us-east-1'
      });
      var uploader = s3.upload({
        Bucket: 'bucket',
        Key: 'key',
        Body: 'body'
      });
      expect(s3.getSignatureVersion()).to.equal(uploader.service.getSignatureVersion());
    });

    it('accepts parameters in upload() call', function() {
      helpers.mockResponses([
        {
          data: {
            ETag: 'ETAG'
          }
        }
      ]);
      var done = false;
      s3.upload({
        Bucket: 'bucket',
        Key: 'key',
        Body: 'body'
      }, function() {
        done = true;
      });
      expect(done).to.equal(true);
    });

    it('accepts options as a second parameter', function() {
      helpers.mockResponses([
        {
          data: {
            ETag: 'ETAG'
          }
        }
      ]);
      var upload = s3.upload({
        Bucket: 'bucket',
        Key: 'key',
        Body: 'body'
      }, {
        queueSize: 2
      }, function() {});
      expect(upload.queueSize).to.equal(2);
    });

    it('does not send if no callback is supplied', function() {
      s3.upload({
        Bucket: 'bucket',
        Key: 'key',
        Body: 'body'
      });
    });
  });
  describe('extractData', function() {
    it('caches bucket region if found in header', function() {
      var req = request('operation', {
        Bucket: 'name'
      });
      var resp = new AWS.Response(req);
      resp.httpResponse.headers = {
        'x-amz-bucket-region': 'rg-fake-1'
      };
      req.emit('extractData', [resp]);
      expect(s3.bucketRegionCache.name).to.equal('rg-fake-1');
    });
  });

  describe('errors with no XML body', function() {
    var extractError, maxKeysParam, regionReqOperation;
    regionReqOperation = AWS.util.isNode() ? 'headBucket' : 'listObjects';
    maxKeysParam = regionReqOperation === 'listObjects' ? 0 : void 0;
    extractError = function(statusCode, body, addHeaders, req) {
      if (!req) {
        req = request('operation');
      }
      var resp = new AWS.Response(req);
      resp.httpResponse.body = AWS.util.buffer.toBuffer(body || '');
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = {
        'x-amz-request-id': 'RequestId',
        'x-amz-id-2': 'ExtendedRequestId'
      };
      for (var header in addHeaders) {
        resp.httpResponse.headers[header] = addHeaders[header];
      }
      req.emit('extractError', [resp]);
      return resp.error;
    };

    it('handles 304 errors', function() {
      var error = extractError(304);
      expect(error.code).to.equal('NotModified');
      expect(error.message).to.equal(null);
    });

    it('handles 400 errors', function() {
      var error = extractError(400);
      expect(error.code).to.equal('BadRequest');
      expect(error.message).to.equal(null);
    });

    it('handles 403 errors', function() {
      var error = extractError(403);
      expect(error.code).to.equal('Forbidden');
      return expect(error.message).to.equal(null);
    });

    it('handles 404 errors', function() {
      var error = extractError(404);
      expect(error.code).to.equal('NotFound');
      expect(error.message).to.equal(null);
    });

    it('extracts the region from body and takes precedence over cache', function() {
      s3.bucketRegionCache.name = 'us-west-2';
      var req = request('operation', {
        Bucket: 'name'
      });
      var body = '<Error>\n  <Code>InvalidArgument</Code>\n  <Message>Provided param is bad</Message>\n  <Region>eu-west-1</Region>\n</Error>';
      var error = extractError(400, body, {}, req);
      expect(error.region).to.equal('eu-west-1');
      expect(s3.bucketRegionCache.name).to.equal('eu-west-1');
    });

    it('extracts the region from header and takes precedence over body and cache', function() {
      s3.bucketRegionCache.name = 'us-west-2';
      var req = request('operation', {
        Bucket: 'name'
      });
      var body = '<Error>\n  <Code>InvalidArgument</Code>\n  <Message>Provided param is bad</Message>\n  <Region>eu-west-1</Region>\n</Error>';
      var headers = {
        'x-amz-bucket-region': 'us-east-1'
      };
      var error = extractError(400, body, headers, req);
      expect(error.region).to.equal('us-east-1');
      expect(s3.bucketRegionCache.name).to.equal('us-east-1');
    });

    it('uses cache if region not extracted from body or header', function() {
      s3.bucketRegionCache.name = 'us-west-2';
      var req = request('operation', {
        Bucket: 'name'
      });
      var body = '<Error>\n  <Code>InvalidArgument</Code>\n  <Message>Provided param is bad</Message>\n</Error>';
      var error = extractError(400, body, {}, req);
      expect(error.region).to.equal('us-west-2');
      expect(s3.bucketRegionCache.name).to.equal('us-west-2');
    });

    it('does not use cache if not different from current region', function() {
      s3.bucketRegionCache.name = 'us-west-2';
      var req = request('operation', {
        Bucket: 'name'
      });
      req.httpRequest.region = 'us-west-2';
      var body = '<Error>\n  <Code>InvalidArgument</Code>\n  <Message>Provided param is bad</Message>\n</Error>';
      var error = extractError(400, body);
      expect(error.region).to.not.exist;
      expect(s3.bucketRegionCache.name).to.equal('us-west-2');
    });
    it('does not make async request for bucket region if error.region is set', function() {
      var regionReq = {
        send: function(fn) {
          return fn();
        }
      };
      var spy = helpers.spyOn(s3, regionReqOperation).andReturn(regionReq);
      var req = request('operation', {
        Bucket: 'name'
      });
      var body = '<Error>\n  <Code>PermanentRedirect</Code>\n  <Message>Message</Message>\n</Error>';
      var headers = {
        'x-amz-bucket-region': 'us-east-1'
      };
      var error = extractError(301, body, headers, req);
      expect(error.region).to.exist;
      expect(spy.calls.length).to.equal(0);
      expect(regionReq._requestRegionForBucket).to.not.exist;
    });

    it('makes async request for bucket region if error.region not set for a region redirect error code', function() {
      var regionReq = {
        send: function(fn) {
          return fn();
        }
      };
      var spy = helpers.spyOn(s3, regionReqOperation).andReturn(regionReq);
      var params = {
        Bucket: 'name'
      };
      var req = request('operation', params);
      var body = '<Error>\n  <Code>PermanentRedirect</Code>\n  <Message>Message</Message>\n</Error>';
      var error = extractError(301, body, {}, req);
      expect(error.region).to.not.exist;
      expect(spy.calls.length).to.equal(1);
      expect(spy.calls[0]['arguments'][0].Bucket).to.equal('name');
      expect(spy.calls[0]['arguments'][0].MaxKeys).to.equal(maxKeysParam);
      expect(regionReq._requestRegionForBucket).to.exist;
    });

    it('does not make request for bucket region if error code is not a region redirect code', function() {
      var regionReq = {
        send: function(fn) {
          return fn();
        }
      };
      var spy = helpers.spyOn(s3, regionReqOperation).andReturn(regionReq);
      var req = request('operation', {
        Bucket: 'name'
      });
      var body = '<Error>\n  <Code>InvalidCode</Code>\n  <Message>Message</Message>\n</Error>';
      var error = extractError(301, body, {}, req);
      expect(error.region).to.not.exist;
      expect(spy.calls.length).to.equal(0);
      expect(regionReq._requestRegionForBucket).to.not.exist;
    });

    it('updates error.region if async request adds region to cache', function() {
      var regionReq = {
        send: function(fn) {
          s3.bucketRegionCache.name = 'us-west-2';
          return fn();
        }
      };
      var spy = helpers.spyOn(s3, regionReqOperation).andReturn(regionReq);
      var req = request('operation', {
        Bucket: 'name'
      });
      var body = '<Error>\n  <Code>PermanentRedirect</Code>\n  <Message>Message</Message>\n</Error>';
      var error = extractError(301, body, {}, req);
      expect(spy.calls.length).to.equal(1);
      expect(spy.calls[0]['arguments'][0].Bucket).to.equal('name');
      expect(spy.calls[0]['arguments'][0].MaxKeys).to.equal(maxKeysParam);
      expect(error.region).to.equal('us-west-2');
    });

    it('extracts the request ids', function() {
      var error = extractError(400);
      expect(error.requestId).to.equal('RequestId');
      expect(error.extendedRequestId).to.equal('ExtendedRequestId');
    });

    it('misc errors not known to return an empty body', function() {
      var error = extractError(412);
      expect(error.code).to.equal(412);
      expect(error.message).to.equal(null);
    });

    it('uses canned errors only when the body is empty', function() {
      var body = '<xml>\n  <Code>ErrorCode</Code>\n  <Message>ErrorMessage</Message>\n</xml>';
      var error = extractError(403, body);
      expect(error.code).to.equal('ErrorCode');
      expect(error.message).to.equal('ErrorMessage');
    });
  });

  describe('retryableError', function() {
    it('should retry on authorization header with updated region', function() {
      var err = {
        code: 'AuthorizationHeaderMalformed',
        statusCode: 400,
        region: 'eu-west-1'
      };
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.amazonaws.com');
    });

    it('should retry on bad request with updated region', function() {
      var err = {
        code: 'BadRequest',
        statusCode: 400,
        region: 'eu-west-1'
      };
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.amazonaws.com');
    });

    it('should retry on permanent redirect with updated region and endpoint', function() {
      var err = {
        code: 'PermanentRedirect',
        statusCode: 301,
        region: 'eu-west-1'
      };
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.eu-west-1.amazonaws.com');
    });

    it('should retry on error code 301 with updated region and endpoint', function() {
      var err = {
        code: 301,
        statusCode: 301,
        region: 'eu-west-1'
      };
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.eu-west-1.amazonaws.com');
    });

    describe('cross-region putObject', function() {
      describe('non-path-style', function() {
        it('prepends bucket to hostname and includes full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          var req = request('putObject', {
            Bucket: 'test',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('test.s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });

        it('prepends bucket to hostname and includes full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('foo.s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });

        it('prepends bucket to hostname and includes full object key in path when bucket matches object', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('foo.s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo');
        });
      });

      describe('non-dns-compatible', function() {
        it('includes bucket and full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          var req = request('putObject', {
            Bucket: 'test.foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/test.foo/foo/bar%2A_.~-%25/biz');
        });

        it('includes bucket and full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          var req = request('putObject', {
            Bucket: 'foo.bar',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo.bar/foo/bar%2A_.~-%25/biz');
        });
      });

      describe('path-style', function() {
        it('includes bucket and full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            s3ForcePathStyle: true
          });
          var req = request('putObject', {
            Bucket: 'test',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/test/foo/bar%2A_.~-%25/biz');
        });

        it('includes bucket and full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            s3ForcePathStyle: true
          });
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('s3.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/foo/bar%2A_.~-%25/biz');
        });
      });

      describe('bucket endpoint', function() {
        it('includes full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            endpoint: 'https://fake-custom-url.com',
            s3BucketEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'test',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('fake-custom-url.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });

        it('includes full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            endpoint: 'https://fake-custom-url.com',
            s3BucketEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('fake-custom-url.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });
      });

      describe('s3Accelerate', function() {
        it('includes full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            useAccelerateEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'test',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('test.s3-accelerate.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });

        it('includes full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            useAccelerateEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('foo.s3-accelerate.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });
      });

      describe('dualstack', function() {
        it('includes full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            useDualstackEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'test',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('test.s3.dualstack.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });

        it('includes full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            useDualstackEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('foo.s3.dualstack.eu-west-1.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });
      });

      describe('dualstack and s3-accelerate', function() {
        it('includes full object key in path', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            useAccelerateEndpoint: true,
            useDualstackEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'test',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('test.s3-accelerate.dualstack.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });

        it('includes full object key in path when bucket matches object prefix', function() {
          var err = {
            code: 301,
            statusCode: 301,
            region: 'eu-west-1'
          };
          s3 = new AWS.S3({
            useAccelerateEndpoint: true,
            useDualstackEndpoint: true
          });
          var req = request('putObject', {
            Bucket: 'foo',
            Key: 'foo/bar*_.~\-%/biz'
          });
          req.build();
          var retryable = s3.retryableError(err, req);
          expect(retryable).to.equal(true);
          expect(req.httpRequest.region).to.equal('eu-west-1');
          expect(req.httpRequest.endpoint.hostname).to.equal('foo.s3-accelerate.dualstack.amazonaws.com');
          expect(req.httpRequest.path).to.equal('/foo/bar%2A_.~-%25/biz');
        });
      });
    });

    it('should retry with updated region but not endpoint if non-S3 url endpoint is specified', function() {
      var err = {
        code: 'PermanentRedirect',
        statusCode: 301,
        region: 'eu-west-1'
      };
      s3 = new AWS.S3({
        endpoint: 'https://fake-custom-url.com',
        s3BucketEndpoint: true
      });
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('fake-custom-url.com');
    });

    it('should retry with updated endpoint if S3 url endpoint is specified', function() {
      var err = {
        code: 'PermanentRedirect',
        statusCode: 301,
        region: 'eu-west-1'
      };
      s3 = new AWS.S3({
        endpoint: 'https://name.s3.us-west-2.amazonaws.com',
        s3BucketEndpoint: true
      });
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.eu-west-1.amazonaws.com');
    });

    it('should retry with updated region but not endpoint if accelerate endpoint is used', function() {
      var err = {
        code: 'PermanentRedirect',
        statusCode: 301,
        region: 'eu-west-1'
      };
      s3 = new AWS.S3({
        useAccelerateEndpoint: true
      });
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3-accelerate.amazonaws.com');
    });

    it('should retry with updated endpoint if dualstack endpoint is used', function() {
      var err = {
        code: 'PermanentRedirect',
        statusCode: 301,
        region: 'eu-west-1'
      };
      s3 = new AWS.S3({
        useDualstackEndpoint: true
      });
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      var retryable = s3.retryableError(err, req);
      expect(retryable).to.equal(true);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.dualstack.eu-west-1.amazonaws.com');
    });

    it('should not retry on requests for bucket region once region is obtained', function() {
      var err = {
        code: 'PermanentRedirect',
        statusCode: 301,
        region: 'eu-west-1'
      };
      var req = request('operation', {
        Bucket: 'name'
      });
      req._requestRegionForBucket = 'name';
      var retryable = [];
      retryable.push(s3.retryableError(err, req));
      s3.bucketRegionCache.name = 'eu-west-1';
      retryable.push(s3.retryableError(err, req));
      expect(retryable).to.eql([true, false]);
    });
  });

  describe('browser NetworkingError due to wrong region', function() {
    var done = function() {};
    var spy = null;
    var regionReq = null;
    var callNetworkingErrorListener = function(req) {
      var resp;
      if (!req) {
        req = request('operation', {
          Bucket: 'name'
        });
      }
      if (req._asm.currentState === 'validate') {
        req.build();
      }
      resp = new AWS.Response(req);
      resp.error = {
        code: 'NetworkingError'
      };
      s3.reqRegionForNetworkingError(resp, done);
      return req;
    };

    beforeEach(function() {
      s3 = new AWS.S3({
        region: 'us-west-2'
      });
      regionReq = request('operation', {
        Bucket: 'name'
      });
      regionReq.send = function(fn) {
        return fn();
      };
      helpers.spyOn(AWS.util, 'isBrowser').andReturn(true);
      return spy = helpers.spyOn(s3, 'listObjects').andReturn(regionReq);
    });

    it('updates region to us-east-1 if bucket name not DNS compatible', function() {
      var req = request('operation', {
        Bucket: 'name!'
      });
      callNetworkingErrorListener(req);
      expect(req.httpRequest.region).to.equal('us-east-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('s3.amazonaws.com');
      expect(s3.bucketRegionCache['name!']).to.equal('us-east-1');
      expect(spy.calls.length).to.equal(0);
    });

    it('updates region if cached and not current region', function() {
      var req = request('operation', {
        Bucket: 'name'
      });
      req.build();
      s3.bucketRegionCache.name = 'eu-west-1';
      callNetworkingErrorListener(req);
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.eu-west-1.amazonaws.com');
      expect(spy.calls.length).to.equal(0);
    });

    it('makes async request in us-east-1 if not in cache', function() {
      regionReq.send = function(fn) {
        s3.bucketRegionCache.name = 'eu-west-1';
        return fn();
      };
      var req = callNetworkingErrorListener();
      expect(spy.calls.length).to.equal(1);
      expect(regionReq.httpRequest.region).to.equal('us-east-1');
      expect(regionReq.httpRequest.endpoint.hostname).to.equal('name.s3.amazonaws.com');
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.eu-west-1.amazonaws.com');
    });

    it('makes async request in us-east-1 if cached region matches current region', function() {
      s3.bucketRegionCache.name = 'us-west-2';
      regionReq.send = function(fn) {
        s3.bucketRegionCache.name = 'eu-west-1';
        return fn();
      };
      var req = callNetworkingErrorListener();
      expect(spy.calls.length).to.equal(1);
      expect(regionReq.httpRequest.region).to.equal('us-east-1');
      expect(regionReq.httpRequest.endpoint.hostname).to.equal('name.s3.amazonaws.com');
      expect(req.httpRequest.region).to.equal('eu-west-1');
      expect(req.httpRequest.endpoint.hostname).to.equal('name.s3.eu-west-1.amazonaws.com');
    });

    it('does not update region if path-style bucket is dns-compliant and not in cache', function() {
      s3.config.s3ForcePathStyle = true;
      regionReq.send = function(fn) {
        s3.bucketRegionCache.name = 'eu-west-1';
        return fn();
      };
      var req = callNetworkingErrorListener();
      expect(spy.calls.length).to.equal(0);
      expect(req.httpRequest.region).to.equal('us-west-2');
      expect(req.httpRequest.endpoint.hostname).to.equal('s3.us-west-2.amazonaws.com');
    });
  });

  describe('getBucketAcl', function() {
    it('correctly parses the ACL XML document', function(done) {
      var headers = {
        'x-amz-request-id': 'request-id'
      };
      var body = '<AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n  <AccessControlList>\n    <Grant>\n      <Grantee xsi:type="CanonicalUser" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n        <DisplayName>aws-sdk</DisplayName>\n        <ID>id</ID>\n      </Grantee>\n      <Permission>FULL_CONTROL</Permission>\n    </Grant>\n    <Grant>\n      <Grantee xsi:type="Group" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n        <URI>uri</URI>\n      </Grantee>\n      <Permission>READ</Permission>\n    </Grant>\n  </AccessControlList>\n  <Owner>\n    <DisplayName>aws-sdk</DisplayName>\n    <ID>id</ID>\n  </Owner>\n</AccessControlPolicy>';
      helpers.mockHttpResponse(200, headers, body);
      s3.getBucketAcl(function(error, data) {
        expect(error).to.equal(null);
        expect(data).to.eql({
          Owner: {
            DisplayName: 'aws-sdk',
            ID: 'id'
          },
          Grants: [
            {
              Permission: 'FULL_CONTROL',
              Grantee: {
                Type: 'CanonicalUser',
                DisplayName: 'aws-sdk',
                ID: 'id'
              }
            }, {
              Permission: 'READ',
              Grantee: {
                Type: 'Group',
                URI: 'uri'
              }
            }
          ]
        });

        done();
      });
    });
  });

  describe('putBucketAcl', function() {
    it('correctly builds the ACL XML document', function(done) {
      var xml = '<AccessControlPolicy xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n  <AccessControlList>\n    <Grant>\n      <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="CanonicalUser">\n        <DisplayName>aws-sdk</DisplayName>\n        <ID>id</ID>\n      </Grantee>\n      <Permission>FULL_CONTROL</Permission>\n    </Grant>\n    <Grant>\n      <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Group">\n        <URI>uri</URI>\n      </Grantee>\n      <Permission>READ</Permission>\n    </Grant>\n  </AccessControlList>\n  <Owner>\n    <DisplayName>aws-sdk</DisplayName>\n    <ID>id</ID>\n  </Owner>\n</AccessControlPolicy>';
      helpers.mockHttpResponse(200, {}, '');
      var params = {
        AccessControlPolicy: {
          Owner: {
            DisplayName: 'aws-sdk',
            ID: 'id'
          },
          Grants: [
            {
              Permission: 'FULL_CONTROL',
              Grantee: {
                Type: 'CanonicalUser',
                DisplayName: 'aws-sdk',
                ID: 'id'
              }
            }, {
              Permission: 'READ',
              Grantee: {
                Type: 'Group',
                URI: 'uri'
              }
            }
          ]
        }
      };
      s3.putBucketAcl(params, function(err, data) {
        helpers.matchXML(this.request.httpRequest.body, xml);
        done();
      });
    });
  });

  describe('completeMultipartUpload', function() {
    it('returns data when the resp is 200 with valid response', function(done) {
      var headers = {
        'x-amz-id-2': 'Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==',
        'x-amz-request-id': '656c76696e6727732072657175657374'
      };
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<CompleteMultipartUploadResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n  <Location>http://Example-Bucket.s3.amazonaws.com/Example-Object</Location>\n  <Bucket>Example-Bucket</Bucket>\n  <Key>Example-Object</Key>\n  <ETag>"3858f62230ac3c915f300c664312c11f-9"</ETag>\n</CompleteMultipartUploadResult>';
      helpers.mockHttpResponse(200, headers, body);
      s3.completeMultipartUpload(function(error, data) {
        expect(error).to.equal(null);
        expect(data).to.eql({
          Location: 'http://Example-Bucket.s3.amazonaws.com/Example-Object',
          Bucket: 'Example-Bucket',
          Key: 'Example-Object',
          ETag: '"3858f62230ac3c915f300c664312c11f-9"'
        });
        expect(this.requestId).to.equal('656c76696e6727732072657175657374');
        done();
      });
    });

    it('returns an error when the resp is 200 with an error xml document', function(done) {
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<Error>\n  <Code>InternalError</Code>\n  <Message>We encountered an internal error. Please try again.</Message>\n  <RequestId>656c76696e6727732072657175657374</RequestId>\n  <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>\n</Error>';
      helpers.mockHttpResponse(200, {}, body);
      s3.completeMultipartUpload(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('We encountered an internal error. Please try again.');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });

    it('returns an error when the resp is 200 with incomplete body', function(done) {
      helpers.mockHttpResponse(200, {}, '<?xml version="1.0" encoding="UTF-8"?>');
      s3.completeMultipartUpload(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('S3 aborted request');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });

    it('returns an error when the resp is 200 with empty body', function(done) {
      helpers.mockHttpResponse(200, {}, '');
      s3.completeMultipartUpload(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('S3 aborted request');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });
  });

  describe('copyObject', function() {
    it('returns data when the resp is 200 with valid response', function(done) {
      var headers = {
        'x-amz-id-2': 'Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==',
        'x-amz-request-id': '656c76696e6727732072657175657374'
      };
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<CopyObjectResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n  <Location>http://Example-Bucket.s3.amazonaws.com/Example-Object</Location>\n  <Bucket>Example-Bucket</Bucket>\n  <Key>Example-Object</Key>\n  <ETag>"3858f62230ac3c915f300c664312c11f-9"</ETag>\n</CopyObjectResult>';
      helpers.mockHttpResponse(200, headers, body);
      s3.copyObject(function(error, data) {
        expect(error).to.equal(null);
        expect(data).to.eql({
          CopyObjectResult: {
            ETag: '"3858f62230ac3c915f300c664312c11f-9"'
          }
        });
        expect(this.requestId).to.equal('656c76696e6727732072657175657374');
        done();
      });
    });

    it('returns an error when the resp is 200 with an error xml document', function(done) {
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<Error>\n  <Code>InternalError</Code>\n  <Message>We encountered an internal error. Please try again.</Message>\n  <RequestId>656c76696e6727732072657175657374</RequestId>\n  <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>\n</Error>';
      helpers.mockHttpResponse(200, {}, body);
      s3.copyObject(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('We encountered an internal error. Please try again.');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });

    it('returns an error when the resp is 200 with incomplete body', function(done) {
      helpers.mockHttpResponse(200, {}, '<?xml version="1.0" encoding="UTF-8"?>');
      s3.copyObject(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('S3 aborted request');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });

    it('returns an error when the resp is 200 with empty body', function(done) {
      helpers.mockHttpResponse(200, {}, '');
      s3.copyObject(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('S3 aborted request');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });
  });

  describe('uploadPartCopy', function() {
    it('returns data when the resp is 200 with valid response', function(done) {
      var headers = {
        'x-amz-id-2': 'Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==',
        'x-amz-request-id': '656c76696e6727732072657175657374'
      };
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<CopyPartResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">\n  <Location>http://Example-Bucket.s3.amazonaws.com/Example-Object</Location>\n  <Bucket>Example-Bucket</Bucket>\n  <Key>Example-Object</Key>\n  <ETag>"3858f62230ac3c915f300c664312c11f-9"</ETag>\n</CopyPartResult>';
      helpers.mockHttpResponse(200, headers, body);
      s3.uploadPartCopy({
        Bucket: 'bucket',
        Key: 'key',
        CopySource: 'bucket/key'
      }, function(error, data) {
        expect(error).to.equal(null);
        expect(data).to.eql({
          CopyPartResult: {
            ETag: '"3858f62230ac3c915f300c664312c11f-9"'
          }
        });
        expect(this.requestId).to.equal('656c76696e6727732072657175657374');
        done();
      });
    });

    it('returns an error when the resp is 200 with an error xml document', function(done) {
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<Error>\n  <Code>InternalError</Code>\n  <Message>We encountered an internal error. Please try again.</Message>\n  <RequestId>656c76696e6727732072657175657374</RequestId>\n  <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>\n</Error>';
      helpers.mockHttpResponse(200, {}, body);
      s3.uploadPartCopy(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('We encountered an internal error. Please try again.');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });

    it('returns an error when the resp is 200 with incomplete body', function(done) {
      helpers.mockHttpResponse(200, {}, '<?xml version="1.0" encoding="UTF-8"?>');
      s3.uploadPartCopy(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('S3 aborted request');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });

    it('returns an error when the resp is 200 with empty body', function(done) {
      helpers.mockHttpResponse(200, {}, '');
      s3.uploadPartCopy(function(error, data) {
        expect(error).to.be.instanceOf(Error);
        expect(error.code).to.equal('InternalError');
        expect(error.message).to.equal('S3 aborted request');
        expect(error.statusCode).to.equal(200);
        expect(error.retryable).to.equal(true);
        expect(data).to.equal(null);
        done();
      });
    });
  });

  describe('getBucketLocation', function() {
    it('returns empty string for the location constraint when not present', function(done) {
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/"/>';
      helpers.mockHttpResponse(200, {}, body);
      s3.getBucketLocation(function(error, data) {
        expect(error).to.equal(null);
        expect(data).to.eql({
          LocationConstraint: ''
        });
        done();
      });
    });

    it('parses the location constraint from the root xml', function(done) {
      var headers = {
        'x-amz-request-id': 'abcxyz'
      };
      var body = '<?xml version="1.0" encoding="UTF-8"?>\n<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/">EU</LocationConstraint>';
      helpers.mockHttpResponse(200, headers, body);
      s3.getBucketLocation(function(error, data) {
        expect(error).to.equal(null);
        expect(data).to.eql({
          LocationConstraint: 'EU'
        });
        expect(this.requestId).to.equal('abcxyz');
        done();
      });
    });
  });

  describe('createBucket', function() {
    it('auto-populates the LocationConstraint based on the region', function() {
      var loc = null;
      s3 = new AWS.S3({
        region: 'eu-west-1'
      });
      s3.makeRequest = function(op, params) {
        expect(params).to['be'].a('object');
        loc = params.CreateBucketConfiguration.LocationConstraint;
      };
      s3.createBucket({
        Bucket: 'name'
      });
      expect(loc).to.equal('eu-west-1');
    });

    it('auto-populates the LocationConstraint based on the region when using bound params', function() {
      var loc = null;
      s3 = new AWS.S3({
        region: 'eu-west-1',
        Bucket: 'name'
      });
      s3.makeRequest = function(op, params) {
        expect(params).to['be'].a('object');
        loc = params.CreateBucketConfiguration.LocationConstraint;
      };
      s3.createBucket(AWS.util.fn.noop);
      expect(loc).to.equal('eu-west-1');
    });

    it('auto-populates the LocationConstraint based on the region when using invalid params', function() {
      var loc = null;
      s3 = new AWS.S3({
        region: 'eu-west-1',
        Bucket: 'name'
      });
      s3.makeRequest = function(op, params) {
        expect(params).to['be'].a('object');
        loc = params.CreateBucketConfiguration.LocationConstraint;
      };
      s3.createBucket(null);
      expect(loc).to.equal('eu-west-1');
      s3.createBucket(void 0);
      expect(loc).to.equal('eu-west-1');
    });

    it('auto-populates the LocationConstraint based on the region when using invalid params and a valid callback', function() {
      var loc = null;
      s3 = new AWS.S3({
        region: 'eu-west-1',
        Bucket: 'name'
      });
      s3.makeRequest = function(op, params, cb) {
        expect(params).to['be'].a('object');
        loc = params.CreateBucketConfiguration.LocationConstraint;
        if (typeof cb === 'function') {
          return cb();
        }
      };
      var called = 0;
      s3.createBucket(void 0, function() {
        called = 1;
      });
      expect(loc).to.equal('eu-west-1');
      expect(called).to.equal(1);
    });

    it('caches bucket region based on LocationConstraint upon successful response', function(done) {
      s3 = new AWS.S3();
      var params = {
        Bucket: 'name',
        CreateBucketConfiguration: {
          LocationConstraint: 'rg-fake-1'
        }
      };
      helpers.mockHttpResponse(200, {}, '');
      s3.createBucket(params, function() {
        expect(s3.bucketRegionCache.name).to.equal('rg-fake-1');
        done();
      });
    });

    it('caches bucket region without LocationConstraint upon successful response', function(done) {
      s3 = new AWS.S3({
        region: 'us-east-1'
      });
      var params = {
        Bucket: 'name'
      };
      helpers.mockHttpResponse(200, {}, '');
      s3.createBucket(params, function() {
        expect(params.CreateBucketConfiguration).to.not.exist;
        expect(s3.bucketRegionCache.name).to.equal('us-east-1');
        done();
      });
    });

    it('caches bucket region with LocationConstraint "EU" upon successful response', function(done) {
      s3 = new AWS.S3();
      var params = {
        Bucket: 'name',
        CreateBucketConfiguration: {
          LocationConstraint: 'EU'
        }
      };
      helpers.mockHttpResponse(200, {}, '');
      s3.createBucket(params, function() {
        expect(s3.bucketRegionCache.name).to.equal('eu-west-1');
        done();
      });
    });

    it('appends CreateBucketConfiguration key to copy of params, not original, when endpoint is configured', function(done) {
      var loc = null;
      var params = {
        Bucket: 'name'
      };

      s3 = new AWS.S3({
        region: 'eu-west-1',
        Bucket: 'name',
        endpoint: 'https://foo.bar.baz:555/prefix'
      });

      s3.makeRequest = function(op, copiedParams, cb) {
        expect(copiedParams).to['be'].a('object');
        loc = copiedParams.CreateBucketConfiguration.LocationConstraint;
        if (typeof cb === 'function') {
          return cb();
        }
      };

      helpers.mockHttpResponse(200, {}, '');
      s3.createBucket(params, function() {
        expect(params.CreateBucketConfiguration).to.not.exist;
        expect(loc).to.be.a.string;
        done();
      });
    });
  });

  describe('deleteBucket', function() {
    it('removes bucket from region cache on successful response', function(done) {
      s3 = new AWS.S3();
      var params = {
        Bucket: 'name'
      };
      s3.bucketRegionCache.name = 'rg-fake-1';
      helpers.mockHttpResponse(204, {}, '');
      s3.deleteBucket(params, function() {
        expect(s3.bucketRegionCache.name).to.not.exist;
        done();
      });
    });
  });

  describe('willComputeChecksums', function() {
    var willCompute = function(operation, opts) {
      var compute = opts.computeChecksums;
      s3 = new AWS.S3({
        computeChecksums: compute,
        signatureVersion: 's3'
      });
      var req = s3.makeRequest(operation, {
        Bucket: 'example',
        ContentMD5: opts.hash
      }).build();
      var checksum = req.httpRequest.headers['Content-MD5'];
      if (opts.hash !== void 0) {
        if (opts.hash === null) {
          expect(checksum).not.to.exist;
        } else {
          expect(checksum).to.equal(opts.hash);
        }
      } else {
        var realChecksum = AWS.util.crypto.md5(req.httpRequest.body, 'base64');
        expect(checksum).to.equal(realChecksum);
      }
    };

    it('does not compute checksums if computeChecksums is off', function() {
      willCompute('putObject', {
        computeChecksums: false,
        hash: null
      });
    });

    it('does not compute checksums if computeChecksums is on and ContentMD5 is provided', function() {
      willCompute('putBucketAcl', {
        computeChecksums: true,
        hash: '000'
      });
    });

    it('computes checksums if computeChecksums is on and ContentMD5 is not provided', function() {
      willCompute('putBucketAcl', {
        computeChecksums: true,
        hash: '1B2M2Y8AsgTpgAmY7PhCfg=='
      });
    });

    if (AWS.util.isNode()) {
      it('does not compute checksums for Stream objects', function() {
        s3 = new AWS.S3({
          computeChecksums: true
        });
        var req = s3.putObject({
          Bucket: 'example',
          Key: 'foo',
          Body: new Stream.Stream
        });
        expect(req.build(function() {}).httpRequest.headers['Content-MD5']).to.equal(void 0);
      });

      it('throws an error in SigV4, if a non-file stream is provided when body signing enabled', function(done) {
        s3 = new AWS.S3({
          signatureVersion: 'v4',
          s3DisableBodySigning: false
        });
        var req = s3.putObject({
          Bucket: 'example',
          Key: 'key',
          Body: new Stream.Stream
        });
        req.send(function(err) {
          expect(err.message).to.contain('stream objects are not supported');
          done();
        });
      });

      it('does not throw an error in SigV4, if a non-file stream is provided when body signing disabled with ContentLength', function(done) {
        s3 = new AWS.S3({
          signatureVersion: 'v4',
          s3DisableBodySigning: true
        });
        helpers.mockResponse({
          data: {
            ETag: 'etag'
          }
        });
        var req = s3.putObject({
          Bucket: 'example',
          Key: 'key',
          Body: new Stream.Stream,
          ContentLength: 10
        });
        req.send(function(err) {
          expect(err).not.to.exist;
          done();
        });
      });

      it('opens separate stream if a file object is provided (signed payload)', function(done) {
        var hash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
        helpers.mockResponse({
          data: {
            ETag: 'etag'
          }
        });
        var fs = require('fs');
        var mock = helpers.spyOn(fs, 'createReadStream').andCallFake(function() {
          var tr = new Stream.Transform;
          tr._transform = function(d, e, c) {
            return c(null, d);
          };
          tr.length = 0;
          tr.path = 'path/to/file';
          tr.push(buffer.toBuffer(''));
          tr.end();
          return tr;
        });
        s3 = new AWS.S3({
          signatureVersion: 'v4',
          s3DisableBodySigning: false
        });
        var stream = fs.createReadStream('path/to/file');
        var req = s3.putObject({
          Bucket: 'example',
          Key: 'key',
          Body: stream
        });

        req.send(function(err) {
          expect(mock.calls[0]['arguments']).to.eql(['path/to/file']);
          expect(mock.calls[1]['arguments']).to.eql(['path/to/file', {}]);
          expect(err).not.to.exist;
          expect(req.httpRequest.headers['X-Amz-Content-Sha256']).to.equal(hash);
          done();
        });
      });

      it('opens separate stream with range if a file object is provided', function(done) {
        var hash = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
        helpers.mockResponse({
          data: {
            ETag: 'etag'
          }
        });
        var fs = require('fs');
        var mock = helpers.spyOn(fs, 'createReadStream').andCallFake(function(path, settings) {
          var tr = new Stream.Readable;
          tr.length = 0;
          tr.path = 'path/to/file';
          tr.start = settings.start;
          tr.end = settings.end;
          var didRead = false;
          tr._read = function(n) {
            if (didRead) {
              return tr.push(null);
            } else {
              didRead = true;
              return tr.push(buffer.toBuffer('test'));
            }
          };
          return tr;
        });
        s3 = new AWS.S3({
          signatureVersion: 'v4',
          s3DisableBodySigning: false
        });
        var stream = fs.createReadStream('path/to/file', {
          start: 0,
          end: 5
        });
        var req = s3.putObject({
          Bucket: 'example',
          Key: 'key',
          Body: stream
        });
        req.send(function(err) {
          expect(mock.calls[0]['arguments']).to.eql([
            'path/to/file', {
              start: 0,
              end: 5
            }
          ]);
          expect(mock.calls[1]['arguments']).to.eql([
            'path/to/file', {
              start: 0,
              end: 5
            }
          ]);
          expect(err).not.to.exist;
          expect(req.httpRequest.headers['X-Amz-Content-Sha256']).to.equal(hash);
          done();
        });
      });
    }
  });

  describe('getSignedUrl', function() {
    var date = null;

    beforeEach(function(done) {
      helpers.spyOn(AWS.S3.prototype, 'getSkewCorrectedDate').andReturn(new Date(0));
      return done();
    });

    afterEach(function(done) {
      done();
    });

    it('throws error when supplying a non-number value', function(done) {
      var expiresString = '60';
      try {
        s3.getSignedUrl('getObject', {
          Bucket: 'bucket',
          Key: 'key',
          Expires: expiresString
        });
      } catch (e) {
        expect(e.code).to.eql('InvalidParameterException');
        expect(e.message).to.eql('The expiration must be a number, received ' + typeof expiresString);
        done();
      }
    });

    it('gets a signed URL for getObject', function() {
      var url = s3.getSignedUrl('getObject', {
        Bucket: 'bucket',
        Key: 'key'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=4mlYnRmz%2BBFEPrgYz5tXcl9Wc4w%3D&x-amz-security-token=session');
    });

    it('gets a signed URL with Expires time', function() {
      var url = s3.getSignedUrl('getObject', {
        Bucket: 'bucket',
        Key: 'key',
        Expires: 60
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=kH2pMK%2Fgm7cCZKVG8GHVTRGXKzY%3D&x-amz-security-token=session');
    });

    it('gets a signed URL with expiration and bound bucket parameters', function() {
      s3 = new AWS.S3({
        paramValidation: true,
        region: void 0,
        params: {
          Bucket: 'bucket'
        }
      });
      var url = s3.getSignedUrl('getObject', {
        Key: 'key',
        Expires: 60
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=60&Signature=kH2pMK%2Fgm7cCZKVG8GHVTRGXKzY%3D&x-amz-security-token=session');
    });

    it('generates the right URL with a custom endpoint', function() {
      s3 = new AWS.S3({
        endpoint: 'https://foo.bar.baz:555/prefix',
        params: {
          Bucket: 'bucket'
        }
      });
      var url = s3.getSignedUrl('getObject', {
        Key: 'key',
        Expires: 60
      });
      expect(url).to.equal('https://bucket.foo.bar.baz:555/prefix/key?AWSAccessKeyId=akid&Expires=60&Signature=zA6k0cQqDkTZgLamfoYLOd%2Bqfg8%3D&x-amz-security-token=session');
    });

    it('gets a signed URL with callback', function(done) {
      s3.getSignedUrl('getObject', {
        Bucket: 'bucket',
        Key: 'key'
      }, function(err, url) {
        expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=4mlYnRmz%2BBFEPrgYz5tXcl9Wc4w%3D&x-amz-security-token=session');
        done();
      });
    });

    it('gets a signed URL for putObject with no body', function() {
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=J%2BnWZ0lPUfLV0kio8ONhJmAttGc%3D&x-amz-security-token=session');
    });

    it('gets a signed URL for putObject with Metadata', function() {
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key',
        Metadata: {
          someKey: 'someValue'
        }
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=5Lcbv0WLGWseQhtmNQ8WwIpX6Kw%3D&x-amz-meta-somekey=someValue&x-amz-security-token=session');
    });

    it('gets a signed URL for putObject with Metadata using Sigv4', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4'
      });
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key',
        Metadata: {
          someKey: 'someValue'
        }
      });
      expect(url).to.equal('https://bucket.s3.mock-region.amazonaws.com/key?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fmock-region%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=0a1ef336042a7a03b8a2e130ac36097cb1fbab54f8ed5105977a863a5139e679&X-Amz-SignedHeaders=host%3Bx-amz-meta-somekey&x-amz-meta-somekey=someValue');
    });

    it('gets a signed URL for putObject with special characters', function() {
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: '!@#$%^&*();\':"{}[],./?`~'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/%21%40%23%24%25%5E%26%2A%28%29%3B%27%3A%22%7B%7D%5B%5D%2C./%3F%60~?AWSAccessKeyId=akid&Expires=900&Signature=9nEltJACZKsriZqU2cmRel6g8LQ%3D&x-amz-security-token=session');
    });

    it('gets a signed URL for putObject with a body (and checksum)', function() {
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key',
        Body: 'body'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Content-MD5=hBotaJrYa9FhFEdFPCLG%2FA%3D%3D&Expires=900&Signature=4ycA2tpHKxfFnNCdqnK1d5BG8gc%3D&x-amz-security-token=session');
    });

    it('gets a signed URL for putObject with a sse-c algorithm', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4'
      });
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key',
        SSECustomerAlgorithm: 'AES256'
      });
      expect(url).to.equal('https://bucket.s3.mock-region.amazonaws.com/key?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fmock-region%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=60b08f91f820fa1c698ac477fec7b5e3cec7b682e09e769e1a55a4d5a3b99077&X-Amz-SignedHeaders=host%3Bx-amz-server-side-encryption-customer-algorithm&x-amz-server-side-encryption-customer-algorithm=AES256');
    });

    it('gets a signed URL for putObject with a sse-c key', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4'
      });
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key',
        SSECustomerAlgorithm: 'AES256',
        SSECustomerKey: 'c2FtcGxlIGtleXNhbXBsZSBrZXlzYW1wbGUga2V5c2E='
      });
      expect(url).to.equal('https://bucket.s3.mock-region.amazonaws.com/key?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fmock-region%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=e4f57734798fdadc0b2b43ca5a5e1f28824786c3ac74c30d7abb77d6ef59b0da&X-Amz-SignedHeaders=host%3Bx-amz-server-side-encryption-customer-algorithm%3Bx-amz-server-side-encryption-customer-key%3Bx-amz-server-side-encryption-customer-key-md5&x-amz-server-side-encryption-customer-algorithm=AES256&x-amz-server-side-encryption-customer-key=YzJGdGNHeGxJR3RsZVhOaGJYQnNaU0JyWlhsellXMXdiR1VnYTJWNWMyRT0%3D&x-amz-server-side-encryption-customer-key-MD5=VzaXhwL7H9upBc%2Fb9UqH8g%3D%3D');
    });

    it('gets a signed URL for putObject with CacheControl', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4'
      });
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'key',
        CacheControl: 'max-age=10000'
      });
      expect(url).to.equal('https://bucket.s3.mock-region.amazonaws.com/key?Cache-Control=max-age%3D10000&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fmock-region%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=39ad1f8dc3aa377c2b184a0be7657dfb606628c74796c1a48394ef134ff6233a&X-Amz-SignedHeaders=cache-control%3Bhost');
    });

    it('gets a signed URL and appends to existing query parameters', function() {
      var url = s3.getSignedUrl('listObjects', {
        Bucket: 'bucket',
        Prefix: 'prefix'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/?AWSAccessKeyId=akid&Expires=900&Signature=8W3pwZPfgucCyPNg1MsoYq8h5zw%3D&prefix=prefix&x-amz-security-token=session');
    });

    it('gets a signed URL for getObject using SigV4', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4',
        region: void 0
      });
      var url = s3.getSignedUrl('getObject', {
        Bucket: 'bucket',
        Key: 'object'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/object?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=05ae40d2d22c93549a1de0686232ff56baf556876ec497d0d8349431f98b8dfe&X-Amz-SignedHeaders=host');
    });

    it('gets a signed URL for putObject using SigV4', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4',
        region: void 0
      });
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'object'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/object?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=akid%2F19700101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=1b6f75301a2e480bcfbb53d47d8940c28c8657ea70f23c24846a5595a53b1dfe&X-Amz-SignedHeaders=host');
    });

    it('gets a signed URL for putObject using SigV4 with body', function() {
      s3 = new AWS.S3({
        signatureVersion: 'v4',
        region: void 0
      });
      var url = s3.getSignedUrl('putObject', {
        Bucket: 'bucket',
        Key: 'object',
        Body: 'foo'
      });
      expect(url).to.equal('https://bucket.s3.amazonaws.com/object?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae&X-Amz-Credential=akid%2F19700101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=19700101T000000Z&X-Amz-Expires=900&X-Amz-Security-Token=session&X-Amz-Signature=600a64aff20c4ea6c28d11fd0639fb33a0107d072f4c2dd1ea38a16d057513f3&X-Amz-SignedHeaders=host%3Bx-amz-content-sha256');
    });

    it('errors when expiry time is greater than a week out on SigV4', function(done) {
      s3 = new AWS.S3({
        signatureVersion: 'v4',
        region: void 0
      });
      var params = {
        Bucket: 'bucket',
        Key: 'object',
        Expires: 60 * 60 * 24 * 7 + 120
      };
      var error = 'Presigning does not support expiry time greater than a week with SigV4 signing.';
      s3.getSignedUrl('getObject', params, function(err, data) {
        expect(err).not.to.equal(null);
        expect(err.message).to.equal(error);
        done();
      });
    });

    it('errors if ContentLength is passed as parameter', function() {
      expect(function() {
        s3.getSignedUrl('putObject', {
          Bucket: 'bucket',
          Key: 'key',
          ContentLength: 5
        });
      }).to['throw'](/ContentLength is not supported in pre-signed URLs/);
    });

    it('defers the execution of a callback, even when the underlying credentials are synchronous', function(done) {
      var invocationDeferred = false;
      s3.getSignedUrl('getObject', {Bucket: 'bucket', Key: 'key'}, function(err, data) {
        expect(invocationDeferred).to.equal(true);
        expect(data).to.equal(
          'https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=4mlYnRmz%2BBFEPrgYz5tXcl9Wc4w%3D&x-amz-security-token=session'
        );
        done();
      });
      invocationDeferred = true;
    });

    it('supports access point ARN', function(done) {
      s3.getSignedUrl('getObject', {
        Bucket: 'arn:aws:s3:us-west-2:123456789012:accesspoint/myendpoint',
        Key: 'key'
      }, function(err, data) {
        expect(data).to.equal(
          'https://myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=R9HjMWdhk69e7%2BwlOpFH1TUkxRY%3D&x-amz-security-token=session'
        );
        done();
      });
    });

    it('supports outposts ARN', function(done) {
      s3 = new AWS.S3({ region: 'us-west-2', signatureVersion: 'v4' });
      helpers.spyOn(AWS.S3.prototype, 'getSkewCorrectedDate').andReturn(new Date('2021-08-27T00:00:00'));
      s3.getSignedUrl('getObject', {
        Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myendpoint',
        Key: 'obj'
      }, function(_, data) {
        expect(data).to.contain('20210827%2Fus-west-2%2Fs3-outposts%2Faws4_request');
        done();
      });
    });

    it('supports outposts ARN from resolved region', function(done) {
      s3 = new AWS.S3({ region: 'us-west-2', signatureVersion: 'v4' });
      helpers.spyOn(AWS.S3.prototype, 'getSkewCorrectedDate').andReturn(new Date('2021-08-27T00:00:00'));
      s3.getSignedUrl('getObject', {
        Bucket: 'arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myendpoint',
        Key: 'obj'
      }, function(_, data) {
        expect(data).to.contain('20210827%2Fus-east-1%2Fs3-outposts%2Faws4_request');
        done();
      });
    });
  });

  describe('getSignedUrlPromise', function() {
    var catchFunction, resolveFunction, err, url, date;
    err = null;
    url = null;
    date = null;

    catchFunction = function(e) {
      err = e;
    };

    resolveFunction = function(u) {
      url = u;
    };

    beforeEach(function(done) {
      err = null;
      url = null;
      originalDate = s3.getSkewCorrectedDate;
      s3.getSkewCorrectedDate = function() {
        return new Date(0);
      };
      AWS.config.setPromisesDependency();
      return done();
    });

    afterEach(function(done) {
      s3.getSkewCorrectedDate = originalDate;
      done();
    });

    it('exists if Promises are available', function() {
      if (typeof Promise === 'undefined') {
        expect(typeof s3.getSignedUrlPromise).to.equal('undefined');
      } else {
        expect(typeof s3.getSignedUrlPromise).to.equal('function');
      }
    });

    it('returns a promise when called', function() {
      var P = function() {};
      AWS.config.setPromisesDependency(P);
      var operation = s3.getSignedUrlPromise;
      expect(typeof operation).to.equal('function');
      var urlPromise = s3.getSignedUrlPromise('getObject', {
        Bucket: 'bucket',
        Key: 'key'
      });
      expect(urlPromise instanceof P).to.equal(true);
    });

    if (typeof Promise === 'function') {
      it('resolves when getSignedUrl is successful', function() {
        s3.getSignedUrlPromise('getObject', {
          Bucket: 'bucket',
          Key: 'key'
        }).then(resolveFunction).catch(catchFunction).then(function() {
          expect(url).to.equal('https://bucket.s3.amazonaws.com/key?AWSAccessKeyId=akid&Expires=900&Signature=4mlYnRmz%2BBFEPrgYz5tXcl9Wc4w%3D&x-amz-security-token=session');
          expect(err).to.be['null'];
        });
      });

      it('rejects when getSignedUrl is unsuccessful', function() {
        s3.getSignedUrlPromise('invalidOperation', {
          Bucket: 'bucket',
          Key: 'key',
        }).then(resolveFunction).catch(catchFunction).then(function() {
          expect(url).to.be['null'];
          expect(err).to.not.be['null'];
        });
      });
    }
  });

  describe('createPresignedPost', function() {
    it('should include a url and a hash of form fields', function(done) {
      s3 = new AWS.S3();
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        expect(data).to.include.keys('fields', 'url');
        expect(data.url).to.be.a.string;
        expect(data.fields).to.be.an.object;
        done();
      });
    });

    it('should include a policy, signature, and signing metadata', function(done) {
      s3 = new AWS.S3();
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        expect(data.fields).to.include.keys('Policy', 'X-Amz-Signature', 'X-Amz-Algorithm', 'X-Amz-Date', 'X-Amz-Credential');
        done();
      });
    });

    it('should specify the signing algorithm used', function(done) {
      s3 = new AWS.S3();
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        expect(data.fields['X-Amz-Algorithm']).to.equal('AWS4-HMAC-SHA256');
        done();
      });
    });

    it('should use bound parameters for the bucket name', function(done) {
      s3 = new AWS.S3({
        params: {
          Bucket: 'bucket'
        }
      });
      s3.createPresignedPost({}, function(err, data) {
        expect(data.fields).to.include.keys('bucket');
        expect(data.fields.bucket).to.equal('bucket');
        done();
      });
    });

    it('should include the security token when present', function(done) {
      var token = 'baz';
      var credentials = {
        accessKeyId: 'foo',
        secretAccessKey: 'bar',
        sessionToken: token
      };
      s3 = new AWS.S3({
        credentials: credentials
      });
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        expect(data.fields['X-Amz-Security-Token']).to.equal(token);
        done();
      });
    });

    it('should provide a base64-encoded JSON policy document', function(done) {
      s3 = new AWS.S3();
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        var decoded = JSON.parse(AWS.util.base64.decode(data.fields.Policy));
        expect(decoded).to.be.an.object;
        expect(decoded).to.include.key('expiration', 'conditions');
        done();
      });
    });

    it('should default to expiration in one hour', function(done) {
      s3 = new AWS.S3();
      helpers.spyOn(s3, 'getSkewCorrectedDate').andReturn(new Date(946684800 * 1000));
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        var decoded = JSON.parse(AWS.util.base64.decode(data.fields.Policy));
        expect(decoded.expiration).to.equal('2000-01-01T01:00:00Z');
        done();
      });
    });

    it('should allow users to provide a custom expiration', function(done) {
      var customTtl = 900;
      s3 = new AWS.S3();
      helpers.spyOn(s3, 'getSkewCorrectedDate').andReturn(new Date(946684800 * 1000));
      return s3.createPresignedPost({
        Bucket: 'bucket',
        Expires: customTtl
      }, function(err, data) {
        var decoded = JSON.parse(AWS.util.base64.decode(data.fields.Policy));
        expect(decoded.expiration).to.equal('2000-01-01T00:15:00Z');
        done();
      });
    });

    it('should include signature metadata as conditions', function(done) {
      s3 = new AWS.S3();
      s3.createPresignedPost({
        Bucket: 'bucket'
      }, function(err, data) {
        var decoded = JSON.parse(AWS.util.base64.decode(data.fields.Policy));
        expect(decoded.conditions).to.be.an.array;
        var found = {};
        var ref = decoded.conditions;
        for (var index in ref) {
          var condition = ref[index];
          var conditionKey = Object.keys(condition)[0];
          found[conditionKey] = true;
          expect(condition[conditionKey]).to.equal(data.fields[conditionKey]);
        }
        expect(found['X-Amz-Algorithm']).to.be['true'];
        expect(found['X-Amz-Date']).to.be['true'];
        expect(found['X-Amz-Credential']).to.be['true'];
        done();
      });
    });

    it('should include user-provided conditions in the signed policy', function(done) {
      s3 = new AWS.S3();
      var conditions = [
        {
          'x-amz-server-side-encryption': 'AES256'
        }, ['starts-with', '$x-amz-meta-tag', ''], {
          'acl': 'public-read'
        }
      ];
      s3.createPresignedPost({
        Bucket: 'bucket',
        Conditions: conditions
      }, function(err, data) {
        var decoded = JSON.parse(AWS.util.base64.decode(data.fields.Policy));
        expect(decoded.conditions).to.be.an.array;
        expect(conditions[0]).to.deep.equal(decoded.conditions[0]);
        expect(conditions[1]).to.deep.equal(decoded.conditions[1]);
        expect(conditions[2]).to.deep.equal(decoded.conditions[2]);
        done();
      });
    });

    it('should include user-provided fields as policy conditions', function(done) {
      s3 = new AWS.S3();
      var fieldsToInclude = {
        key: 'users/userId/upload',
        acl: 'public-read',
        'Content-Type': 'image/jpeg',
        'x-amz-meta-foo': 'bar',
        'x-amz-tagging': '<Tagging>\n  <TagSet>\n    <Tag>\n      <Key>foo</Key>\n      <Value>bar</Value>\n    </Tag>\n  </TagSet>\n</Tagging>'
      };
      s3.createPresignedPost({
        Bucket: 'bucket',
        Fields: fieldsToInclude
      }, function(err, data) {
        var decoded = JSON.parse(AWS.util.base64.decode(data.fields.Policy));
        var conditions = {};
        decoded.conditions.forEach(function(condition) {
          if (typeof condition === 'object') {
            var conditionKey = Object.keys(condition)[0];
            conditions[conditionKey] = condition[conditionKey];
          }
        });
        Object.keys(fieldsToInclude).forEach(function(key) {
          expect(data.fields[key]).to.equal(fieldsToInclude[key]);
          expect(data.fields[key]).to.equal(conditions[key]);
        });
        done();
      });
    });
  });

  describe('getBucketPolicy', function() {
    it('converts the body to a string', function(done) {
      var policy = JSON.stringify({
        key: 'value',
        foo: 'bar',
        fizz: 1
      });
      var body = AWS.util.buffer.toBuffer(policy);
      helpers.mockHttpResponse(200, {}, body);
      s3.getBucketPolicy(function(err, data) {
        expect(Buffer.isBuffer(data.Policy)).to.be['false'];
        expect(data.Policy).to.eql(policy);
        done();
      });
    });
  });

  describe('s3UsEast1RegionalEndpoint config', function() {
    it('should set the config from client', function() {
      helpers.mockHttpResponse(200, {}, '{}');
      var values = ['regional', 'RegionaL', 'legacy', 'LegacY'];
      for (var i = 0; i < values.length; i++) {
        var s3 = new AWS.S3({s3UsEast1RegionalEndpoint: values[i]});
        var request = s3.listBuckets().build(function() {});
        expect(request.service.config.s3UsEast1RegionalEndpoint).to.equal(
          values[i].toLowerCase()
        );
      }
    });

    it('should throw if the config is set to invalid values', function() {
      helpers.mockHttpResponse(200, {}, '{}');
      var values = ['foo', 'bar', 'region'];
      var errors = [];
      for (var i = 0; i < values.length; i++) {
        var s3 = new AWS.S3({s3UsEast1RegionalEndpoint: values[i]});
        s3.listBuckets().build(function(err) {
          errors.push(err);
        });
      }
      expect(errors.length).to.equal(values.length);
      for (var i = 0; i < errors.length; i++) {
        expect(errors[i].code).to.equal('InvalidConfiguration');
      }
    });

    if (AWS.util.isNode()) {
      describe('should set the config from AWS_S3_US_EAST_1_REGIONAL_ENDPOINT environmental variable', function() {
        var originalEnv;
        beforeEach(function() {
          originalEnv = process.env;
          process.env = {};
        });
        afterEach(function() {
          process.env = originalEnv;
        });
        it('should be used if client config is not set', function() {
          process.env.AWS_S3_US_EAST_1_REGIONAL_ENDPOINT = 'Regional';
          var s3 = new AWS.S3();
          s3.listBuckets().build(function() {});
          expect(s3.config.s3UsEast1RegionalEndpoint).to.equal('regional');
          process.env.AWS_S3_US_EAST_1_REGIONAL_ENDPOINT = 'LegacY';
          s3 = new AWS.S3();
          s3.listBuckets().build(function() {});
          expect(s3.config.s3UsEast1RegionalEndpoint).to.equal('legacy');
        });

        it('should throw if the config is set to invalid values', function() {
          var values = ['foo', 'bar', 'region'];
          var errors = [];
          for (var i = 0; i < values.length; i++) {
            process.env.AWS_S3_US_EAST_1_REGIONAL_ENDPOINT = values[i];
            s3 = new AWS.S3();
            s3.listBuckets().build(function(err) {
              errors.push(err);
            });
          }
          expect(errors.length).to.equal(values.length);
          for (var i = 0; i < errors.length; i++) {
            expect(errors[i].code).to.equal('InvalidEnvironmentalVariable');
          }
        });
      });

      describe('should set config from s3_us_east_1_regional_endpoint config file entry', function() {
        it('should be used if environmental variable is not set', function() {
          helpers.spyOn(AWS.util, 'getProfilesFromSharedConfig').andReturn({
            default: {
              s3_us_east_1_regional_endpoint: 'RegionaL'
            }
          });
          var s3 = new AWS.S3();
          s3.listBuckets().build(function() {});
          expect(s3.config.s3UsEast1RegionalEndpoint).to.equal('regional');
          helpers.spyOn(AWS.util, 'getProfilesFromSharedConfig').andReturn({
            default: {
              s3_us_east_1_regional_endpoint: 'LegaCy'
            }
          });
          var s3 = new AWS.S3();
          s3.listBuckets().build(function() {});
          expect(s3.config.s3UsEast1RegionalEndpoint).to.equal('legacy');
        });

        it('should throw if the config is set to invalid values', function() {
          var values = ['foo', 'bar', 'region'];
          var errors = [];
          for (var i = 0; i < values.length; i++) {
            helpers.spyOn(AWS.util, 'getProfilesFromSharedConfig').andReturn({
              default: {
                s3_us_east_1_regional_endpoint: values[i]
              }
            });
            s3 = new AWS.S3();
            s3.listBuckets().build(function(err) {
              errors.push(err);
            });
          }
          expect(errors.length).to.equal(values.length);
          for (var i = 0; i < errors.length; i++) {
            expect(errors[i].code).to.equal('InvalidConfiguration');
          }
        });
      });

      describe('should construct regional endpoint correctly', function() {
        it('according to config settings', function() {
          var s3 = new AWS.S3({region: 'us-west-2'});
          var request = s3.listBuckets().build(function() {});
          expect(request.httpRequest.endpoint.hostname).to.equal('s3.us-west-2.amazonaws.com');
          s3 = new AWS.S3({region: 'us-east-1'});
          var request = s3.listBuckets().build(function() {});
          expect(request.httpRequest.endpoint.hostname).to.equal('s3.amazonaws.com');
          s3 = new AWS.S3({region: 'us-east-1', s3UsEast1RegionalEndpoint: 'regional'});
          request = s3.listBuckets().build(function() {});
          expect(request.httpRequest.endpoint.hostname).to.equal('s3.us-east-1.amazonaws.com');
        });
        it('should use global endpoints for when config is set to legacy', function() {
          s3 = new AWS.S3({region: 'us-east-1', s3UsEast1RegionalEndpoint: 'legacy'});
          request = s3.listBuckets().build(function() {});
          expect(request.httpRequest.endpoint.hostname).to.equal('s3.amazonaws.com');
        });
        it('should not update endpoint if supplied a custom endpoint', function() {
          s3 = new AWS.S3({
            region: 'us-east-1',
            s3UsEast1RegionalEndpoint: 'regional',
            endpoint: 's3.amazonaws.com'
          });
          request = s3.listBuckets().build(function() {});
          expect(request.httpRequest.endpoint.hostname).to.equal('s3.amazonaws.com');
        });
      });
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
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:sqs:us-west-2:123456789012:someresource',
          Key: 'key'
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
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-west-2::accesspoint:mybucket',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN accountID does not match regex "[0-9]{12}"');
          done();
        });
      });

      it('should throw if supplied invalid accountId in ARN', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-west-2:1234567890:accesspoint:mybucket',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN accountID does not match regex "[0-9]{12}"');
          done();
        });
      });
    });

    describe('validateArnRegion', function() {
      it('should throw if supplied empty region in ARN', function(done) {
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3::123456789012:accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN region is empty');
          done();
        });
      });

      it('should correctly generate access point endpoint for s3-external-1', function() {
        var client = new AWS.S3({region: 'us-east-1'});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.listObjects({
          Bucket: 'arn:aws:s3:s3-external-1:123456789012:accesspoint/myendpoint'
        });
        var built = request.build(function() {});
        expect(
          built.httpRequest.endpoint.hostname
        ).to.equal('myendpoint-123456789012.s3-accesspoint.s3-external-1.amazonaws.com');
      });

      it('should correctly generate access point endpoint when useFipsEndpoint=true', function() {
        var client = new AWS.S3({region: 'us-west-2', useFipsEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.listObjects({
          Bucket: 'arn:aws:s3:us-west-2:123456789012:accesspoint/myendpoint'
        });
        var built = request.build(function() {});
        expect(
          built.httpRequest.endpoint.hostname
        ).to.equal('myendpoint-123456789012.s3-accesspoint-fips.us-west-2.amazonaws.com');
      });

      it('should throw when fips region is passed in ARN', function() {
        var client = new AWS.S3({region: 'us-west-2', useFipsEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = client.listObjects({
          Bucket: 'arn:aws:s3:fips-us-west-2:123456789012:accesspoint/myendpoint'
        });
        var error;
        request.build(function(err) {
          error = err;
        });
        expect(error.name).to.equal('InvalidConfiguration');
        expect(error.message).to.equal('FIPS region not allowed in ARN');
      });

      it('should use regions from ARN if s3UseArnRegion config is set to false', function(done) {
        s3 = new AWS.S3({region: 'us-west-2', s3UseArnRegion: false});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
          Key: 'key'
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
          s3 = new AWS.S3({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = s3.getObject({
            Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
            Key: 'key'
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
          s3 = new AWS.S3({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = s3.getObject({
            Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
            Key: 'key'
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
          s3 = new AWS.S3({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = s3.getObject({
            Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
            Key: 'key'
          });
          request.send(function(err, data) {
            expect(err).to.exist;
            expect(err.name).to.equal('InvalidConfiguration');
            expect(err.message).to.equal('s3_use_arn_region only accepts true or false. Got foo');
            done();
          });
        });

        it('should use regions from ARN if s3_use_arn_region config is set', function(done) {
          var mock = '[default]\ns3_use_arn_region = false';
          process.env.HOME = 'foo';
          helpers.spyOn(AWS.util, 'readFileSync').andReturn(mock);
          s3 = new AWS.S3({region: 'us-west-2'});
          helpers.mockHttpResponse(200, {}, '');
          var request = s3.getObject({
            Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
            Key: 'key'
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
        s3 = new AWS.S3({region: 'us-west-2'});
        var request = s3.getObject({
          Bucket: 'arn:aws-cn:s3:cn-north-1:123456789012:accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Configured region and access point region not in same partition');
          done();
        });
      });

      it('should throw if useAccelerateEndpoint is set to true', function(done) {
        s3 = new AWS.S3({region: 'us-west-2', useAccelerateEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-west-2:123456789012:accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('useAccelerateEndpoint config is not supported with access point ARN');
          done();
        });
      });

      it('should throw if useDualstackEndpoint it set to true for outposts Arn', function(done) {
        s3 = new AWS.S3({region: 'us-west-2', useDualstackEndpoint: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Dualstack is not supported with outposts access point ARN');
          done();
        });
      });
    });

    describe('validateArnResourceType', function() {
      it('should throw if access point ARN is not for access point resource', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-west-2:123456789012:bucket_name:mybucket',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN resource should begin with \'accesspoint/\'');
          done();
        });
      });
    });

    describe('validateS3AccessPointArn', function() {
      it('should throw if access point ARN resource format is incorrect', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-west-2:123456789012:accesspoint:mybucket:blah',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('Access Point ARN should have one resource accesspoint/{accesspointName}');
          done();
        });
      });

      it('should throw if bucket name is not dns compatible', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-west-2:123456789012:accesspoint:my.bucket',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('Access point resource in ARN is not DNS compatible. Got my.bucket');
          done();
        });
      });
    });

    describe('validateOutpostsArn', function() {
      it('should throw if ARN doesn\'t begin with outpost', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:bucket_name:mybucket',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('ARN resource should begin with \'outpost/\'');
          done();
        });
      });

      it('should throw if outpost ID is not valid RFC 3986 Host', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op.outpostId:accesspoint:mybucket',
          Key: 'key'
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
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:mybucket:blah',
          Key: 'key'
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

      it('should throw if bucket name is not dns compatible', function(done) {
        s3 = new AWS.S3();
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:my.bucket',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidARN');
          expect(err.message).to.equal('Access point resource in ARN is not DNS compatible. Got my.bucket');
          done();
        });
      });
    });

    describe('validatePopulateUriFromArn', function() {
      it('should throw if manually-set endpoint is present', function(done) {
        s3 = new AWS.S3({region: 'us-west-2', endpoint: 'https://bucket.s3.us-west-2.amazonaws.com'});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Custom endpoint is not compatible with access point ARN');
          done();
        });
      });

      it('should throw if s3forcePathStyle co-exists with access point ARN', function(done) {
        s3 = new AWS.S3({s3ForcePathStyle: true});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(err.name).to.equal('InvalidConfiguration');
          expect(err.message).to.equal('Cannot construct path-style endpoint with access point');
          done();
        });
      });
    });

    [
      {
        service: 's3',
        resource: '',
        endpoint: 's3-accesspoint'
      },
      {
        service: 's3-outposts',
        resource: 'outpost/op-01234567890123456/',
        endpoint: 'op-01234567890123456.s3-outposts'
      }
    ].forEach(function(input) {

      var service = input.service;
      var resource = input.resource;
      var endpoint = input.endpoint;

      it('should correctly generate access point endpoint', function(done) {
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:' + service + ':us-west-2:123456789012:' + resource + 'accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.not.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal(
            'myendpoint-123456789012.' + endpoint + '.us-west-2.amazonaws.com'
          );
          expect(request.httpRequest.path).to.equal('/key');
          done();
        });
      });

      it('should correctly generate access point endpoint with no client config', function(done) {
        helpers.mockHttpResponse(200, {}, '');
        client = new AWS.S3();
        var request = client.getObject({
          Bucket: 'arn:aws:' + service + ':us-west-2:123456789012:' + resource + 'accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.not.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal(
            'myendpoint-123456789012.' + endpoint + '.us-west-2.amazonaws.com'
          );
          expect(request.httpRequest.path).to.equal('/key');
          done();
        });
      });

      it('should correctly generate access point endpoint containing \':\'', function(done) {
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:' + service + ':us-west-2:123456789012:' + resource.split('/').join(':') + 'accesspoint:myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.not.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal(
            'myendpoint-123456789012.' + endpoint + '.us-west-2.amazonaws.com'
          );
          expect(request.httpRequest.path).to.equal('/key');
          done();
        });
      });

      it('should correctly generate access point endpoint for us-gov partition', function(done) {
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws-us-gov:' + service + ':us-gov-east-1:123456789012:' + resource + 'accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal(
            'myendpoint-123456789012.' + endpoint + '.us-gov-east-1.amazonaws.com'
          );
          expect(request.httpRequest.path).to.equal('/key');
          done();
        });
      });

      it('should use endpoint suffix according to endpoint partition(China)', function(done) {
        s3 = new AWS.S3({region: 'cn-north-1'});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws-cn:' + service + ':cn-north-1:123456789012:' + resource + 'accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.not.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal(
            'myendpoint-123456789012.' + endpoint + '.cn-north-1.amazonaws.com.cn'
          );
          expect(request.httpRequest.path).to.equal('/key');
          done();
        });
      });

      it('should use regions from ARN by default', function(done) {
        s3 = new AWS.S3({region: 'us-west-2'});
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.getObject({
          Bucket: 'arn:aws:' + service + ':us-east-1:123456789012:' + resource + 'accesspoint/myendpoint',
          Key: 'key'
        });
        request.send(function(err, data) {
          expect(err).to.not.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal(
            'myendpoint-123456789012.' + endpoint + '.us-east-1.amazonaws.com'
          );
          expect(request.httpRequest.path).to.equal('/key');
          done();
        });
      });

      it('should not apply access point ARN parsing to CreateBucketAPI', function(done) {
        helpers.mockHttpResponse(200, {}, '');
        var request = s3.createBucket({
          Bucket: 'arn:aws:' + service + ':us-east-1:123456789012:' + resource.split('/').join(':') + 'accesspoint:myendpoint'
        });
        request.send(function(err, data) {
          expect(err).to.not.exist;
          expect(request.httpRequest.endpoint.hostname).to.equal('s3.amazonaws.com');
          expect(request.httpRequest.path).to.equal(
            '/arn%3Aaws%3A' + service + '%3Aus-east-1%3A123456789012%3A' + resource.split('/').join('%3A') + 'accesspoint%3Amyendpoint'
          );
          done();
        });
      });
    });

    it('should correctly generate dualstack endpoint from access point arn', function(done) {
      s3 = new AWS.S3({region: 'us-west-2', useDualstackEndpoint: true});
      helpers.mockHttpResponse(200, {}, '');
      var request = s3.getObject({
        Bucket: 'arn:aws:s3:us-west-2:123456789012:accesspoint/myendpoint',
        Key: 'key'
      });
      request.send(function(err, data) {
        expect(err).to.not.exist;
        expect(request.httpRequest.endpoint.hostname).to.equal('myendpoint-123456789012.s3-accesspoint.dualstack.us-west-2.amazonaws.com');
        expect(request.httpRequest.path).to.equal('/key');
        done();
      });
    });
  });
});
