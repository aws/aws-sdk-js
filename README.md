# AWS JavaScript SDK

The official JavaScript implementation of the AWS SDK for node.js.

## Installing

    npm install aws-sdk

## Using

Require the AWS package in your node application via `require`:

```js
var AWS = require('aws-sdk');
```
### Configuration

The SDK will attempt also to load credentials from the environment.  It will look in the following places:

    AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY
    AWS_SESSION_TOKEN (optional)

    AMAZON_ACCESS_KEY_ID
    AMAZON_SECRET_ACCESS_KEY
    AMAZON_SESSION_TOKEN (optional)
    
You can also load configuration and credentials from disk using `AWS.config.loadFromPath`:

```js
AWS.config.loadFromPath('./configuration.json')
```

Example configuration file contents:

    {
        "accessKeyId": "akid",
        "secretAccessKey": "secret",
        "region": "us-east-1"
    }
    
### Making Requests

To make a request you should start by creating a service interface.

```js
// uses configuration from AWS.config
var ddb = new AWS.DynamoDB();

// merges configuration with AWS.config
var ddbWest = new AWS.DynamoDB({region:'us-west-1'});
```

Services interfaces provide one function for each API operation.  These functions return an `AWSRequest` promise object.  You can then register callbacks on the request object.  The callbacks will receive an `AWSResponse` object.

```js
var req = ddb.listTables();

// called when the request is successful
req.done(function (response) {
  console.log(resp.data);
  // prints: {TableNames: ["Table1", "Table2", ...]}
});

// called when the request generates an error
req.fail(function (response) {
  console.log(resp.error);
  // errors have code and message properties
});

// called for every request
req.always(function (response) {
  if (resp.error) {
    console.log(resp.error);
  } else {
    console.log(resp.data);
  }
});
```

You can also **chain** callbacks:

```js
req.done(function() { ... }).fail(function() { ... })
```
### Example: Listing buckets in Amazon S3

In the example below, I will print the name and creation date of all of the buckets in my AWS account.

```js
var AWS = require('aws-sdk');
AWS.loadConfig('./configuration.json');

var s3 = new AWS.S3();
s3.listBuckets().always(function (resp) {
  if (resp.error) {
    console.log(error.message);
  } else {
    AWS.util.arrayEach(resp.data.Buckets, function(bucket) {
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    });
  }
});
```

# License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

    Copyright 2012 Amazon Web Services

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
