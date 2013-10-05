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

var fs = require('fs');
var path = require('path');

var root = path.join(__dirname, 'aws-sdk');
if (!fs.existsSync(root)) {
  root = path.join(__dirname, '..', 'lib');
}
root = path.normalize(root);

module.exports = {
  root: root,
  mainFile: path.join(root, 'aws.js'),
  browserFile: path.join(root, 'browser.js'),
  servicesFile: path.join(root, 'services.js'),
  defaultServices: 'dynamodb,s3,sqs,sns,sts'
};
