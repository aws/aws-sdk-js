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

require('../rest_xml_client');
require('../sigvs3');

AWS.S3 = inherit({

  constructor: function S3(options) {
    AWS.Service.call(this, options);
  }

});

AWS.S3.Client = inherit(AWS.RESTXMLClient, {

  /**
   * @api private
   */
  constructor: function S3Client(options) {
    this.serviceName = 's3';
    AWS.RESTXMLClient.call(this, options);
    this.setEndpoint((options || {}).endpoint, options);
  },

  /**
   * @api private
   */
  signatureVersion: AWS.SigVS3,

  /**
   * S3 prefers dns-compatible bucket names to be moved from the uri path
   * to the hostname as a sub-domain.  This is not possible, even for dns-compat
   * buckets when using SSL and the bucket name contains a dot ('.').  The
   * ssl wildcart certificate is only 1-level deep.
   *
   * @api private
   */
  populateURI: function populateURI(req, operation, params) {

    AWS.RESTClient.prototype.populateURI.call(this, req, operation, params);

    var b = params.Bucket;
    if (b) {
      if (!this.pathStyleBucketName(b)) {

        req.virtualHostedBucket = b; // needed for signing the request

        req.path = req.path.replace(new RegExp('^/' + b), '');
        if (req.path[0] !== '/') req.path = '/' + req.path;
        req.endpoint.hostname = b + '.' + req.endpoint.hostname;

      }
    }

  },

  /**
   * Returns true if the bucket name should be left in the URI path for
   * a request to S3.  This function takes into account the current
   * endpoint protocol (e.g. http or https).
   *
   * @api private
   */
  pathStyleBucketName: function pathStyleBucketName(bucketName) {

    // user can force path style requests via the configuration
    if (this.config.s3ForcePathStyle) return true;

    if (this.dnsCompatibleBucketName(bucketName)) {
      return (this.config.sslEnabled && bucketName.match(/\./)) ? true : false;
    } else {
      return true; // not dns compatible names must always use path style
    }

  },

  /**
   * Returns true if the bucket name is DNS compatible.  Buckets created
   * outside of the classic region MUST be DNS compatible.
   *
   * @api private
   */
  dnsCompatibleBucketName: function dnsCompatibleBucketName(bucketName) {
    var b = bucketName;
    var domain = new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/);
    var ipAddress = new RegExp(/(\d+\.){3}\d+/);
    var dots = new RegExp(/\.\./);
    return (b.match(domain) && !b.match(ipAddress) && !b.match(dots)) ? true : false;
  },

  /**
   * S3 requires that path params not escape forward slashes.
   *
   * @api private
   */
  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscapePath(String(value));
  },

  /**
   * @return [Boolean] whether response contains an error
   * @api private
   */
  successfulResponse: function successfulResponse(httpResponse, method) {
    if (method === 'completeMultipartUpload' && httpResponse.body && httpResponse.body.match('<Error>'))
      return false;
    else
      return httpResponse.statusCode < 300;
  },

  /**
   * @return [Boolean] whether the error can be retried
   * @api private
   */
  retryableError: function retryableError(error, method) {
    if (method == 'completeMultipartUpload' && error.statusCode === 200) {
      return true;
    } else {
      var _super = AWS.Client.prototype.retryableError;
      return _super.call(this, error, method);
    }
  },

  /**
   * Provides a specialized parser for getBucketLocation -- all other
   * operations are parsed by the super class.
   *
   * @api private
   */
  extractData: function extractData(httpResponse, method) {

    var _super = AWS.RESTXMLClient.prototype.extractData;
    var data = _super.call(this, httpResponse, method);

    if (method === 'getBucketLocation') {

      /*jshint regexp:false*/
      var match = httpResponse.body.match(/>(.+)<\/Location/);
      if (match) {
        /*jshint sub:true */
        delete data['_'];
        data.LocationConstraint = match[1];
      }

    }

    return data;
  },

  /**
   * Extracts an error object from the http response.
   *
   * @api private
   */
  extractError: function extractError(httpResponse) {

    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      404: 'NotFound'
    };

    if (codes[httpResponse.statusCode]) {

      return {
        code: codes[httpResponse.statusCode],
        message: null
      };

    } else {

      var data = new AWS.XML.Parser({}).parse(httpResponse.body || '');

      return {
        code: data.Code || httpResponse.statusCode,
        message: data.Message || null
      };

    }
  },

  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    if (endpoint) {
      this.endpoint = new AWS.Endpoint(endpoint, this.config);
    } else if (this.config.region && this.config.region !== 'us-east-1') {
      var hostname = 's3-' + this.config.region + '.amazonaws.com';
      this.endpoint = new AWS.Endpoint(hostname);
    } else {
      this.endpoint = new AWS.Endpoint('s3.amazonaws.com', this.config);
    }
  }

});

require('./s3.api');

AWS.Client.defineMethods(AWS.S3.Client);

AWS.S3.Client.prototype.createBucket = function createBucket(params, options) {
  // When creating a bucket *outside* the classic region, the location
  // constraint must be set for the bucket and it must match the endpoint.
  // This chunk of code will set the location constraint param based
  // on the region (when possible), but it will not override a passed-in
  // location constraint.
  if (!params) params = {};
  var hostname = this.endpoint.hostname;
  if (hostname != 's3.amazonaws.com' && !params.LocationConstraint) {
    params.LocationConstraint = this.config.region;
  }
  return this.makeRequest('createBucket', params, options);
};
