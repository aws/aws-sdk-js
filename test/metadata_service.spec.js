var AWS, helpers, http, url;

helpers = require('./helpers');

url = require('url');

http = require('http');

AWS = helpers.AWS;

if (AWS.util.isNode()) {
  describe('AWS.MetadataService', function() {
    describe('loadCredentials', function() {
      var forceTimeout, httpClient, port, ref, server, service;
      ref = [null, 1024 + parseInt(Math.random() * 100), null, null], server = ref[0], port = ref[1], service = ref[2], forceTimeout = ref[3];
      httpClient = AWS.HttpClient.getInstance();

      beforeEach(function() {
        forceTimeout = false;
        helpers.spyOn(http.ClientRequest.prototype, 'setTimeout').andCallFake(function(timeout, cb) {
          if (forceTimeout) {
            return process.nextTick(cb);
          }
        });
        service = new AWS.MetadataService({
          host: '127.0.0.1:' + port
        });
        server = http.createServer(function(req, res) {
          var data, match, re;
          re = new RegExp('^/latest/meta-data/iam/security-credentials/(.*)$');
          match = url.parse(req.url).pathname.match(re);
          if (match) {
            res.writeHead(200, {
              'Content-Type': 'text/plain'
            });
            if (match[1] === '') {
              res.write('TestingRole\n');
              res.write('TestingRole2\n');
            } else {
              data = '{"Code":"Success","AccessKeyId":"KEY","SecretAccessKey":"SECRET","Token":"TOKEN"}';
              res.write(data);
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

      it('should load credentials from metadata service', function(done) {
        service.loadCredentials(function(err, data) {
          expect(err).to.equal(null);
          expect(data.Code).to.equal('Success');
          expect(data.AccessKeyId).to.equal('KEY');
          expect(data.SecretAccessKey).to.equal('SECRET');
          expect(data.Token).to.equal('TOKEN');
          done();
        });
      });

      it('should load credentials from metadata service', function(done) {
        var concurrency, countdown, i, ref1, results, x;
        concurrency = countdown = 10;
        results = [];
        for (x = i = 1, ref1 = concurrency; 1 <= ref1 ? i <= ref1 : i >= ref1; x = 1 <= ref1 ? ++i : --i) {
          results.push(service.loadCredentials(function(err, data) {
            expect(err).to.equal(null);
            expect(data.Code).to.equal('Success');
            expect(data.AccessKeyId).to.equal('KEY');
            expect(data.SecretAccessKey).to.equal('SECRET');
            expect(data.Token).to.equal('TOKEN');
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

      it('should retry when request times out', function(done) {
        var firstTry, options, spy;
        options = {
          host: '127.0.0.1:' + port,
          maxRetries: 5
        };
        firstTry = true;
        spy = helpers.spyOn(httpClient, 'handleRequest').andCallFake(function() {
          if (firstTry) {
            forceTimeout = true;
            firstTry = false;
          } else {
            forceTimeout = false;
          }
          spy.origMethod.apply(httpClient, arguments);
        });
        service = new AWS.MetadataService(options);
        service.loadCredentials(function(err, data) {
          expect(err).to.be["null"];
          expect(data.AccessKeyId).to.equal('KEY');
          expect(spy.calls.length).to.equal(3);
          done();
        });
      });

      it('should retry up to the specified maxRetries when requests time out', function(done) {
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
          expect(err).to.not.be["null"];
          expect(err.code).to.equal('TimeoutError');
          expect(spy.calls.length).to.equal(6);
          done();
        });
      });

      it('makes only one pair of requests when multiple calls are made before first one finishes', function(done) {
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
              expect(spy.calls.length).to.equal(2);
              return done();
            }
          }));
        }
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
          var spy = helpers.spyOn(AWS.HttpClient.getInstance(), 'handleRequest')
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
    });
  });
}
