/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = require('../core');
var inherit = AWS.util.inherit;

require('../rest_xml_service');
require('../sigvs3');

/**
 * @class AWS.S3
 * @constructor
 */
AWS.S3 = inherit(AWS.RESTXMLService, {

  constructor: function S3(config) {
    this.serviceName = 's3';
    AWS.RESTXMLService.call(this, config);

    if (!this.endpoint.region) this.endpoint.region = 'us-east-1';

    if (this.endpoint.region === 'us-east-1')
      this.endpoint.host = 's3.amazonaws.com';

  },

  signatureVersion: AWS.SigVS3,

  // S3 prefers dns-compatible bucket names to be moved from the uri path
  // to the host as a sub-domain.  This is not possible, even for dns-compat
  // buckets when using SSL and the bucket name contains a dot ('.').  The
  // ssl wildcart certificate is only 1-level deep.
  populateURI: function populateURI(req, operation, params) {

    AWS.RESTService.prototype.populateURI.call(this, req, operation, params);

    var b = params.Bucket;
    if (b) {
      if (!this.pathStyleBucketName(b)) {

        req.virtualHostedBucket = b; // needed for signing the request

        req.uri = req.uri.replace(new RegExp('^/' + b), '');
        if (req.uri[0] !== '/') req.uri = '/' + req.uri;
        req.endpoint.host = b + '.' + req.endpoint.host;

      }
    }

  },

  // Returns true if the bucket name should be left in the URI path for
  // a request to S3.  This function takes into account the current
  // endpoint scheme (e.g. http or https).
  pathStyleBucketName: function pathStyleBucketName(bucketName) {

    // user can force path style requests via the configuration
    if (this.config.s3ForcePathStyle) return true;

    if (this.dnsCompatibleBucketName(bucketName)) {
      return (this.config.useSSL && bucketName.match(/\./)) ? true : false;
    } else {
      return true; // not dns compatible names must always use path style
    }

  },

  // Returns true if the bucket name is DNS compatible.  Buckets created
  // outside of the classic region MUST be DNS compatible.
  dnsCompatibleBucketName: function dnsCompatibleBucketName(bucketName) {
    var b = bucketName;
    var domain = new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/);
    var ipAddress = new RegExp(/(\d+\.){3}\d+/);
    var dots = new RegExp(/\.\./);
    return (b.match(domain) && !b.match(ipAddress) && !b.match(dots)) ? true : false;
  },

  // S3 requires that path params not escape forward slashes.
  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscapePath(String(value));
  },

  successfulResponse: function successfulResponse(httpResponse, method) {
    if (method === 'completeMultipartUpload' && httpResponse.body && httpResponse.body.match('<Error>'))
      return false;
    else
      return httpResponse.statusCode < 300;
  },

  retryableError: function retryableError(error, method) {
    var _super = AWS.Service.prototype.retryableError;
    if (method == 'completeMultipartUpload' && error.statusCode === 200)
      return true;
    else
      return _super.call(this, error, method);
  },

  extractError: function extractError(httpResponse) {

    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      404: 'NoSuchKey'
    };

    if (codes[httpResponse.statusCode]) {

      return {
        code: codes[httpResponse.statusCode],
        message: httpResponse.statusCode
      };

    } else {

      var data = new AWS.XMLParser({}).parse(httpResponse.body || '');

      return {
        code: data.Code || httpResponse.statusCode,
        message: data.Message || null
      };

    }
  }

});

require('./s3.api');

AWS.Service.defineMethods(AWS.S3);
