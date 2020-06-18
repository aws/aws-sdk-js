var AWS, helpers;

helpers = require('./helpers');

AWS = helpers.AWS;

describe('AWS.ResourceWaiter', function() {
  return describe('wait', function() {
    it('waits until a given state is met', function() {
      var data, db, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      db = new AWS.DynamoDB;
      helpers.mockResponses([
        {
          data: {
            Table: {
              TableStatus: 'LOADING'
            }
          }
        }, {
          data: {
            Table: {
              TableStatus: 'LOADING'
            }
          }
        }, {
          data: {
            Table: {
              TableStatus: 'ACTIVE'
            }
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(db, 'tableExists');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data.Table.TableStatus).to.equal('ACTIVE');
      expect(resp.retryCount).to.equal(2);
    });

    it('throws an error if terminal state is not configured', function() {
      var e, err;
      try {
        new AWS.ResourceWaiter(new AWS.DynamoDB, 'invalidState');
      } catch (error) {
        e = error;
        err = e;
      }
      expect(err.message).to.equal('State invalidState not found.');
    });

    it('gives up after a maximum number of retries', function() {
      var _, data, db, err, resp, resps, waiter;
      err = null;
      data = null;
      resp = null;
      db = new AWS.DynamoDB;
      resps = (function() {
        var i, results;
        results = [];
        for (_ = i = 1; i <= 26; _ = ++i) {
          results.push({
            data: {
              Table: {
                TableStatus: 'LOADING'
              }
            }
          });
        }
        return results;
      })();
      resps.push({
        data: {
          Table: {
            TableStatus: 'ACTIVE'
          }
        }
      });
      helpers.mockResponses(resps);
      waiter = new AWS.ResourceWaiter(db, 'tableExists');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(data).to.equal(null);
      expect(err.code).to.equal('ResourceNotReady');
      expect(resp.retryCount).to.equal(25);
      expect(resp.error.retryDelay).to.equal(20000);
    });

    it('accepts error state as a terminal state', function() {
      var data, err, reqs, resp, s3, waiter;
      err = null;
      data = null;
      resp = null;
      s3 = new AWS.S3;
      reqs = helpers.mockResponses([
        {
          httpResponse: {
            statusCode: 200
          },
          error: null,
          data: {}
        }, {
          httpResponse: {
            statusCode: 200
          },
          error: null,
          data: {}
        }, {
          httpResponse: {
            statusCode: 404
          },
          error: {
            code: 404
          },
          data: null
        }
      ]);
      waiter = new AWS.ResourceWaiter(s3, 'bucketNotExists');
      waiter.wait({
        Bucket: 'bucket'
      }, function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(helpers.operationsForRequests(reqs)).to.eql(['s3.headBucket', 's3.headBucket', 's3.headBucket']);
      expect(err).to.equal(null);
      expect(resp.httpResponse.statusCode).to.equal(404);
      expect(resp.retryCount).to.equal(2);
    });

    it('fails fast if failure value is found', function() {
      var data, ec2, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      ec2 = new AWS.EC2;
      helpers.mockResponses([
        {
          data: {
            Reservations: [
              {
                Instances: [
                  {
                    State: {
                      Name: 'pending'
                    }
                  }
                ]
              }
            ]
          }
        }, {
          data: {
            Reservations: [
              {
                Instances: [
                  {
                    State: {
                      Name: 'pending'
                    }
                  }
                ]
              }
            ]
          }
        }, {
          data: {
            Reservations: [
              {
                Instances: [
                  {
                    State: {
                      Name: 'pending'
                    }
                  }
                ]
              }
            ]
          }
        }, {
          data: {
            Reservations: [
              {
                Instances: [
                  {
                    State: {
                      Name: 'terminated'
                    }
                  }
                ]
              }
            ]
          }
        }, {
          data: {
            Reservations: [
              {
                Instances: [
                  {
                    State: {
                      Name: 'pending'
                    }
                  }
                ]
              }
            ]
          }
        }, {
          data: {
            Reservations: [
              {
                Instances: [
                  {
                    State: {
                      Name: 'running'
                    }
                  }
                ]
              }
            ]
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning');
      waiter.wait({
        InstanceIds: ['id-123456']
      }, function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(data).to.equal(null);
      expect(err.code).to.equal('ResourceNotReady');
      expect(resp.retryCount).to.equal(3);
    });

    it('retries or fails depending on whether error is thrown when no acceptors match', function() {
      var data, db, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      db = new AWS.DynamoDB;
      helpers.mockResponses([
        {
          data: {
            Table: {
              TableStatus: 'ACTIVE'
            }
          }
        }, {
          error: {
            code: 'WrongErrorCode'
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(db, 'tableNotExists');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(data).to.equal(null);
      expect(err.code).to.equal('ResourceNotReady');
      expect(resp.retryCount).to.equal(1);
    });

    it('fully supports jmespath expressions', function() {
      var data, ecs, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      ecs = new AWS.ECS;
      helpers.mockResponses([
        {
          data: {
            services: [
              {
                desiredCount: 1,
                runningCount: 1,
                deployments: []
              }, {
                desiredCount: 1,
                runningCount: 1,
                deployments: [{}]
              }
            ]
          }
        }, {
          data: {
            services: [
              {
                desiredCount: 1,
                runningCount: 0,
                deployments: [{}]
              }, {
                desiredCount: 1,
                runningCount: 1,
                deployments: [{}]
              }
            ]
          }
        }, {
          data: {
            services: [
              {
                desiredCount: 1,
                runningCount: 1,
                deployments: [{}]
              }, {
                desiredCount: 1,
                runningCount: 1,
                deployments: [{}]
              }
            ]
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(ecs, 'servicesStable');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.not.eql(null);
      expect(resp.retryCount).to.equal(2);
    });

    it('does not surface JMESPath function errors to users', function() {
      var ecs = new AWS.ECS;
      helpers.mockResponses([
        {data: {foo: 'bar'}},
        {data: {fizz: 'buzz'}},
        {
          data: {
            services: [
              {
                desiredCount: 1,
                runningCount: 1,
                deployments: [{}]
              },
              {
                desiredCount: 1,
                runningCount: 1,
                deployments: [{}]
              }
            ]
          }
        }
      ]);
      var waiter = new AWS.ResourceWaiter(ecs, 'servicesStable');
      waiter.config.acceptors = [
        {
          expected: 1,
          matcher: 'pathAny',
          state: 'failure',
          argument: 'length(baz)'
        },
        {
          expected: 1,
          matcher: 'pathAll',
          state: 'retry',
          argument: 'length(baz)'
        },
        {
          expected: true,
          matcher: 'path',
          state: 'success',
          argument: 'length(services[?!(length(deployments) == `1` && runningCount == desiredCount)]) == `0`'
        }
      ];
      waiter.wait(function (err, data) {
        expect(err).to.equal(null);
        expect(data).not.to.equal(null);
        expect(this.retryCount).to.equal(2);
      });
    });

    it('supports status matcher', function() {
      var data, err, resp, s3, waiter;
      err = null;
      data = null;
      resp = null;
      s3 = new AWS.S3;
      helpers.mockResponses([
        {
          httpResponse: {
            statusCode: 201
          },
          error: null,
          data: {}
        }, {
          httpResponse: {
            statusCode: 404
          },
          error: {
            code: 404
          },
          data: null
        }, {
          httpResponse: {
            statusCode: 301
          },
          error: null,
          data: {}
        }
      ]);
      waiter = new AWS.ResourceWaiter(s3, 'bucketExists');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.eql({});
      expect(resp.retryCount).to.equal(2);
    });

    it('supports error matcher', function() {
      var data, db, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      db = new AWS.DynamoDB;
      helpers.mockResponses([
        {
          data: {
            Table: {
              TableStatus: 'ACTIVE'
            }
          }
        }, {
          data: {
            Table: {
              TableStatus: 'ACTIVE'
            }
          }
        }, {
          error: {
            code: 'ResourceNotFoundException'
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(db, 'tableNotExists');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.eql({});
      expect(resp.retryCount).to.equal(2);
    });

    it('supports path matcher', function() {
      var cf, data, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      cf = new AWS.CloudFront;
      helpers.mockResponses([
        {
          data: {
            Distribution: {
              Status: 'Pending'
            }
          }
        }, {
          data: {
            Distribution: {
              Status: 'Deployed'
            }
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(cf, 'distributionDeployed');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.not.eql(null);
      expect(resp.retryCount).to.equal(1);
    });

    it('supports pathAny matcher', function() {
      var data, elb, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      elb = new AWS.ELB;
      helpers.mockResponses([
        {
          data: {
            InstanceStates: [
              {
                State: 'Pending'
              }, {
                State: 'Stopped'
              }
            ]
          }
        }, {
          data: {
            InstanceStates: [
              {
                State: 'Pending'
              }, {
                State: 'InService'
              }
            ]
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(elb, 'anyInstanceInService');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.not.eql(null);
      expect(resp.retryCount).to.equal(1);
    });

    it('supports pathAll matcher', function() {
      var data, elb, err, resp, waiter;
      err = null;
      data = null;
      resp = null;
      elb = new AWS.ELB;
      helpers.mockResponses([
        {
          data: {
            InstanceStates: [
              {
                State: 'Pending'
              }, {
                State: 'Stopped'
              }
            ]
          }
        }, {
          data: {
            InstanceStates: [
              {
                State: 'Pending'
              }, {
                State: 'InService'
              }
            ]
          }
        }, {
          data: {
            InstanceStates: [
              {
                State: 'InService'
              }, {
                State: 'InService'
              }
            ]
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(elb, 'instanceInService');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.not.eql(null);
      expect(resp.retryCount).to.equal(2);
    });

    it('supports acceptors of mixed matcher types', function() {
      var data, err, resp, rs, waiter;
      err = null;
      data = null;
      resp = null;
      rs = new AWS.Redshift;
      helpers.mockResponses([
        {
          error: {
            code: 'ClusterNotFound'
          }
        }, {
          data: {
            Clusters: [
              {
                ClusterStatus: 'pending'
              }, {
                ClusterStatus: 'available'
              }
            ]
          }
        }, {
          data: {
            Clusters: [
              {
                ClusterStatus: 'available'
              }, {
                ClusterStatus: 'available'
              }
            ]
          }
        }
      ]);
      waiter = new AWS.ResourceWaiter(rs, 'clusterAvailable');
      waiter.wait(function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(err).to.equal(null);
      expect(data).to.not.eql(null);
      expect(resp.retryCount).to.equal(2);
    });

    it('supports custom delay and maxAttempts', function() {
      var _, data, db, delay, err, maxAttempts, resp, resps, waiter;
      err = null;
      data = null;
      resp = null;
      db = new AWS.DynamoDB;
      maxAttempts = 50;
      delay = 5;
      resps = (function() {
        var i, ref, results;
        results = [];
        for (_ = i = 1, ref = maxAttempts + 1; 1 <= ref ? i <= ref : i >= ref; _ = 1 <= ref ? ++i : --i) {
          results.push({
            data: {
              Table: {
                TableStatus: 'LOADING'
              }
            }
          });
        }
        return results;
      })();
      resps.push({
        data: {
          Table: {
            TableStatus: 'ACTIVE'
          }
        }
      });
      helpers.mockResponses(resps);
      waiter = new AWS.ResourceWaiter(db, 'tableExists');
      waiter.wait({
        $waiter: {
          delay: delay,
          maxAttempts: maxAttempts
        }
      }, function(e, d) {
        resp = this;
        err = e;
        return data = d;
      });
      expect(data).to.equal(null);
      expect(err.code).to.equal('ResourceNotReady');
      expect(resp.retryCount).to.equal(maxAttempts);
      expect(resp.error.retryDelay).to.equal(delay * 1000);
      waiter = new AWS.ResourceWaiter(db, 'tableExists');
      expect(waiter.config.maxAttempts).to.equal(25);
      expect(waiter.config.delay).to.equal(20);
    });
  });
});
