# AWS SDK for Node.js

The official JavaScript implementation of the AWS SDK for Node.js.

## Installing

The preferred way to install the AWS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install aws-sdk
```

**Please Note**: Installing the aws-sdk npm package on Windows may display errors while trying to install the optional dependency for libxmljs.  This error can be safely ignored.

## Usage

After you've installed the SDK, you can require the AWS package in your node
application using `require`:

```js
var AWS = require('aws-sdk');
```

Here is a quick example that makes some requests against Amazon S3 with the SDK:

```js
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

/**
 * Don't hard-code your credentials!
 * Load them from disk or your environment instead.
 */
// AWS.config.update({accessKeyId: 'AKID', secretAccessKey: 'SECRET'});

// Instead, do this:
AWS.config.loadFromPath('./path/to/credentials.json');

// Set your region for future requests.
AWS.config.update({region: 'us-east-1'});

// Create a bucket and put something in it.
var s3 = new AWS.S3();
s3.client.createBucket({Bucket: 'myBucket'}).done(function(resp) {
  var data = {Bucket: 'myBucket', Key: 'myKey', Body: 'Hello!'};
  s3.client.putObject(data).done(function(resp) {
    console.log("Successfully uploaded data to myBucket/myKey");
  });
});
```

## Getting Started Guide

You can find a getting started guide at:

http://docs.amazonwebservices.com/nodejs/latest/dg/

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

```no-highlight
Copyright 2012. Amazon Web Services, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
