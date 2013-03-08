/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var Stream = require('stream').Stream;

AWS.S3 = AWS.Service.defineService('./services/s3.api', {
  Client: {
    /**
     * @api private
     */
    constructor: function S3Client(options) {
      AWS.Client.call(this, options);
      this.setEndpoint((options || {}).endpoint, options);
    },

    setupRequestListeners: function setupRequestListeners(request) {
      request.addListener('build', this.populateURI);
      request.addListener('build', this.computeContentMd5);
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_REGION);
      request.addListener('extractError', this.extractError);
      request.addListener('extractData', this.extractData);
    },

    /**
     * S3 prefers dns-compatible bucket names to be moved from the uri path
     * to the hostname as a sub-domain.  This is not possible, even for dns-compat
     * buckets when using SSL and the bucket name contains a dot ('.').  The
     * ssl wildcard certificate is only 1-level deep.
     *
     * @api private
     */
    populateURI: function populateURI(req) {
      var httpRequest = req.httpRequest;
      var b = req.params.Bucket;

      if (b) {
        if (!req.client.pathStyleBucketName(b)) {
          httpRequest.endpoint.hostname = b + '.' +
            httpRequest.endpoint.hostname;

          httpRequest.virtualHostedBucket = b; // needed for signing the request
          httpRequest.path = httpRequest.path.replace(new RegExp('^/' + b), '');
          if (httpRequest.path[0] !== '/') {
            httpRequest.path = '/' + httpRequest.path;
          }
        }
      }
    },

    /**
     * @api private
     */
    computableChecksumOperations: {
      putBucketCors: true,
      putBucketLifecycle: true,
      putBucketTagging: true,
      deleteObjects: true
    },

    /**
     * Checks whether checksums should be computed for the request.
     * If the request requires checksums to be computed, this will always
     * return true, otherwise it depends on whether {AWS.Config.computeChecksums}
     * is set.
     *
     * @param req [AWS.Request] the request to check against
     * @return [Boolean] whether to compute checksums for a request.
     * @api private
     */
    willComputeChecksums: function willComputeChecksums(req) {
      if (this.computableChecksumOperations[req.operation]) return true;
      if (!this.config.computeChecksums) return false;

      // TODO: compute checksums for Stream objects
      if (req.httpRequest.body instanceof Stream) return false;

      var rules = req.client.api.operations[req.operation].input.members;
      if (rules.ContentMD5 && !req.params.ContentMD5) return true;
    },

    /**
     * A listener that computes the Content-MD5 and sets it in the header.
     * @see AWS.S3.Client.willComputeChecksums
     * @api private
     */
    computeContentMd5: function computeContentMd5(req) {
      if (req.client.willComputeChecksums(req)) {
        var md5 = AWS.util.crypto.md5(req.httpRequest.body, 'base64');
        req.httpRequest.headers['Content-MD5'] = md5;
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
    successfulResponse: function successfulResponse(resp) {
      var req = resp.request;
      var httpResponse = resp.httpResponse;
      if (req.operation === 'completeMultipartUpload' &&
          httpResponse.body.toString().match('<Error>'))
        return false;
      else
        return httpResponse.statusCode < 300;
    },

    /**
     * @return [Boolean] whether the error can be retried
     * @api private
     */
    retryableError: function retryableError(error, request) {
      if (request.operation == 'completeMultipartUpload' &&
          error.statusCode === 200) {
        return true;
      } else {
        var _super = AWS.Client.prototype.retryableError;
        return _super.call(this, error, request);
      }
    },

    /**
     * Provides a specialized parser for getBucketLocation -- all other
     * operations are parsed by the super class.
     *
     * @api private
     */
    extractData: function extractData(resp) {
      var req = resp.request;
      if (req.operation === 'getBucketLocation') {
        /*jshint regexp:false*/
        var match = resp.httpResponse.body.toString().match(/>(.+)<\/Location/);
        if (match) {
          delete resp.data['_'];
          resp.data.LocationConstraint = match[1];
        }
      }
    },

    /**
     * Extracts an error object from the http response.
     *
     * @api private
     */
    extractError: function extractError(resp) {
      var codes = {
        304: 'NotModified',
        403: 'Forbidden',
        400: 'BadRequest',
        404: 'NotFound'
      };

      var code = resp.httpResponse.statusCode;
      var body = resp.httpResponse.body;
      if (codes[code] && body.length === 0) {
        resp.error = AWS.util.error(new Error(), {
          code: codes[resp.httpResponse.statusCode],
          message: null
        });
      } else {
        var data = new AWS.XML.Parser({}).parse(body.toString());
        resp.error = AWS.util.error(new Error(), {
          code: data.Code || code,
          message: data.Message || null
        });
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
        this.endpoint = new AWS.Endpoint(this.api.globalEndpoint, this.config);
      }
    }
  }
});

AWS.S3.Client.prototype.createBucket = function createBucket(params, callback) {
  // When creating a bucket *outside* the classic region, the location
  // constraint must be set for the bucket and it must match the endpoint.
  // This chunk of code will set the location constraint param based
  // on the region (when possible), but it will not override a passed-in
  // location constraint.
  if (!params) params = {};
  var hostname = this.endpoint.hostname;
  if (hostname != this.api.globalEndpoint && !params.CreateBucketConfiguration) {
    params.CreateBucketConfiguration = { LocationConstraint: this.config.region };
  }
  return this.makeRequest('createBucket', params, callback);
};

module.exports = AWS.S3;
