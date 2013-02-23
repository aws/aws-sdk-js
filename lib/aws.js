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

var AWS = require('./core');
module.exports = AWS;

require('./services/autoscaling');
require('./services/cloudformation');
require('./services/cloudfront');
require('./services/cloudsearch');
require('./services/cloudwatch');
require('./services/datapipeline');
require('./services/directconnect');
require('./services/dynamodb');
require('./services/ec2');
require('./services/elasticache');
require('./services/elasticbeanstalk');
require('./services/elastictranscoder');
require('./services/elb');
require('./services/emr');
require('./services/glacier');
require('./services/iam');
require('./services/importexport');
require('./services/opsworks');
require('./services/rds');
require('./services/redshift');
require('./services/route53');
require('./services/s3');
require('./services/ses');
require('./services/simpledb');
require('./services/simpleworkflow');
require('./services/sns');
require('./services/sqs');
require('./services/storagegateway');
require('./services/sts');
