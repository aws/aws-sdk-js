var AWS, Buffer, EventEmitter, MockService, helpers;

helpers = require('./helpers');

EventEmitter = require('events').EventEmitter;

AWS = helpers.AWS;

MockService = helpers.MockService;

buffer = AWS.util.buffer;

describe('AWS.Request', function() {
  var service;
  service = null;
  beforeEach(function() {
    return service = new MockService;
  });

  describe('constructor', function() {
    it('sets custom user agent if provided in service config', function() {
      var req;
      service.config.customUserAgent = 'custom';
      req = service.makeRequest('mockMethod');
      expect(req.httpRequest.getUserAgent()).to.match(/custom/);
    });
  });

  describe('error handling', function() {
    var evt, i, len, ref;

    it('throws errors out of callback', function() {
      helpers.mockHttpResponse(200, {}, '');
      expect(function() {
        return service.makeRequest('mockMethod', function() {
          throw new Error('error');
        });
      }).to['throw']('error');
    });
    ref = ['error', 'success', 'complete'];
    for (i = 0, len = ref.length; i < len; i++) {
      evt = ref[i];
      it('throws errors out of terminal ' + evt + ' event', function() {
        helpers.mockHttpResponse(200, {}, '');
        expect(function() {
          var req;
          req = service.makeRequest('mockMethod');
          req.on(evt, function() {
            throw new Error('error');
          });
          return req.send();
        }).to['throw']('error');
      });
    }

    it('propagates errors to error event', function() {
      var err;
      helpers.mockHttpResponse(200, {}, '');
      err = null;
      expect(function() {
        var req;
        req = service.makeRequest('mockMethod');
        req.on('extractData', function() {
          throw new Error('error');
        });
        return req.send(function(e) {
          return err = e;
        });
      }).not.to['throw']('error');
      expect(err.message).to.equal('error');
    });

    it('propagates request creation errors into response', function() {
      var db, req;
      helpers.spyOn(AWS.HttpClient, 'getInstance');
      AWS.HttpClient.getInstance.andReturn({
        handleRequest: function(req, opts, cb, errCb) {
          throw new Error('XHR error');
        }
      });
      db = new AWS.DynamoDB;
      req = db.listTables();
      req.send();
      expect(req.response.error.message).to.equal('XHR error');
    });
  });

  describe('isPageable', function() {
    beforeEach(function() {
      return service = new AWS.Service({
        apiConfig: new AWS.Model.Api({
          operations: {
            mockMethod: {}
          }
        })
      });
    });

    it('is pageable if it has a pagination config for the operation', function() {
      var request;
      service.api.paginators['mockMethod'] = new AWS.Model.Paginator('mockMethod', {
        limit_key: 'Marker'
      });
      request = service.makeRequest('mockMethod');
      expect(request.isPageable()).to.equal(true);
    });

    it('is not pageable if the pagination config does not exist for the operation', function() {
      expect(service.makeRequest('mockMethod').isPageable()).to.equal(false);
    });
  });

  describe('eachPage', function() {
    beforeEach(function() {
      service = new AWS.Service({
        apiConfig: new AWS.Model.Api({
          operations: {
            mockMethod: {
              input: {
                type: 'structure',
                members: {
                  NextToken: {
                    type: 'string'
                  }
                }
              },
              output: {
                type: 'structure',
                members: {
                  NextToken: {
                    type: 'string'
                  },
                  Value: {
                    type: 'integer'
                  }
                }
              }
            }
          },
          paginators: {
            mockMethod: {
              input_token: 'NextToken',
              output_token: 'NextToken'
            }
          }
        })
      });
      return helpers.mockResponses([
        {
          data: {
            Value: 1,
            NextToken: 'a'
          }
        }, {
          data: {
            Value: 2,
            NextToken: 'b'
          }
        }, {
          data: {
            Value: 3,
            NextToken: 'c'
          }
        }, {
          data: {
            Value: 4
          }
        }
      ]);
    });

    it('can page multiple responses', function(done) {
      var resps;
      resps = [];
      return service.mockMethod().eachPage(function(err, data) {
        resps.push([err, data]);
        if (err === null && data === null) {
          expect(resps).to.eql([
            [
              null, {
                Value: 1,
                NextToken: 'a'
              }
            ], [
              null, {
                Value: 2,
                NextToken: 'b'
              }
            ], [
              null, {
                Value: 3,
                NextToken: 'c'
              }
            ], [
              null, {
                Value: 4
              }
            ], [null, null]
          ]);
          done();
        }
      });
    });

    it('supports stopping responses if false is returned', function() {
      var resps;
      resps = [];
      service.mockMethod().eachPage(function(err, data) {
        if (resps.length === 2) {
          return false;
        }
        resps.push([err, data]);
        return true;
      });
      expect(resps).to.eql([
        [
          null, {
            Value: 1,
            NextToken: 'a'
          }
        ], [
          null, {
            Value: 2,
            NextToken: 'b'
          }
        ]
      ]);
    });

    it('supports asynchronous eachPage calls', function(done) {
      var resps;
      resps = [];
      return service.mockMethod().eachPage(function(err, data, next) {
        return process.nextTick(function() {
          resps.push([err, data]);
          next();
          if (resps.length > 4) {
            expect(resps).to.eql([
              [
                null, {
                  Value: 1,
                  NextToken: 'a'
                }
              ], [
                null, {
                  Value: 2,
                  NextToken: 'b'
                }
              ], [
                null, {
                  Value: 3,
                  NextToken: 'c'
                }
              ], [
                null, {
                  Value: 4
                }
              ], [null, null]
            ]);
            done();
          }
        });
      });
    });

    it('throws error from eachPage callback', function() {
      var e;
      try {
        return service.mockMethod().eachPage(function() {
          return invalidCode;
        });
      } catch (error1) {
        e = error1;
        expect(e.name).to.equal('ReferenceError');
      }
    });
  });

  describe('eachItem', function() {
    beforeEach(function() {
      return service = new AWS.Service({
        apiConfig: new AWS.Model.Api({
          operations: {
            mockMethod: {
              input: {
                type: 'structure',
                members: {
                  NextToken: {
                    type: 'string'
                  }
                }
              },
              output: {
                type: 'structure',
                members: {
                  NextToken: {
                    type: 'string'
                  },
                  Results: {
                    type: 'list',
                    member: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          },
          paginators: {
            mockMethod: {
              input_token: 'NextToken',
              output_token: 'NextToken',
              result_key: 'Results'
            }
          }
        })
      });
    });

    it('performs callback on each returned item', function(done) {
      var resps;
      helpers.mockResponses([
        {
          data: {
            Results: [
              {
                Value: 1
              }, {
                Value: 2
              }, {
                Value: 3
              }
            ]
          }
        }
      ]);
      resps = [];
      return service.mockMethod().eachItem(function(err, data) {
        resps.push([err, data]);
        if (err === null && data === null) {
          expect(resps).to.eql([
            [
              null, {
                Value: 1
              }
            ], [
              null, {
                Value: 2
              }
            ], [
              null, {
                Value: 3
              }
            ], [null, null]
          ]);
          done();
        }
      });
    });

    it('performs callback on items from multiple pages', function(done) {
      var resps;
      helpers.mockResponses([
        {
          data: {
            Results: [
              {
                Value: 1
              }, {
                Value: 2
              }
            ],
            NextToken: 'a'
          }
        }, {
          data: {
            Results: [
              {
                Value: 3
              }
            ],
            NextToken: 'b'
          }
        }, {
          data: {
            Results: [
              {
                Value: 4
              }, {
                Value: 5
              }
            ]
          }
        }
      ]);
      resps = [];
      return service.mockMethod().eachItem(function(err, data) {
        resps.push([err, data]);
        if (err === null && data === null) {
          expect(resps).to.eql([
            [
              null, {
                Value: 1
              }
            ], [
              null, {
                Value: 2
              }
            ], [
              null, {
                Value: 3
              }
            ], [
              null, {
                Value: 4
              }
            ], [
              null, {
                Value: 5
              }
            ], [null, null]
          ]);
          done();
        }
      });
    });

    it('supports stopping responses if false is returned', function() {
      var resps;
      helpers.mockResponses([
        {
          data: {
            Results: [
              {
                Value: 1
              }, {
                Value: 2
              }
            ],
            NextToken: 'a'
          }
        }, {
          data: {
            Results: [
              {
                Value: 3
              }
            ],
            NextToken: 'b'
          }
        }, {
          data: {
            Results: [
              {
                Value: 4
              }, {
                Value: 5
              }
            ]
          }
        }
      ]);
      resps = [];
      service.mockMethod().eachItem(function(err, data) {
        if (resps.length === 2) {
          return false;
        }
        return resps.push([err, data]);
      });
      expect(resps).to.eql([
        [
          null, {
            Value: 1
          }
        ], [
          null, {
            Value: 2
          }
        ]
      ]);
    });

    it('passes error to callback', function(done) {
      var resps;
      helpers.mockResponses([
        {
          data: {
            Results: [
              {
                Value: 1
              }, {
                Value: 2
              }
            ],
            NextToken: 'a'
          }
        }, {
          error: {
            code: 'mockError'
          },
          httpResponse: {
            statusCode: 404
          }
        }
      ]);
      resps = [];
      return service.mockMethod().eachItem(function(err, data) {
        if (err) {
          delete err.retryDelay;
        }
        resps.push([err, data]);
        if (err === null && data === null) {
          expect(resps).to.eql([
            [
              null, {
                Value: 1
              }
            ], [
              null, {
                Value: 2
              }
            ], [
              {
                code: 'mockError',
                retryable: false,
                statusCode: 404
              }, null
            ], [null, null]
          ]);
          done();
        }
      });
    });
  });

  describe('waitFor', function() {
    it('creates a ResourceWaiter object', function() {
      service.api.waiters = {
        state: {
          operation: 'mockMethod'
        }
      };
      return service.waitFor('state');
    });
  });

  describe('send', function() {
    it('accepts an optional callback', function(done) {
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
      return service.makeRequest('mockMethod').send(function(err, data) {
        expect(data).to.equal('FOOBARBAZQUX');
        done();
      });
    });

    it('adds \'callback\' to user agent if a callback is provided', function(done) {
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
      return service.makeRequest('mockMethod').send(function(err, data) {
        expect(data).to.equal('FOOBARBAZQUX');
        expect(this.request.httpRequest.getUserAgent()).to.match(/callback/);
        done();
      });
    });
  });

  describe('abort', function() {
    it('allows aborting requests', function(done) {
      var req;
      helpers.mockHttpResponse(200, {}, ['FOO', 'BAR', 'BAZ', 'QUX']);
      req = service.makeRequest('mockMethod');
      req.on('send', function(resp) {
        return req.abort();
      });
      return req.send(function(err, data) {
        expect(data).not.to.exist;
        expect(err.code).to.equal('RequestAbortedError');
        expect(err.message).to.match(/aborted by user/);
        done();
      });
    });
  });

  describe('promise', function() {
    it('exists if Promises are available', function() {
      var req;
      AWS.config.setPromisesDependency();
      req = service.makeRequest('mockMethod');
      if (typeof Promise === 'undefined') {
        expect(typeof req.promise).to.equal('undefined');
      } else {
        expect(typeof req.promise).to.equal('function');
      }
    });

    it('returns a promise when called', function() {
      var P, promise, req;
      P = function() {};
      AWS.config.setPromisesDependency(P);
      req = service.makeRequest('mockMethod');
      expect(typeof req.promise).to.equal('function');
      promise = req.promise();
      expect(promise instanceof P).to.equal(true);
    });

    if (typeof Promise !== 'undefined') {
      it('binds response object to value with which the promise is resolved', function() {
        AWS.config.setPromisesDependency();
        helpers.mockHttpResponse(200, {}, '');
        return service.makeRequest('mockMethod').promise().then(function(data) {
          expect(data.$response.httpResponse.statusCode).to.equal(200);
          expect(JSON.stringify(data)).to.be.ok;
        });
      });
    }

    it('appends \'promise\' to the user agent', function() {
      var P, promise, req;
      P = function() {};
      AWS.config.setPromisesDependency(P);
      req = service.makeRequest('mockMethod');
      promise = req.promise();
      expect(req.httpRequest.getUserAgent()).to.match(/promise/);
    });
  });

  if (AWS.util.isNode()) {
    describe('createReadStream', function() {
      var app, data, error, getport, nstream, server, streamsApiVersion;
      nstream = require('stream');
      streamsApiVersion = AWS.HttpClient.streamsApiVersion;
      app = void 0;
      data = void 0;
      error = void 0;
      getport = function(cb, startport) {
        var port, srv;
        port = startport || 45678;
        srv = require('net').createServer();
        srv.on('error', function() {
          return getport(cb, port + 1);
        });
        return srv.listen(port, function() {
          srv.once('close', function() {
            return cb(port);
          });
          return srv.close();
        });
      };
      server = require('http').createServer(function(req, resp) {
        return app(req, resp);
      });

      beforeEach(function(done) {
        data = '';
        error = null;
        server.setTimeout(1);
        app = function(req, resp) {
          resp.writeHead(200, {});
          resp.write('FOOBARBAZQUX');
          return resp.end();
        };
        return getport(function(port) {
          server.listen(port);
          service = new MockService({
            endpoint: 'http://localhost:' + port
          });
          done();
        });
      });

      afterEach(function() {
        AWS.HttpClient.streamsApiVersion = streamsApiVersion;
        return server.close();
      });

      it('streams data', function(done) {
        var request, s;
        AWS.HttpClient.streamsApiVersion = 1;
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.be['null'];
        });
        s.on('data', function(c) {
          return data += c.toString();
        });
        return s.on('end', function() {
          expect(error).to.be['null'];
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
      });

      it('succeeds when stream length matches content-length header', function(done) {
        var request, s;
        AWS.HttpClient.streamsApiVersion = 1;
        app = function(req, resp) {
          resp.writeHead(200, {
            'content-length': '12'
          });
          resp.write('FOOBARBAZQUX');
          resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.be['null'];
        });
        s.on('data', function(c) {
          data += c.toString();
        });
        s.on('end', function() {
          expect(error).to.be['null'];
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
      });

      it('emits error when stream length is less than content-length header', function(done) {
        var request, s;
        AWS.HttpClient.streamsApiVersion = 1;
        app = function(req, resp) {
          resp.writeHead(200, {
            'content-length': '13'
          });
          resp.write('FOOBARBAZQUX');
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('data', function(c) {
          return data += c.toString();
        });
        s.on('end', function(a) {
          expect(error).to.not.be['null'];
        });
        return s.on('error', function(e) {
          error = e;
          expect(error).to.not.be['null'];
          expect(error.code).to.equal('StreamContentLengthMismatch');
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
      });

      it('errors if data received exceeds content-length', function(done) {
        var request, s;
        AWS.HttpClient.streamsApiVersion = 1;
        app = function(req, resp) {
          resp.writeHead(200, {
            'content-length': '11'
          });
          resp.write('FOOBARBAZQUX');
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.not.be['null'];
        });
        s.on('data', function(c) {
          return data += c.toString();
        });
        return s.on('end', function() {
          expect(error).to.not.be['null'];
          done();
        });
      });

      it('streams2 data (readable event)', function(done) {
        var request, s;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          done();
        }
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.be['null'];
        });
        s.on('end', function() {
          expect(error).to.be['null'];
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
        return s.on('readable', function() {
          var chunk, e;
          try {
            chunk = s.read();
            if (chunk) {
              return data += chunk;
            }
          } catch (error1) {
            e = error1;
            return console.log(e.stack);
          }
        });
      });

      it('succeeds when streams2 length matches content-length header', function(done) {
        var request, s;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          done();
        }
        app = function(req, resp) {
          resp.writeHead(200, {
            'content-length': '12'
          });
          resp.write('FOOBARBAZQUX');
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.be['null'];
        });
        s.on('end', function() {
          expect(error).to.be['null'];
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
        return s.on('readable', function() {
          var chunk, e;
          try {
            chunk = s.read();
            if (chunk) {
              return data += chunk;
            }
          } catch (error1) {
            e = error1;
            return console.log(e.stack);
          }
        });
      });

      it('emits error when streams2 length is less than content-length header', function(done) {
        var request, s;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          done();
        }
        app = function(req, resp) {
          resp.writeHead(200, {
            'content-length': '13'
          });
          resp.write('FOOBARBAZQUX');
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.not.be['null'];
          expect(error.code).to.equal('StreamContentLengthMismatch');
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
        s.on('end', function() {
          expect(error).to.not.be['null'];
        });
        return s.on('readable', function() {
          var chunk, e;
          try {
            chunk = s.read();
            if (chunk) {
              return data += chunk;
            }
          } catch (error1) {
            e = error1;
            return console.log(e.stack);
          }
        });
      });

      it('errors if data received exceeds the content-length (streams2)', function(done) {
        var request, s;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          done();
        }
        app = function(req, resp) {
          resp.writeHead(200, {
            'content-length': '11'
          });
          resp.write('FOOBARBAZQUX');
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.not.be['null'];
        });
        s.on('end', function() {
          expect(error).to.not.be['null'];
          done();
        });
        return s.on('readable', function() {
          var chunk, e;
          try {
            chunk = s.read();
            if (chunk) {
              return data += chunk;
            }
          } catch (error1) {
            e = error1;
            return console.log(e.stack);
          }
        });
      });

      it('does not stream data on failures', function(done) {
        var request, s;
        AWS.HttpClient.streamsApiVersion = 1;
        app = function(req, resp) {
          resp.writeHead(404, {});
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.not.be['null'];
          expect(error.statusCode).to.equal(404);
          expect(data).to.equal('');
          done();
        });
        s.on('end', function() {
          expect(error).to.not.be['null'];
        });
        return s.on('data', function(c) {
          return data += c.toString();
        });
      });

      it('does not stream data on failures for streams2', function(done) {
        var request, s;
        if (AWS.HttpClient.streamsApiVersion < 2) {
          done();
        }
        app = function(req, resp) {
          resp.writeHead(404, {});
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          error = e;
          expect(error).to.not.be['null'];
          expect(error.statusCode).to.equal(404);
          expect(data).to.equal('');
          done();
        });
        s.on('end', function() {
          expect(error).to.not.be['null'];
        });
        return s.on('readable', function() {
          var chunk, e;
          try {
            chunk = s.read();
            if (chunk) {
              return data += chunk;
            }
          } catch (error1) {
            e = error1;
            return console.log(e.stack);
          }
        });
      });

      it('retries temporal errors and streams resulting successful response', function(done) {
        var errs, request, s;
        server.setTimeout(1000);
        errs = 0;
        app = function(req, resp) {
          var status;
          status = errs < 2 ? 500 : 200;
          errs += 1;
          resp.writeHead(status, {});
          if (status === 200) {
            resp.write('FOOBARBAZQUX');
          } else {
            resp.write('SOME_ERROR');
          }
          return resp.end();
        };
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function(e) {
          return error = e;
        });
        s.on('data', function(c) {
          return data += c.toString();
        });
        return request.on('complete', function() {
          expect(error).to.be['null'];
          expect(data).to.equal('FOOBARBAZQUX');
          done();
        });
      });

      it('streams partial data and raises an error', function(done) {
        var reqError, request, s;
        reqError = null;
        helpers.spyOn(AWS.HttpClient, 'getInstance');
        AWS.HttpClient.getInstance.andReturn({
          handleRequest: function(req, opts, cb, errCb) {
            req = new EventEmitter();
            if (AWS.HttpClient.streamsApiVersion === 2) {
              req = new nstream.PassThrough();
            }
            req.statusCode = 200;
            req.headers = {};
            process.nextTick(function() {
              cb(req);
              req.emit('headers', 200, {});
              AWS.util.arrayEach(['FOO', 'BAR', 'BAZ'], function(str) {
                if (AWS.HttpClient.streamsApiVersion < 2) {
                  return process.nextTick(function() {
                    return req.emit('data', buffer.toBuffer(str));
                  });
                } else {
                  req.push(buffer.toBuffer(str));
                  return process.nextTick(function() {
                    return req.emit('readable');
                  });
                }
              });
              return process.nextTick(function() {
                return errCb(new Error('fail'));
              });
            });
            return req;
          }
        });
        request = service.makeRequest('mockMethod');
        request.on('error', function(e) {
          return reqError = e;
        });
        request.on('complete', function() {
          expect(data).to.equal('FOOBARBAZ');
          expect(error.message).to.equal('fail');
          expect(reqError.message).to.equal('fail');
          done();
        });
        s = request.createReadStream();
        s.on('error', function(e) {
          return error = e;
        });
        return s.on('data', function(c) {
          return data += c.toString();
        });
      });

      it('fails if retry occurs in the middle of a successful stream', function(done) {
        var reqError, request, resp, retryCount, s;
        reqError = null;
        resp = null;
        retryCount = 0;
        helpers.spyOn(AWS.HttpClient, 'getInstance');
        AWS.HttpClient.getInstance.andReturn({
          handleRequest: function(req, opts, cb, errCb) {
            req = new EventEmitter();
            if (AWS.HttpClient.streamsApiVersion === 2) {
              req = new nstream.PassThrough();
            }
            req.statusCode = 200;
            req.headers = {};
            process.nextTick(function() {
              cb(req);
              req.emit('headers', 200, {});
              AWS.util.arrayEach(['FOO', 'BAR', 'BAZ', 'QUX'], function(str) {
                if (str === 'BAZ' && retryCount < 1) {
                  process.nextTick(function() {
                    retryCount += 1;
                    return errCb({
                      code: 'NetworkingError',
                      message: 'FAIL!',
                      retryable: true
                    });
                  });
                  return AWS.util.abort;
                } else {
                  if (AWS.HttpClient.streamsApiVersion === 2) {
                    req.push(buffer.toBuffer(str));
                    return process.nextTick(function() {
                      return req.emit('readable');
                    });
                  } else {
                    return process.nextTick(function() {
                      return req.emit('data', buffer.toBuffer(str));
                    });
                  }
                }
              });
              if (retryCount >= 1) {
                return process.nextTick(function() {
                  return req.emit('end');
                });
              }
            });
            return req;
          }
        });
        request = service.makeRequest('mockMethod');
        request.on('error', function(e) {
          return reqError = e;
        });
        request.on('complete', function(r) {
          return resp = r;
        });
        s = request.createReadStream();
        s.on('error', function(e) {
          return error = e;
        });
        s.on('data', function(c) {
          return data += c.toString();
        });
        return request.on('complete', function() {
          expect(data).to.equal('FOOBAR');
          expect(error.code).to.equal('NetworkingError');
          expect(reqError.code).to.equal('NetworkingError');
          expect(reqError.hostname).to.equal('localhost');
          expect(reqError.region).to.equal('mock-region');
          expect(resp.retryCount).to.equal(0);
          done();
        });
      });

      it('emits synchronously resolved errors on the stream', function(done) {
        var request = service.makeRequest('mockMethod');
        request.addListener('validate', function(req) {
          throw AWS.util.error(new Error(), {
            code: 'ValidationError',
            message: 'Invalid!'
          });
        });

        var s = request.createReadStream();

        s.on('error', function(e) {
          expect(e).to.be.defined;
          expect(e.code).to.equal('ValidationError');
          done();
        });

        // s.resume();
      });

      it('successfully handles connection timeout', function (done) {
        var request, s;
        app = function (req, resp) {
          resp.writeHead(200, {
            'content-length': 512 * 1024
          });
          resp.write(buffer.alloc(512 * 1024));
          resp.end();
        };
        service.config.httpOptions.timeout = 5;
        request = service.makeRequest('mockMethod');
        s = request.createReadStream();
        s.on('error', function (e) {
          setImmediate(function () {
            done();
          });
        });
      });
    });
  }

  if (AWS.util.isNode()) {
    describe('domain support', function() {
      var domain;
      domain = null;
      beforeEach(function() {
        return domain = require('domain').create();
      });

      it('supports domains', function() {
        var thrown;
        helpers.mockHttpResponse(200, {}, 'Success!');
        thrown = null;
        domain.on('error', function(err) {
          return thrown = err;
        });
        domain.run(function() {
          service = new helpers.MockService();
          return service.makeRequest('operationName', function() {
            return invalidCode;
          });
        });
        expect(thrown.name).to.equal('ReferenceError');
      });
    });
  }
});
