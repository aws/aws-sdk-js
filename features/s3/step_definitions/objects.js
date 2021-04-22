module.exports = function () {

  this.When(/^I put "([^"]*)" to the(?: invalid)? key "([^"]*)"$/, function(data, key, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: data};
    this.request('s3', 'putObject', params, next, false);
  });

  this.When(/^I get the object "([^"]*)"$/, function(key, next) {
    var params = {Bucket: this.sharedBucket, Key: key};
    this.request('s3', 'getObject', params, next, false);
  });

  this.When(/^I put (?:a |an )(empty|small|large|\d+KB|\d+MB) buffer to the key "([^"]*)"$/, function(size, key, next) {
    var body = this.createBuffer(size);
    var params = {Bucket: this.sharedBucket, Key: key, Body: body};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I put (?:a |an )(empty|small|large) file to the key "([^"]*)"$/, function(size, key, next) {
    var fs = require('fs');
    var filename = this.createFile(size, key);
    var params = {Bucket: this.sharedBucket, Key: key, Body: fs.createReadStream(filename)};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I put "([^"]*)" to the key "([^"]*)" with ContentLength (\d+)$/, function(contents, key, contentLength, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: contents, ContentLength: parseInt(contentLength)};
    this.s3nochecksums = new this.AWS.S3({computeChecksums: false});
    this.request('s3nochecksums', 'putObject', params, next);
  });

  this.Then(/^the object "([^"]*)" should contain "([^"]*)"$/, function(key, contents, next) {
    this.assert.equal(this.data.Body.toString().replace('\n', ''), contents);
    next();
  });

  this.Then(/^the HTTP response should have a content length of (\d+)$/, function(contentLength, next) {
    this.assert.equal(this.response.httpResponse.body.length, parseInt(contentLength));
    next();
  });

  this.When(/^I copy the object "([^"]*)" to "([^"]*)"$/, function(key1, key2, next) {
    var params = {
      Bucket: this.sharedBucket, Key: key2, CopySource: '/' + this.sharedBucket + '/' + key1
    };
    this.request('s3', 'copyObject', params, next);
  });

  this.When(/^I delete the object "([^"]*)"$/, function(key, next) {
    var params = {Bucket: this.sharedBucket, Key: key};
    this.request('s3', 'deleteObject', params, next);
  });

  this.Then(/^the object "([^"]*)" should (not )?exist$/, function(key, shouldNotExist, next) {
    var params = { Bucket: this.sharedBucket, Key: key };
    this.eventually(next, function (retry) {
      retry.condition = function() {
        if (shouldNotExist) {
          return this.error && this.error.code === 'NotFound';
        } else {
          return !this.error;
        }
      };
      this.request('s3', 'headObject', params, retry, false);
    });
  });

  this.When(/^I stream key "([^"]*)"$/, function(key, callback) {
    var params = {Bucket: this.sharedBucket, Key: key};
    var world = this;
    this.result = '';
    var s = this.service.getObject(params).createReadStream();

    setTimeout(function() {
      s.on('end', function() { callback(); });
      s.on('data', function(d) { world.result += d.toString(); });
    }, 2000); // delay streaming to ensure it is buffered
  });

  this.When(/^I stream2 key "([^"]*)"$/, function(key, callback) {
    if (!require('stream').Readable) return callback();
    var params = {Bucket: this.sharedBucket, Key: key};
    var world = this;
    this.result = '';
    var stream = this.service.getObject(params).createReadStream();
    setTimeout(function() {
      stream.on('end', function() { callback(); });
      stream.on('readable', function() {
        var v = stream.read(); if (v) world.result += v;
      });
    }, 2000); // delay streaming to ensure it is buffered
  });

  this.Then(/^the streamed data should contain "([^"]*)"$/, function(data, callback) {
    this.assert.equal(this.result.replace('\n', ''), data);
    callback();
  });

  this.Then(/^the streamed data content length should equal (\d+)$/, function(length, callback) {
    this.assert.equal(this.result.length, length);
    callback();
  });

  this.When(/^I get a pre\-signed URL to GET the key "([^"]*)"$/, function(key, callback) {
    var world = this;
    this.s3.getSignedUrl('getObject', {Bucket: this.sharedBucket, Key: key}, function(err, url) {
      world.signedUrl = url;
      callback();
    });
  });

  this.When(/^I access the URL via HTTP GET$/, function(callback) {
    var world = this;
    this.data = '';
    require('https').get(this.signedUrl, function (res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    }).on('error', callback.fail);
  });

  this.Given(/^I get a pre\-signed URL to PUT the key "([^"]*)"(?: with data "([^"]*)")?$/, function(key, body, callback) {
    var world = this;
    var params = {Bucket: this.sharedBucket, Key: key};
    if (body) params.Body = body;
    this.s3.getSignedUrl('putObject', params, function(err, url) {
      world.signedUrl = url;
      callback();
    });
  });

  this.Given(/^I access the URL via HTTP PUT with data "([^"]*)"$/, function(body, callback) {
    var world = this;
    this.data = '';

    var data = body;
    var options = require('url').parse(this.signedUrl);
    options.method = 'PUT';
    options.headers = {'Content-Length': data.length};

    require('https').request(options, function (res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    }).on('error', callback.fail).end(data);
  });

  this.Given(
    /^I create a presigned form to POST the key "([^"]*)" with the data "([^"]*)"$/,
    function (key, data, callback) {
      var world = this;
      var boundary = this.postBoundary = '----WebKitFormBoundaryLL0mBKIuuLUKr7be';
      var conditions = [
          ['content-length-range', data.length - 1, data.length + 1]
        ],
        params = {
          Bucket: this.sharedBucket,
          Fields: {key: key},
          Conditions: conditions
        };
      this.s3.createPresignedPost(params, function(err, postData) {
        var body = Object.keys(postData.fields).reduce(function(body, fieldName) {
          body += '--' + boundary + '\r\n';
          body += 'Content-Disposition: form-data; name="' + fieldName + '"\r\n\r\n';
          return body + postData.fields[fieldName] + '\r\n';
        }, '');
        body += '--' + world.postBoundary + '\r\n';
        body += 'Content-Disposition: form-data; name="file"; filename="' + key + '"\r\n';
        body += 'Content-Type: text/plain\r\n\r\n';
        body += data + '\r\n';
        body += '--' + world.postBoundary + '\r\n';
        body += 'Content-Disposition: form-data; name="submit"\r\n';
        body += 'Content-Type: text/plain\r\n\r\n';
        body += 'submit\r\n';
        body += '--' + world.postBoundary + '--\r\n';
        world.postBody = body;
        world.postAction = postData.url;
        callback();
      });
    }
  );

  this.Given(/^I POST the form$/, function (callback) {
    var world = this;
    var options = require('url').parse(this.postAction);
    options.method = 'POST';
    options.headers = {
      'Content-Type': 'multipart/form-data; boundary=' + this.postBoundary,
      'Content-Length': this.postBody.length
    };
    require('https').request(options, function(res) {
      res.on('data', function (chunk) {
        world.data += chunk.toString();
      }).on('end', callback);
    })
      .on('error', callback.fail)
      .end(this.postBody);
  });

  this.Then(/^the HTTP response should equal "([^"]*)"$/, function(data, callback) {
    this.assert.equal(this.data, data);
    callback();
  });

  this.Then(/^the HTTP response should contain "([^"]*|)"$/, function(data, callback) {
    this.assert.match(this.data, data);
    callback();
  });

  this.Given(/^I setup the listObjects request for the bucket$/, function(callback) {
    this.params = { Bucket: this.sharedBucket };
    callback();
  });

  // progress events

  this.When(/^I put (?:a |an )(empty|small|large|\d+KB|\d+MB) buffer to the key "([^"]*)" with progress events$/, function(size, key, callback) {
    var self = this;
    var body = self.createBuffer(size);
    this.progress = [];
    var req = this.s3.putObject({Bucket: this.sharedBucket, Key: key, Body: body});
    req.on('httpUploadProgress', function (p) { self.progress.push(p); });
    req.send(callback);
  });

  this.Then(/^more than (\d+) "([^"]*)" event should fire$/, function(numEvents, eventName, callback) {
    this.assert.compare(this.progress.length, '>', numEvents);
    callback();
  });

  this.Then(/^the "([^"]*)" value of the progress event should equal (\d+)MB$/, function(prop, mb, callback) {
    this.assert.equal(this.progress[0][prop], mb * 1024 * 1024);
    callback();
  });

  this.Then(/^the "([^"]*)" value of the first progress event should be greater than (\d+) bytes$/, function(prop, bytes, callback) {
    this.assert.compare(this.progress[0][prop], '>', bytes);
    callback();
  });

  this.When(/^I read the key "([^"]*)" with progress events$/, function(key, callback) {
    var self = this;
    this.progress = [];
    var req = this.s3.getObject({Bucket: this.sharedBucket, Key: key});
    req.on('httpDownloadProgress', function (p) { self.progress.push(p); });
    req.send(callback);
  });

  this.When(/^I put "([^"]*)" to the private key "([^"]*)"$/, function(data, key, next) {
    var params = {Bucket: this.sharedBucket, Key: key, Body: data, ACL: 'private'};
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I put "([^"]*)" to the key "([^"]*)" with an AES key$/, function(data, key, next) {
    var params = {
      Bucket: this.sharedBucket,
      Key: key,
      Body: data,
      SSECustomerAlgorithm: 'AES256',
      SSECustomerKey: 'aaaabbbbccccddddaaaabbbbccccdddd'
    };
    this.request('s3', 'putObject', params, next);
  });

  this.When(/^I read the object "([^"]*)" with the AES key$/, function(key, next) {
    var params = {
      Bucket: this.sharedBucket,
      Key: key,
      SSECustomerAlgorithm: 'AES256',
      SSECustomerKey: 'aaaabbbbccccddddaaaabbbbccccdddd'
    };
    this.request('s3', 'getObject', params, next);
  });

  this.Given(/^I generate the MD5 checksum of "([^"]*)"$/, function(data, next) {
    this.sentContentMD5 = this.AWS.util.crypto.md5(data, 'base64');
    next();
  });

  this.Then(/^the MD5 checksum of the response data should equal the generated checksum$/, function(next) {
    var receivedContentMD5 = this.AWS.util.crypto.md5(this.data.Body.toString(), 'base64');
    this.assert.equal(receivedContentMD5, this.sentContentMD5);
    next();
  });

  this.Given(/^an empty bucket$/, function(next) {
    var self = this;
    var params = { Bucket: this.sharedBucket };
    self.s3.listObjects(params, function(err, data) {
      if (err) return next(err);
      if (data.Contents.length > 0) {
        params.Delete = { Objects: [] };
        data.Contents.forEach(function (item) {
          params.Delete.Objects.push({Key: item.Key});
        });
        self.request('s3', 'deleteObjects', params, next);
      } else {
        next();
      }
    });
  });

  this.Given(/^I use signatureVersion "([^"]*)"$/, function(signatureVersion, next) {
    this.s3Slashes = new this.AWS.S3({signatureVersion: signatureVersion});
    next();
  });

  this.When(/^I put "([^"]*)" to the key "([^"]*)" with bucket suffix "([^"]*)"$/, function(data, key, suffix, next) {
    var world = this;
    var params = {
      Bucket: this.sharedBucket + suffix,
      Key: key,
      Body: data
    };
    this.s3Slashes.putObject(params, function(err, data) {
      world.assert.equal(!!err, false);
      next();
    });
  });
};
