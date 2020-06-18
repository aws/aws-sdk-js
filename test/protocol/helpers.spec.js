var populateHostPrefix = require('../../lib/protocol/helpers').populateHostPrefix;
var helpers = require('../helpers');
var AWS = helpers.AWS;

describe('populateHostPrefix', function() {
  var api = {
    metadata: {
      apiVersion: '2018-09-19',
      endpointPrefix: 'mockservice',
      serviceId: 'MockService',
      protocol: 'json'
    },
    operations: {
      GetObject: {
        name: 'GetObject',
        http: {
          method: 'GET',
          requestUri: '/{Key +}',
          responseCode: 200
        },
        endpoint: {
          hostPrefix: '{Bucket}-{AccountId}-{Bucket}.'
        },
        input: {'shape': 'GetObjectInput'},
        output: {'shape': 'GetObjectOutput'}
      },
      GetObjectV2: {
        name: 'GetObjectV2',
        http: {
          method: 'GET',
          requestUri: '/{Key +}',
          responseCode: 200
        },
        endpoint: {
          hostPrefix: 'service-'
        },
        input: {'shape': 'GetObjectV2Input'},
        output: {'shape': 'GetObjectOutput'}
      },
    },
    shapes: {
      GetObjectInput: {
        type: 'structure',
        required: ['AccountId', 'Bucket', 'Key'],
        members: {
          AccountId: {
            type: 'string',
            hostLabel: true,
            locationName: 'x-amz-account-id',
            location: 'header'
          },
          Bucket: {
            type: 'string',
            hostLabel: true,
            locationName: 'x-amz-bucket',
            location: 'header'
          },
          Key: {
            type: 'string',
            location: 'uri'
          }
        }
      },
      GetObjectV2Input: {
        type: 'structure',
        required: [],
        members: {}
      },
      GetObjectOutput: {
        type: 'structure',
        required: [],
        members: {}
      }
    }
  };
  it('should not apply host prefix if it\'s disabled', function() {
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api),
      hostPrefixEnabled: false,
    });
    var req = populateHostPrefix(client.getObjectV2({}));
    expect(req.httpRequest.endpoint.hostname).to.equal('mockservice.mock-region.amazonaws.com');
  });

  it('should not populate host prefix when operation uses endpoint discovery', function() {
    //fake endpoint operation;
    api.operations.GetObjectV2.endpointoperation = true;
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api)
    });
    var req = populateHostPrefix(client.getObjectV2({}));
    expect(req.httpRequest.endpoint.hostname).to.equal('mockservice.mock-region.amazonaws.com');
    delete api.operations.GetObjectV2.endpointoperation;
  });

  it('should not populate host prefix when operation is endpoint operation', function() {
    //fake endpoint operation;
    api.operations.GetObjectV2.endpointoperation = true;
    //fake endpoint discovery exists;
    api.operations.GetObject.endpointdiscovery = {};
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api)
    });
    var req = populateHostPrefix(client.getObject({
      AccountId: 'account',
      Bucket: 'bucket',
      Key: 'key'
    }));
    expect(req.httpRequest.endpoint.hostname).to.equal('mockservice.mock-region.amazonaws.com');
    delete api.operations.GetObject.endpointdiscovery;
    delete api.operations.GetObjectV2.endpointoperation;
  });

  it('should expend endpoint host with literal value', function() {
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api)
    });
    var req = populateHostPrefix(client.getObjectV2({}));
    expect(req.httpRequest.endpoint.hostname).to.equal('service-mockservice.mock-region.amazonaws.com');
  });

  it('should expend endpoint host with member reference', function() {
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api)
    });
    var req = populateHostPrefix(client.getObject({
      AccountId: 'account',
      Bucket: 'bucket',
      Key: 'key'
    }));
    expect(req.httpRequest.endpoint.hostname).to.equal('bucket-account-bucket.mockservice.mock-region.amazonaws.com');
  });

  it('should validate input parameters for prepending host', function() {
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api),
      paramValidation: false
    });
    var error;
    try {
      populateHostPrefix(client.getObject({
        Bucket: 'bucket',
        Key: 'key'
      }));
    } catch (e) {
      error = e;
    }
    expect(error).not.to.equal(undefined);
    expect(error.code).to.equal('InvalidParameter');
    expect(error.message).to.equal('Parameter AccountId should be a non-empty string.');
  });

  it('should validate expended host', function() {
    var client = new AWS.Service({
      apiConfig: new AWS.Model.Api(api)
    });
    var error;
    try {
      populateHostPrefix(client.getObject({
        Bucket: 'bucket',
        Key: 'key',
        AccountId: '{abc}'
      }));
    } catch (e) {
      error = e;
    }
    expect(error).not.to.equal(undefined);
    expect(error.code).to.equal('ValidationError');
    expect(error.message).to.equal('bucket-{abc}-bucket is not hostname compatible.');

    var stringTooLong = '';
    for (var i = 0; i < 64; i++) stringTooLong += 'X';
    try {
      populateHostPrefix(client.getObject({
        Bucket: 'bucket',
        Key: 'key',
        AccountId: stringTooLong
      }));
    } catch (e) {
      error = e;
    }
    expect(error).not.to.equal(undefined);
    expect(error.code).to.equal('ValidationError');
    expect(error.message).to.equal('Hostname label length should be between 1 to 63 characters, inclusive.');
  });
});
