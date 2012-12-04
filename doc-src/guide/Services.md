# @title Services

# Services

## Supported Services

Here's the list of supported service objects:

* [AWS.S3.Client](http://docs.amazonwebservices.com/AWSJavaScriptSDK/latest/frames.html#!http%3A//docs.amazonwebservices.com/AWSJavaScriptSDK/latest/AWS/S3/Client.html)
* [AWS.EC2.Client](http://docs.amazonwebservices.com/AWSJavaScriptSDK/latest/frames.html#!http%3A//docs.amazonwebservices.com/AWSJavaScriptSDK/latest/AWS/EC2/Client.html)
* [AWS.DynamoDB.Client](http://docs.amazonwebservices.com/AWSJavaScriptSDK/latest/frames.html#!http%3A//docs.amazonwebservices.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/Client.html)
* [AWS.SimpleWorkflow.Client](http://docs.amazonwebservices.com/AWSJavaScriptSDK/latest/frames.html#!http%3A//docs.amazonwebservices.com/AWSJavaScriptSDK/latest/AWS/SimpleWorkflow/Client.html)

Each service object in the SDK currently provides low-level access to every
API call in the respective AWS service. The full list of methods and their
parameters are documented in the complete API reference (linked from each
service name in the above list).

## Constructing a Service

Each service can be constructed with runtime configuration data that is
specific to that service object. The service-specific configuration data
will be merged on top of global configuration, so there is no need to
re-specify any global settings. For example, an EC2 object can be created
for a specific region:

```js
var ec2 = new EC2({region: 'us-west-2'});
```

This object will continue to use the globally provided credentials.

## Passing Arguments to a Service Method

When calling a method to a service, you should pass parameters in as
option values, similar to the way configuration is passed.
For example, to read an object for a given bucket and key in S3, you
can pass the following parameters to the `getObject` method:

```js
s3.client.getObject({Bucket: 'bucketName', Key: 'keyName'});
```

Note that the full parameter documentation for each method is found
in each service page in the complete API reference documentation.
