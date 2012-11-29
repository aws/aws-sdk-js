# @title Services

# Services

## Supported Services

The list of supported service objects is listed below:

* {AWS.S3}
* {AWS.EC2}
* {AWS.DynamoDB}
* {AWS.SimpleWorkflow}

Each service object in the SDK currently provides low level access to every
API call in the respective AWS service. The full list of methods and their
parameters are documented in the complete API reference (linked from each
service name in the above list).

## Constructing a Service

Each service can be constructed with runtime configuration data that is
specific to that service object. The service specific configuration data
will be merged on top of global configuration, so there is no need to
re-specify any global settings. For example, an EC2 object can be created
for a specific region:

```js
var ec2 = new EC2({region: 'us-west-2'});
```

This object will continue to use the globally provided credentials.

## Passing Arguments to a Service Method

When calling a method to a service, parameters should be passed in as
option values, similar to the way configuration is passed.
For example, to read an object for a given bucket and key in S3, you
can pass the following parameters to the `getObject` method:

```js
s3.getObject({Bucket: 'bucketName', Key: 'keyName'});
```

Note that the full parameter documentation for each method is found
in each service page in the complete API reference documentation.
