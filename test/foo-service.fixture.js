var AWS = require('./helpers').AWS;
var Api = require('../lib/model/api');

var model = {
  "version": "2.0",
  "metadata": {
    "apiVersion": "2018-06-13",
    "endpointPrefix": "foo",
    "protocol": "rest-json",
    "serviceAbbreviation": "Foo Service",
    "serviceFullName": "Awesome Foo Service",
    "serviceId": "Foo",
    "signatureVersion": "v4",
    "signingName": "foo",
    "uid": "foo-2018-06-13"
  },
  "operations": {
    "PutStream": {
      "http": {
        "method": "PUT",
        "requestUri": "/"
      },
      "input": {
        "type": "structure",
        "required": [
          "Body"
        ],
        "members": {
          "Body": {
            "shape": "StreamingBody"
          }
        },
        "payload": "Body"
      },
      "authtype": "v4-unsigned-body"
    }
  },
  "shapes": {
    "StreamingBody": {
      "type": "blob",
      "streaming": true
    }
  }
}

var FooService = AWS.Service.defineService(new Api(model));

module.exports = {
  FooService: FooService
};