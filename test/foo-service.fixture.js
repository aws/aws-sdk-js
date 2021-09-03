var AWS = require('./helpers').AWS;
var Api = require('../lib/model/api');

var model = {
  'version': '2.0',
  'metadata': {
    'apiVersion': '2018-06-13',
    'endpointPrefix': 'foo',
    'protocol': 'rest-json',
    'serviceAbbreviation': 'Foo Service',
    'serviceFullName': 'Awesome Foo Service',
    'serviceId': 'Foo',
    'signatureVersion': 'v4',
    'signingName': 'foo',
    'uid': 'foo-2018-06-13'
  },
  'operations': {
    'PutStream': {
      'http': {
        'method': 'PUT',
        'requestUri': '/'
      },
      'input': {
        'type': 'structure',
        'required': [
          'Body'
        ],
        'members': {
          'Body': {
            'shape': 'StreamingBody'
          }
        },
        'payload': 'Body'
      },
      'authtype': 'v4-unsigned-body'
    },
    'PutSignedStream': {
      'http': {
        'method': 'PUT',
        'requestUri': '/'
      },
      'input': {
        'type': 'structure',
        'members': {
          'Body': {
            'shape': 'StreamingBody'
          }
        },
        'payload': 'Body'
      },
    },
    'PutBoundedStream': {
      'http': {
        'method': 'PUT',
        'requestUri': '/'
      },
      'input': {
        'type': 'structure',
        'members': {
          'Body': {
            'shape': 'BoundedStreamingBody'
          }
        },
        'payload': 'Body'
      },
    },
    'PutUnsignedBoundedStream': {
      'http': {
        'method': 'PUT',
        'requestUri': '/'
      },
      'input': {
        'type': 'structure',
        'members': {
          'Body': {
            'shape': 'BoundedStreamingBody'
          }
        },
        'payload': 'Body'
      },
      'authtype': 'v4-unsigned-body'
    },
    'PutNonStream': {
      'http': {
        'method': 'PUT',
        'requestUri': '/'
      },
      'input': {
        'type': 'structure',
        'members': {
          'Body': {
            'shape': 'StringShape'
          }
        },
      },
    },
    'PutWithChecksum': {
      'http': {
        'method': 'PUT',
        'requestUri': '/'
      },
      'input': {
        'type': 'structure',
        'members': {
          'Body': {
            'shape': 'StringShape'
          }
        },
      },
      'httpChecksumRequired': true,
      'payload': 'Body'
    },
  },
  'shapes': {
    'StreamingBody': {
      'type': 'blob',
      'streaming': true
    },
    'BoundedStreamingBody': {
      'type': 'blob',
      'streaming': true,
      'requiresLength': true
    },
    'StringShape': {'type': 'string'}
  }
};

var FooService = AWS.Service.defineService(new Api(model));

module.exports = {
  FooService: FooService
};
