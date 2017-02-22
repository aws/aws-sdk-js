# AWS SDK for JavaScript

[![NPM](https://nodei.co/npm/aws-sdk.svg?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aws-sdk/)

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/aws/aws-sdk-js)

[![Version](https://badge.fury.io/js/aws-sdk.svg)](http://badge.fury.io/js/aws-sdk) [![Build Status](https://travis-ci.org/aws/aws-sdk-js.svg?branch=master)](https://travis-ci.org/aws/aws-sdk-js) [![Coverage Status](https://coveralls.io/repos/aws/aws-sdk-js/badge.svg?branch=master)](https://coveralls.io/r/aws/aws-sdk-js?branch=master)

The official AWS SDK for JavaScript, available for browsers and mobile devices,
or Node.js backends

For release notes, see the [CHANGELOG](CHANGELOG.md). Prior to v2.4.8, release notes can be found at http://aws.amazon.com/releasenotes/SDK/JavaScript

<p class="note">
If you are upgrading from 1.x to 2.0 of the SDK, please see
the {file:UPGRADING.md} notes for information on how to migrate existing code
to work with the new major version.
</p>

## Installing

### In the Browser

To use the SDK in the browser, simply add the following script tag to your
HTML pages:

    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.18.0.min.js"></script>

You can also build a custom browser SDK with your specified set of AWS services.
This can allow you to reduce the SDK's size, specify different API versions of
services, or use AWS services that don't currently support CORS if you are
working in an environment that does not enforce CORS. To get started:

http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/building-sdk-for-browsers.html

The AWS SDK is also compatible with [browserify](http://browserify.org).

### In Node.js

The preferred way to install the AWS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install aws-sdk
```

### Using Bower

You can also use [Bower](http://bower.io) to install the SDK by typing the
following into a terminal window:

```sh
bower install aws-sdk-js
```

## Usage and Getting Started

You can find a getting started guide at:

http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide

## Usage with TypeScript
The AWS SDK for JavaScript bundles TypeScript definition files for use in TypeScript projects and to support tools that can read `.d.ts` files.
Our goal is to keep these TypeScript definition files updated with each release for any public api.

### Pre-requisites
Before you can begin using these TypeScript definitions with your project, you need to make sure your project meets a few of these requirements:
 * Use TypeScript v2.x
 * Includes the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:
  ```sh
    npm install --save-dev @types/node
  ```
 * Your `tsconfig.json` or `jsconfig.json` includes `'dom'` and `'es2015.promise'` under `compilerOptions.lib`.
 See [tsconfig.json](./ts/tsconfig.json) for an example.

### In the Browser
To use the TypeScript definition files with the global `AWS` object in a front-end project, add the following line to the top of your JavaScript file:
```javascript
/// <reference types="aws-sdk" />
```
This will provide support for the global `AWS` object.

### In Node.js
To use the TypeScript definition files within a Node.js project, simply import `aws-sdk` as you normally would.
In a TypeScript file:
```javascript
// import entire SDK
import AWS = require('aws-sdk');
// import AWS object without services
import AWS = require('aws-sdk/global');
// import individual service
import S3 = require('aws-sdk/clients/s3');
```
In a JavaScript file:
```javascript
// import entire SDK
var AWS = require('aws-sdk');
// import AWS object without services
var AWS = require('aws-sdk/global');
// import individual service
var S3 = require('aws-sdk/clients/s3');
```

### Known Limitations
There are a few known limitations with the bundled TypeScript definitions at this time:
 * Service client typings reflect the latest `apiVersion`, regardless of which `apiVersion` is specified when creating a client.
 * Service-bound parameters use the `any` type.

## Getting Help
Please use these community resources for getting help. We use the GitHub issues for tracking bugs and feature requests and have limited bandwidth to address them.
 * Ask a question on [StackOverflow](https://stackoverflow.com/) and tag it with `aws-sdk-js`
 * Come join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js?source=orgpage)
 * Open a support ticket with [AWS Support](https://console.aws.amazon.com/support/home#/)
 * If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js/issues/new)

## Opening Issues
If you encounter a bug with the AWS SDK for JavaScript we would like to hear
about it. Search the [existing issues](https://github.com/aws/aws-sdk-js/issues)
and try to make sure your problem doesn’t already exist before opening a new
issue. It’s helpful if you include the version of the SDK, Node.js or browser
environment and OS you’re using. Please include a stack trace and reduced repro
case when appropriate, too.

The GitHub issues are intended for bug reports and feature requests. For help
and questions with using the AWS SDK for JavaScript please make use of the
resources listed in the [Getting Help](https://github.com/aws/aws-sdk-js#getting-help)
section. There are limited resources available for handling issues and by
keeping the list of open issues lean we can respond in a timely manner.

## Supported Services

<p class="note"><strong>Note</strong>:
Although all services are supported in the browser version of the SDK,
not all of the services are available in the default hosted build (using the
script tag provided above). Instructions on how to build a
custom version of the SDK with individual services are provided
in the "<a href="http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/building-sdk-for-browsers.html">Building the SDK for Browsers</a>" section of the SDK Developer Guide.
</p>

The SDK currently supports the following services:

<table>
  <thead>
    <th>Service Name</th>
    <th>Class Name</th>
    <th>API Version</th>
  </thead>
  <tbody>
    <tr><td>Amazon API Gateway</td><td>AWS.APIGateway</td><td>2015-07-09</td></tr>
    <tr><td>Amazon CloudFront</td><td>AWS.CloudFront</td><td>2014-10-21</td></tr>
    <tr><td>Amazon CloudHSM</td><td>AWS.CloudHSM</td><td>2014-05-30</td></tr>
    <tr><td>Amazon CloudSearch</td><td>AWS.CloudSearch</td><td>2013-01-01</td></tr>
    <tr><td>Amazon CloudSearch Domain</td><td>AWS.CloudSearchDomain</td><td>2013-01-01</td></tr>
    <tr><td>Amazon CloudWatch</td><td>AWS.CloudWatch</td><td>2010-08-01</td></tr>
    <tr><td>Amazon CloudWatch Events</td><td>AWS.CloudWatchLogs</td><td>2015-10-07</td></tr>
    <tr><td>Amazon CloudWatch Logs</td><td>AWS.CloudWatchLogs</td><td>2014-03-28</td></tr>
    <tr><td>Amazon Cognito Identity</td><td>AWS.CognitoIdentity</td><td>2014-06-30</td></tr>
    <tr><td>Amazon Cognito Sync</td><td>AWS.CognitoSync</td><td>2014-06-30</td></tr>
    <tr><td>Amazon DynamoDB</td><td>AWS.DynamoDB</td><td>2012-08-10</td></tr>
    <tr><td>Amazon DynamoDB Streams</td><td>AWS.DynamoDBStreams</td><td>2012-08-10</td></tr>
    <tr><td>Amazon EC2 Container Registry</td><td>AWS.ECR</td><td>2015-09-21</td></tr>
    <tr><td>Amazon EC2 Container Service</td><td>AWS.ECS</td><td>2014-11-13</td></tr>
    <tr><td>Amazon Elastic Compute Cloud</td><td>AWS.EC2</td><td>2014-10-01</td></tr>
    <tr><td>Amazon Elastic File System</td><td>AWS.EFS</td><td>2015-02-01</td></tr>
    <tr><td>Amazon Elastic MapReduce</td><td>AWS.EMR</td><td>2009-03-31</td></tr>
    <tr><td>Amazon Elastic Transcoder</td><td>AWS.ElasticTranscoder</td><td>2012-09-25</td></tr>
    <tr><td>Amazon ElastiCache</td><td>AWS.ElastiCache</td><td>2014-09-30</td></tr>
    <tr><td>Amazon Elasticsearch Service</td><td>AWS.ES</td><td>2015-01-01</td></tr>
    <tr><td>Amazon GameLift</td><td>AWS.GameLift</td><td>2015-10-01</td></tr>
    <tr><td>Amazon Glacier</td><td>AWS.Glacier</td><td>2012-06-01</td></tr>
    <tr><td>Amazon Inspector</td><td>AWS.Inspector</td><td>2016-02-16</td></tr>
    <tr><td>Amazon Kinesis</td><td>AWS.Kinesis</td><td>2013-12-02</td></tr>
    <tr><td>Amazon Kinesis Analytics</td><td>AWS.KinesisAnalytics</td><td>2015-08-14</td></tr>
    <tr><td>Amazon Kinesis Firehose</td><td>AWS.Firehose</td><td>2015-08-04</td></tr>
    <tr><td>Amazon Machine Learning</td><td>AWS.MachineLearning</td><td>2014-12-12</td></tr>
    <tr><td>Amazon Mobile Analytics</td><td>AWS.MobileAnalytics</td><td>2014-06-05</td></tr>
    <tr><td>Amazon Redshift</td><td>AWS.Redshift</td><td>2012-12-01</td></tr>
    <tr><td>Amazon Relational Database Service</td><td>AWS.RDS</td><td>2014-09-01</td></tr>
    <tr><td>Amazon Route 53</td><td>AWS.Route53</td><td>2013-04-01</td></tr>
    <tr><td>Amazon Route 53 Domains</td><td>AWS.Route53Domains</td><td>2014-05-15</td></tr>
    <tr><td>Amazon Simple Email Service</td><td>AWS.SES</td><td>2010-12-01</td></tr>
    <tr><td>Amazon Simple Notification Service</td><td>AWS.SNS</td><td>2010-03-31</td></tr>
    <tr><td>Amazon Simple Queue Service</td><td>AWS.SQS</td><td>2012-11-05</td></tr>
    <tr><td>Amazon Simple Storage Service</td><td>AWS.S3</td><td>2006-03-01</td></tr>
    <tr><td>Amazon Simple Systems Management Service</td><td>AWS.SSM</td><td>2014-11-06</td></tr>
    <tr><td>Amazon Simple Workflow Service</td><td>AWS.SWF</td><td>2012-01-25</td></tr>
    <tr><td>Amazon SimpleDB</td><td>AWS.SimpleDB</td><td>2009-04-15</td></tr>
    <tr><td>Amazon Snowball</td><td>AWS.Snowball</td><td>2016-06-30</td></tr>
    <tr><td>Amazon WorkSpaces</td><td>AWS.WorkSpaces</td><td>2015-04-08</td></tr>
    <tr><td>Auto Scaling</td><td>AWS.AutoScaling</td><td>2011-01-01</td></tr>
    <tr><td>AWS Certificate Manager</td><td>AWS.ACM</td><td>2015-12-08</td></tr>
    <tr><td>AWS CloudFormation</td><td>AWS.CloudFormation</td><td>2010-05-15</td></tr>
    <tr><td>AWS CloudTrail</td><td>AWS.CloudTrail</td><td>2013-11-01</td></tr>
    <tr><td>AWS CodeCommit</td><td>AWS.CodeCommit</td><td>2015-04-13</td></tr>
    <tr><td>AWS CodeDeploy</td><td>AWS.CodeDeploy</td><td>2014-10-06</td></tr>
    <tr><td>AWS CodePipeline</td><td>AWS.CodePipeline</td><td>2015-07-09</td></tr>
    <tr><td>AWS Config</td><td>AWS.ConfigService</td><td>2014-11-12</td></tr>
    <tr><td>AWS Data Pipeline</td><td>AWS.DataPipeline</td><td>2012-10-29</td></tr>
    <tr><td>AWS Database Migration Service</td><td>AWS.DMS</td><td>2016-01-01</td></tr>
    <tr><td>AWS Device Farm</td><td>AWS.DeviceFarm</td><td>2015-06-23</td></tr>
    <tr><td>AWS Direct Connect</td><td>AWS.DirectConnect</td><td>2012-10-25</td></tr>
    <tr><td>AWS Directory Service</td><td>AWS.DirectoryService</td><td>2015-04-16</td></tr>
    <tr><td>AWS Elastic Beanstalk</td><td>AWS.ElasticBeanstalk</td><td>2010-12-01</td></tr>
    <tr><td>AWS Identity and Access Management</td><td>AWS.IAM</td><td>2010-05-08</td></tr>
    <tr><td>AWS Import/Export</td><td>AWS.ImportExport</td><td>2010-06-01</td></tr>
    <tr><td>AWS IoT</td><td>AWS.Iot</td><td>2015-05-28</td></tr>
    <tr><td>AWS IoT Data Plane</td><td>AWS.IotData</td><td>2015-05-28</td></tr>
    <tr><td>AWS Key Management Service</td><td>AWS.KMS</td><td>2014-11-01</td></tr>
    <tr><td>AWS Lambda</td><td>AWS.Lambda</td><td>2015-03-31</td></tr>
    <tr><td>AWS Marketplace Commerce Analytics</td><td>AWS.MarketplaceCommerceAnalytics</td><td>2015-07-01</td></tr>
    <tr><td>AWS Marketplace Metering</td><td>AWS.MarketplaceMetering</td><td>2016-01-14</td></tr>
    <tr><td>AWS OpsWorks</td><td>AWS.OpsWorks</td><td>2013-02-18</td></tr>
    <tr><td>AWS Security Token Service</td><td>AWS.STS</td><td>2011-06-15</td></tr>
    <tr><td>AWS Storage Gateway</td><td>AWS.StorageGateway</td><td>2013-06-30</td></tr>
    <tr><td>AWS Support</td><td>AWS.Support</td><td>2013-04-15</td></tr>
    <tr><td>AWS WAF</td><td>AWS.WAF</td><td>2015-08-24</td></tr>
    <tr><td>Elastic Load Balancing</td><td>AWS.ELB</td><td>2012-06-01</td></tr>
    <tr><td>Elastic Load Balancing v2</td><td>AWS.ELBv2</td><td>2015-12-01</td></tr>
  </tbody>
</table>

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
