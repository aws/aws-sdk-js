var AWS, helpers, http, url;

helpers = require('./helpers');

url = require('url');

http = require('http');

AWS = helpers.AWS;

if (AWS.util.isNode()) {
  describe('AWS.MetadataService', function() {
    describe('loadCredentials', function() {
      var forceTimeout, statusCodeOnTokenReq, statusCodeOnCreds, tokenToReturn, credsToReturn, httpClient, port, ref, server, service;
      var reSecCreds = new RegExp('^/latest/meta-data/iam/security-credentials/(.*)$');
      var reApiToken = new RegExp('^/latest/api/token$');
      ref = [null, 1024 + parseInt(Math.random() * 100), null, null], server = ref[0], port = ref[1], service = ref[2], forceTimeout = ref[3];
      httpClient = AWS.HttpClient.getInstance();

      beforeEach(function() {
        forceTimeout = false;
        statusCodeOnTokenReq = undefined;
        statusCodeOnCreds = undefined;
        credsToReturn = '{"Code":"Success","AccessKeyId":"KEY","SecretAccessKey":"SECRET"}';
        tokenToReturn = undefined;
        helpers.spyOn(http.ClientRequest.prototype, 'setTimeout').andCallFake(function(timeout, cb) {
          if (forceTimeout) {
            return process.nextTick(cb);
          }
        });
        service = new AWS.MetadataService({
          host: '127.0.0.1:' + port
        });
        server = http.createServer(function(req, res) {
          var matchSecCreds = url.parse(req.url).pathname.match(reSecCreds);
          var matchApiToken = url.parse(req.url).pathname.match(reApiToken);
          if (matchApiToken) {
            expect(req.method).to.equal('PUT');
            expect(req.headers['x-aws-ec2-metadata-token-ttl-seconds']).to.equal('21600');
            if (statusCodeOnTokenReq) {
              res.writeHead(statusCodeOnTokenReq, {});
            } else {
              res.writeHead(200, {
                'Content-Type': 'text/plain'
              });
              res.write(tokenToReturn);
            }
          } else if (matchSecCreds) {
            expect(req.method).to.equal('GET');
            if (tokenToReturn) {
              expect(req.headers['x-aws-ec2-metadata-token']).to.equal(tokenToReturn);
            } else {
              expect(req.headers['x-aws-ec2-metadata-token']).to.be.undefined;
            }
            if (statusCodeOnCreds) {
              res.writeHead(statusCodeOnCreds, {});
            } else {
              res.writeHead(200, {
                'Content-Type': 'text/plain'
              });
              if (matchSecCreds[1] === '') {
                res.write('TestingRole\n');
                res.write('TestingRole2\n');
              } else {
                res.write(credsToReturn);
              }
            }
          } else {
            res.writeHead(404, {});
          }
          res.end();
        });
        server.listen(port);
      });

      afterEach(function() {
        if (server) {
          server.close();
        }
      });

      it('should load credentials from metadata service (token available)', function(done) {
        tokenToReturn = 'TOKEN';
        service.loadCredentials(function(err, data) {
          expect(err).to.equal(null);
          expect(data.Code).to.equal('Success');
          expect(data.AccessKeyId).to.equal('KEY');
          expect(data.SecretAccessKey).to.equal('SECRET');
          done();
        });
      });

      it('should load credentials from metadata service (token not available)', function(done) {
        statusCodeOnTokenReq = 404;
        service.loadCredentials(function(err, data) {
          expect(err).to.equal(null);
          expect(data.Code).to.equal('Success');
          expect(data.AccessKeyId).to.equal('KEY');
          expect(data.SecretAccessKey).to.equal('SECRET');
          done();
        });
      });

      it('should load credentials from metadata service', function(done) {
        tokenToReturn = 'TOKEN';
        var concurrency, countdown, i, ref1, results, x;
        concurrency = countdown = 10;
        results = [];
        for (x = i = 1, ref1 = concurrency; 1 <= ref1 ? i <= ref1 : i >= ref1; x = 1 <= ref1 ? ++i : --i) {
          results.push(service.loadCredentials(function(err, data) {
            expect(err).to.equal(null);
            expect(data.Code).to.equal('Success');
            expect(data.AccessKeyId).to.equal('KEY');
            expect(data.SecretAccessKey).to.equal('SECRET');
            countdown--;
            if (countdown === 0) {
              done();
            }
          }));
        }
      });

      it('should fail if server is not up', function(done) {
        server.close();
        server = null;
        service.loadCredentials(function(err, data) {
          expect(err).to.be.instanceOf(Error);
          expect(data).not.to.exist;
          done();
        });
      });

      it('should fail in case of JSON ParseError', function(done) {
        // return invalid creds
        tokenToReturn = 'TOKEN';
        credsToReturn = '{"Code":"Success"';
        service.loadCredentials(function(err, data) {
          expect(err).to.be.instanceOf(SyntaxError);
          expect(data).not.to.exist;
          done();
        });
      });

      it('should retry when request times out', function(done) {
        tokenToReturn = 'TOKEN';
        var firstTry, options, spy;
        options = {
          host: '127.0.0.1:' + port,
          maxRetries: 5
        };
        firstTry = true;
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallFake(function() {
          var matchSecCreds = url.parse(arguments[0].path).pathname.match(reSecCreds);
          if (matchSecCreds) {
            if (firstTry) {
              forceTimeout = true;
              firstTry = false;
            } else {
              forceTimeout = false;
            }
          }
          spy.origMethod.apply(httpClient, arguments);
        });
        service = new AWS.MetadataService(options);
        service.loadCredentials(function(err, data) {
          expect(err).to.be['null'];
          expect(data.AccessKeyId).to.equal('KEY');
          expect(spy.calls.length).to.equal(4);
          done();
        });
      });

      it('should retry up to the specified maxRetries when requests time out', function(done) {
        tokenToReturn = 'TOKEN';
        var options, spy;
        options = {
          host: '127.0.0.1:' + port,
          maxRetries: 5
        };
        forceTimeout = true;
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallThrough();
        service = new AWS.MetadataService(options);
        service.loadCredentials(function(err, data) {
          expect(data).to.be.undefined;
          expect(err).to.not.be['null'];
          expect(err.code).to.equal('TimeoutError');
          // 6 requests for tokens, and 6 requests for roleName
          expect(spy.calls.length).to.equal(12);
          done();
        });
      });

      it('should use insecure data flow if token request times out', function(done) {
        var options, spy;
        options = {
          host: '127.0.0.1:' + port,
          maxRetries: 5
        };
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallFake(function() {
          var matchApiToken = url.parse(arguments[0].path).pathname.match(reApiToken);
          if (matchApiToken) {
            forceTimeout = true;
          } else {
            forceTimeout = false;
          }
          spy.origMethod.apply(httpClient, arguments);
        });
        service = new AWS.MetadataService(options);
        service.loadCredentials(function(err, data) {
          expect(err).to.equal(null);
          expect(data.Code).to.equal('Success');
          expect(data.AccessKeyId).to.equal('KEY');
          expect(data.SecretAccessKey).to.equal('SECRET');
          // 6 requests for token, and one request each for roleName and creds
          expect(spy.calls.length).to.equal(8);
          done();
        });
      });

      it('should fail if token request returns 400 error', function(done) {
        statusCodeOnTokenReq = 400;
        service.loadCredentials(function(err, data) {
          expect(data).to.be.undefined;
          expect(err).to.not.be['null'];
          expect(err.message).to.equal('EC2 Metadata token request returned 400');
          done();
        });
      });

      it('should fail if creds request returns 404', function(done) {
        tokenToReturn = 'TOKEN';
        statusCodeOnCreds = 400;
        service.loadCredentials(function(err, data) {
          expect(data).to.be.undefined;
          expect(err).to.not.be['null'];
          expect(err.statusCode).to.be[400];
          done();
        });
      });

      it('makes only one pair of requests when multiple calls are made before first one finishes', function(done) {
        tokenToReturn = 'TOKEN';
        var concurrency, countdown, i, options, ref1, results, services, spy, x;
        options = {
          host: '127.0.0.1:' + port
        };
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallThrough();
        concurrency = countdown = 10;
        services = [];
        results = [];
        for (x = i = 1, ref1 = concurrency; 1 <= ref1 ? i <= ref1 : i >= ref1; x = 1 <= ref1 ? ++i : --i) {
          services[x - 1] = new AWS.MetadataService(options);
          results.push(services[x - 1].loadCredentials(function(err, data) {
            expect(err).to.equal(null);
            expect(data.AccessKeyId).to.equal('KEY');
            countdown--;
            if (countdown === 0) {
              expect(spy.calls.length).to.equal(3);
              return done();
            }
          }));
        }
      });

      it('should load credentials when host is not passed', function(done) {
        tokenToReturn = 'TOKEN';
        service = new AWS.MetadataService();
        // Simulate endpoint is received from call to getMetadataServiceEndpoint
        service.endpoint = 'http://127.0.0.1:' + port;
        service.loadCredentials(function(err, data) {
          expect(err).to.equal(null);
          expect(data.Code).to.equal('Success');
          expect(data.AccessKeyId).to.equal('KEY');
          expect(data.SecretAccessKey).to.equal('SECRET');
          done();
        });
      });
    });

    describe('request', function() {
      var disabledEnvAtStart = process.env[AWS.util.imdsDisabledEnv];

      beforeEach(function() {
        delete process.env[AWS.util.imdsDisabledEnv];
      });

      afterEach(function() {
        if (typeof disabledEnvAtStart === 'string') {
          process.env[AWS.util.imdsDisabledEnv] = disabledEnvAtStart;
        } else {
          delete process.env[AWS.util.imdsDisabledEnv];
        }
      });

      it(
        'should not make any requests if the AWS_EC2_METADATA_DISABLED environment variable is set to a truthy value',
        function(done) {
          process.env.AWS_EC2_METADATA_DISABLED = '1';
          var spy = helpers.spyOn(AWS.util, 'handleRequestWithRetries')
            .andCallThrough();
          var service = new AWS.MetadataService();

          service.request('/foo/bar', function(err, data) {
            expect(spy.calls.length).to.equal(0);
            expect(data).not.to.exist;
            expect(err).to.exist;
            expect(err.message).to.equal('EC2 Instance Metadata Service access disabled');
            done();
          });
        }
      );

      it(
        'make requests if the AWS_EC2_METADATA_DISABLED environment variable is set to a falsy value',
        function(done) {
          var returnedData = 'returnedData';
          process.env.AWS_EC2_METADATA_DISABLED = '';
          var spy = helpers.spyOn(AWS.util, 'handleRequestWithRetries')
            .andCallFake(function(request, self, callback) {
              callback(null, returnedData);
            });
          var service = new AWS.MetadataService();

          service.request('/foo/bar', function(err, data) {
            expect(spy.calls.length).to.equal(1);
            expect(data).to.equal(returnedData);
            expect(err).not.to.exist;
            done();
          });
        }
      );
    });
  });
}
