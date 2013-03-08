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

module.exports = function() {
  var createParams = {
    CallerReference: '',
    Aliases: {
      Quantity: 0
    },
    DefaultRootObject: '',
    Origins: {
      Items: [{
        Id: 'origin',
        DomainName: 'example.com',
        CustomOriginConfig: {
          HTTPPort: 80,
          HTTPSPort: 443,
          OriginProtocolPolicy: 'match-viewer'
        }
      }],
      Quantity: 1,
    },
    DefaultCacheBehavior: {
      TargetOriginId: 'origin',
      ForwardedValues: {
        QueryString: false
      },
      TrustedSigners: {
        Items: [],
        Enabled: false,
        Quantity: 0
      },
      ViewerProtocolPolicy: 'allow-all',
      MinTTL: 0
    },
    CacheBehaviors: {
      Items: [],
      Quantity: 0
    },
    Comment: '',
    Logging: {
      Enabled: false,
      Bucket: 'invalidbucket.s3.amazonaws.com',
      Prefix: 'prefix'
    },
    Enabled: false
  };

  this.Before("@cloudfront", function (callback) {
    this.client = new this.AWS.CloudFront.Client();
    callback();
  });

  this.Given(/^I create a CloudFront distribution with name prefix "([^"]*)"$/, function(prefix, callback) {
    this.cfName = this.uniqueName(prefix);
    createParams.CallerReference = this.cfName;
    createParams.Origins.Items[0].Id = (this.cfName === '' ? 'origin' : 'InvalidOrigin');
    this.request(null, 'createDistribution', { DistributionConfig: createParams }, callback, false);
  });

  this.Given(/^I list CloudFront distributions$/, function(callback) {
    this.request(null, 'listDistributions', {}, callback);
  });

  this.Then(/^the result should contain a property (\w+) with an? (\w+)$/, function(property, type, callback) {
    if (type === 'Array' || type === 'Date') {
      this.assert.equal(this.AWS.util.isType(this.data[property], type), true);
    } else {
      this.assert.equal(typeof this.data[property], type);
    }
    callback();
  });
};
