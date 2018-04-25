var helpers = require('../helpers');
var AWS = helpers.AWS;
var baseName = helpers.bucketBaseName;
describe('download integrity', function() {
  var params;
  var s3;
  function putObject(customParams, done) {
    params = {
      Bucket: customParams.Bucket || params.Bucket,
      Key: customParams.Key || params.Key,
    };
    s3.createBucket({Bucket: params.Bucket}).promise().then(function() {
      return s3.waitFor('bucketExists', {Bucket: params.Bucket}).promise()
    }).then(function() {
      return s3.putObject({
        Bucket: params.Bucket,
        Key: params.Key,
        Body: customParams.Body || params.Body
      }).promise();
    }).then(function() {
      return s3.waitFor('objectExists', {
        Bucket: params.Bucket,
        Key: params.Key,
      }).promise();
    }).then(function() {
      if (typeof done === 'function') done();
    }).catch(function(err) {
      throw new Error('Cannot put object: ' + err);
      process.exit(1);
    });
  }

  function delectBucket(done) {
    s3.listObjectVersions({
      Bucket: params.Bucket
    }).promise().then(function(data) {
      var removeObjectsParams = {
        Bucket: params.Bucket,
        Delete: {
          Quiet: false,
          Objects: []
        }
      };
      for (var i = 0; i < data.Versions.length; i++) {
        var version = data.Versions[i];
        removeObjectsParams.Delete.Objects.push({
          Key: version.Key,
          VersionId: version.VersionId === 'null' ? null : version.VersionId,
        });
      }
      return removeObjectsParams;
    }).then(function(removeObjectsParams) {
      return s3.deleteObjects(removeObjectsParams).promise();
    }).then(function() {
      return s3.waitFor('objectNotExists', {
        Bucket: params.Bucket,
        Key: params.Key,
      }).promise();
    }).then(function() {
      return s3.deleteBucket({Bucket: params.Bucket}).promise();
    }).then(function(data) {
      return s3.waitFor('bucketNotExists', {Bucket: params.Bucket}).promise();
    }).then(function() {
      if (typeof done === 'function') done();
    }).catch(function(err) {
      throw new Error('Cannot delete bucket: ' + err);
      process.exit(1);
    })
  }

  before('setup s3 client with responseChecksumAlgorithm equals \'md5\'', function(done) {
    params = {
      Bucket: baseName + '-' + new Date().getTime(),
      Key: 'key',
    };
    s3 = new AWS.S3({responseChecksumAlgorithm: 'md5'});
    putObject({Body: 'this is a test!'}, done);
  })

  after('delete bucket...', function(done) {
    this.timeout(30000);
    delectBucket(done);
  })

  it('should correctly call callback when success', function(done) {
    s3.getObject({
      Bucket: params.Bucket,
      Key: params.Key,
      Range: 'bytes=0-5',
    }, function(err, data) {
      expect(err).to.be['null'];
      expect(data).to.not.be['null'];
      expect(data.Body.toString()).to.equal('this i');
      expect(data.ContentLength).to.equal(6);
      expect(data.Range).to.equal('bytes 0-5/15');
      done();
    });
  });

  it('should correctly call callback when fail', function(done) {
    s3.getObject({
      Bucket: params.Bucket,
      Key: 'wrongkey',
    }, function(err, data) {
      expect(data).to.be['null'];
      expect(err).to.not.be['null'];
      expect(err.code).to.equal('NoSuchKey');
      done();
    });
  });

  it('should correctly create read stream', function(done) {
    var data = '';
    var error = null;
    var s = s3.getObject({
      Bucket: params.Bucket,
      Key: params.Key,
    }).createReadStream();
    s.on('readable', function() {
      var dat = s.read();
      if (dat) {
        data += dat;
      }
    });
    s.on('error', function(err) {
      error = err;
    });
    s.on('end', function() {
      expect(error).to.be['null'];
      expect(data).to.not.be['null'];
      expect(data).to.equal('this is a test!');
      done();
    });
  });

  it('should raise error in creating read stream when fail', function(done) {
    var data = '';
    var error = null;
    var s = s3.getObject({
      Bucket: params.Bucket,
      Key: 'wrongKey',
    }).createReadStream();
    s.on('readable', function() {
      var dat = s.read();
      if (dat) {
        data += dat;
      }
    });
    s.on('error', function(err) {
      error = err;
      expect(error).to.not.be['null'];
      expect(error.code).to.equal('NoSuchKey');
      done();
    });
    s.on('end', function() {
      throw new Error('unexpected event');
    });
  })

  it('should correctly stream big file', function(done) {
    this.timeout(30000);
    putObject({Body: helpers.createBuffer('10MB'), Key: 'bigBuffer'});
    s3.waitFor('objectExists', {Bucket: params.Bucket, Key: 'bigBuffer'}, function(waitError, waitData) {
      expect(waitError === null).to.equal(true);
      var data = '';
      var error = null;
      var streamLength = 0;
      var s = s3.getObject({
        Bucket: params.Bucket,
        Key: 'bigBuffer',
      }).createReadStream();
      s.on('readable', function() {
        var dat = s.read();
        if (dat) {
          streamLength += dat.length;
        }
      });
      s.on('error', function(err) {
        error = err;
      });
      s.on('end', function() {
        expect(error).to.be['null'];
        expect(data).to.not.be['null'];
        expect(streamLength).to.equal(10 * 1024 * 1024);
        done();
      });
    })
  });

  it('should buffer big file in callback', function(done) {
    this.timeout(30000);
    putObject({Body: helpers.createBuffer('10MB'), Key: 'bigBuffer'});
    s3.waitFor('objectExists', {Bucket: params.Bucket, Key: 'bigBuffer'}, function(waitError, waitData) {
      expect(waitError === null).to.equal(true);
      s3.getObject({
        Bucket: params.Bucket,
        Key: 'bigBuffer',
      }, function(err, data) {
        expect(err).to.be['null'];
        expect(data).to.not.be['null'];
        expect(data.Body.length).to.equal(10 * 1024 * 1024);
        expect(data.ContentLength).to.equal(10 * 1024 * 1024);
        done();
      })
    })
  });
})
