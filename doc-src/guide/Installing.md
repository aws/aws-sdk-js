# @title Installing the SDK

# Installing the SDK

## NPM Installation

The preferred way to install the AWS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. To install the SDK,
simply type the following into a terminal window:

```sh
npm install aws-sdk
```

## Verifying the Installation

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

// Create a bucket using bound parameters and put something in it.
// Make sure to change the bucket name from "myBucket" to something unique.
var s3bucket = new AWS.S3({params: {Bucket: 'myBucket'}});
s3bucket.createBucket(function() {
  var data = {Key: 'myKey', Body: 'Hello!'};
  s3bucket.putObject(data, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});
```
