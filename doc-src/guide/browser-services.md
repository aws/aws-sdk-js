# @title Working with Services in the Browser

# Working with Services in the Browser

## Supported Services

By default, the SDK ships with support for 15 AWS services. Each service object
in the SDK currently provides low-level access to every API call in the
respective AWS service. The full list of methods and their parameters are
documented in the complete API reference documentation (linked from each
service name in the list below).

The 18 services that come with the default hosted package of the SDK are:

* [AWS.CloudWatch](/AWSJavaScriptSDK/latest/AWS/CloudWatch.html)
* [AWS.CloudWatchLogs](/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html)
* [AWS.CognitoIdentity](/AWSJavaScriptSDK/latest/AWS/CognitoIdentity.html)
* [AWS.CognitoSync](/AWSJavaScriptSDK/latest/AWS/CognitoSync.html)
* [AWS.DeviceFarm](/AWSJavaScriptSDK/latest/AWS/DeviceFarm.html)
* [AWS.DynamoDB](/AWSJavaScriptSDK/latest/AWS/DynamoDB.html)
* [AWS.DynamoDBStreams](/AWSJavaScriptSDK/latest/AWS/DynamoDBStreams.html)
* [AWS.EC2](/AWSJavaScriptSDK/latest/AWS/EC2.html)
* [AWS.ElasticTranscoder](/AWSJavaScriptSDK/latest/AWS/ElasticTranscoder.html)
* [AWS.Kinesis](/AWSJavaScriptSDK/latest/AWS/Kinesis.html)
* [AWS.Lambda](/AWSJavaScriptSDK/latest/AWS/Lambda.html)
* [AWS.MobileAnalytics](/AWSJavaScriptSDK/latest/AWS/MobileAnalytics.html)
* [AWS.MachineLearning](/AWSJavaScriptSDK/latest/AWS/MachineLearning.html)
* [AWS.OpsWorks](/AWSJavaScriptSDK/latest/AWS/OpsWorks.html)
* [AWS.S3](/AWSJavaScriptSDK/latest/AWS/S3.html)
* [AWS.SNS](/AWSJavaScriptSDK/latest/AWS/SNS.html)
* [AWS.SQS](/AWSJavaScriptSDK/latest/AWS/SQS.html)
* [AWS.STS](/AWSJavaScriptSDK/latest/AWS/STS.html)

<div class="clear"></div>

It is possible to use the SDK with other services if [CORS](http://www.w3.org/TR/cors/)
security checking is disabled in your environment. In this case, you can build
your own custom version of the SDK. See the {file:browser-building.md Building the SDK}
section of the guide for more information on how to create a custom build of
the SDK.

## Constructing a Service

Each service can be constructed with runtime configuration data that is
specific to that service object. The service-specific configuration data
will be merged on top of global configuration, so there is no need to
re-specify any global settings. For example, an DynamoDB object can be created
for a specific region:

```javascript
var dynamodb = new AWS.DynamoDB({region: 'us-west-2'});
```

This object will continue to use the globally provided credentials.

### Global Service-Specific Configuration

In addition to providing service-specific configuration directly on an
individual service object, you can also configure the SDK globally to apply
service-specific configuration to all newly created service objects of a
given type. For example, to configure *all* `AWS.DynamoDB` objects to use the
"us-west-2" region, you can add the following to the global `AWS.config`:

```javascript
AWS.config.dynamodb = { region: 'us-west-2' };
```

By adding configuration to `AWS.config.SVCIDENTIFIER`, where "SVCIDENTIFIER"
is the service identifier (found on each class in the [API reference][api]),
you can set options globally for a given service.

## Passing Parameters to a Service Operation

When calling a method to a service, you should pass parameters in as
option values, similar to the way configuration is passed.
For example, to read an object for a given bucket and key in S3, you
can pass the following parameters to the `getObject` method:

```javascript
s3.getObject({Bucket: 'bucketName', Key: 'keyName'});
```

Note that the full parameter documentation for each method is found
in each service page in the complete API reference documentation.

## Bound Parameters

Parameters can be automatically passed to service operations by binding them
directly when constructing the service object. To do this, pass the `params`
parameter to your constructed service with the map of default parameter
values like so:

```javascript
var s3bucket = new AWS.S3({ params: {Bucket: 'myBucket'} });
```

The `s3bucket` object will now represent an S3 service object bound to a bucket
named 'myBucket'. Any operation that takes the `Bucket` parameter will now
have it auto-filled with this value. This value can be overridden by passing
a new value in the service operation. Additionally, operations that do not
require a `Bucket` parameter will automatically ignore this bound parameter,
so the `s3bucket` object can still be used to call `listBuckets`, for instance.

[api]: /AWSJavaScriptSDK/latest
