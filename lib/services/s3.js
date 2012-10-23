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

  signatureVersion: undefined,

  populateURI: function populateURI(req, operation, params) {

    AWS.RESTService.prototype.populateURI.call(this, req, operation, params);

    // Try to move the bucket name from the request uri (path-style) to
    // the request endpoint host (virtual-hosted style) when possible.
    // Only possible when the bucket name is dns compatible, and still not
    // possible when using https and bucket name contains a '.'
    var b = params.Bucket;
    if (b) {

      req.bucketName = b;
      req.pathStyle = this.pathStyleBucketName(b);

      if (!req.pathStyle) { // move the bucket name from the uri into the host

        req.uri = req.uri.replace(new RegExp('^/' + b), '');
        if (req.uri[0] !== '/') req.uri = '/' + req.uri;
        req.endpoint.host = b + '.' + req.endpoint.host;
      }

    }

  },

  pathStyleBucketName: function pathStyleBucketName(bucketName) {

    // user can force path style requests via the configuration
    if (this.config.s3ForcePathStyle) return true;

    if (this.dnsCompatibleBucketName(bucketName)) {
      return (this.config.useSSL && bucketName.match(/\./)) ? true : false;
    } else {
      return true; // not dns compatible names must always use path style
    }

  },

  dnsCompatibleBucketName: function dnsCompatibleBucketName(bucketName) {
    var b = bucketName;
    var domain = new RegExp(/^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/);
    var ipAddress = new RegExp(/(\d+\.){3}\d+/);
    var dots = new RegExp(/\.\./);
    return (b.match(domain) && !b.match(ipAddress) && !b.match(dots)) ? true : false;
  },

  escapePathParam: function escapePathParam(value) {
    return AWS.util.uriEscapePath(String(value));
  }

});

require('./s3.api');

AWS.Service.defineMethods(AWS.S3);
