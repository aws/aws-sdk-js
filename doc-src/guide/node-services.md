# @title Working with Services in Node.js

# Working with Services in Node.js

## Supported Services

The SDK currently supports all available AWS services. Each service object
in the SDK currently provides low-level access to every API call in the
respective AWS service. The full list of supported services including
their operations and parameters are documented in the complete
[API reference documentation][api].

## Constructing a Service

Each service can be constructed with runtime configuration data that is
specific to that service object. The service-specific configuration data
will be merged on top of global configuration, so there is no need to
re-specify any global settings. For example, an EC2 object can be created
for a specific region:

```javascript
var ec2 = new AWS.EC2({region: 'us-west-2'});
```

This object will continue to use the globally provided credentials.

### Global Service-Specific Configuration

In addition to providing service-specific configuration directly on an
individual service object, you can also configure the SDK globally to apply
service-specific configuration to all newly created service objects of a
given type. For example, to configure *all* `AWS.EC2` objects to use the
"us-west-2" region, you can add the following to the global `AWS.config`:

```javascript
AWS.config.ec2 = { region: 'us-west-2' };
```

By adding configuration to `AWS.config.SVCIDENTIFIER`, where "SVCIDENTIFIER"
is the service identifier (found on each class in the [API reference][api]),
you can set options globally for a given service.

## Locking API Versions

Services released by AWS use API versions to keep track of API compatibility.
API versions in AWS services can be identified by a `YYYY-mm-dd` formatted
date string, i.e., 2006-03-01 for Amazon S3. It is recommended to lock into
an API version for a service if you are relying on it for production code.
This way, you can isolate yourself from service changes in updates of the
SDK.

In order to lock into an API version of a given service, simply pass the
`apiVersion` parameter when constructing the object, for example:

```javascript
var dynamodb = new AWS.DynamoDB({apiVersion: '2011-12-05'});
```

Note that versions can also be locked globally by specifying the `apiVersion`
or `apiVersions` global configuration parameters. This is documented with
more detail in the {file:node-configuring.md Configuring} section.

### Using the Latest Version

By default, the SDK will select the **latest** available service API version
when constructing a service object (unless overridden globally). You can
also force the latest API version to be used by passing the "latest" value
as the `apiVersion` parameter like so:

```javascript
var ec2 = new AWS.EC2({apiVersion: 'latest'});
```

### Fuzzy Versions and Date Locking

Since AWS has many services with many different API versions, the SDK allows
for the specification of "fuzzy versions" instead of exact API version
matches. This allows you to specify any date after the API version date,
and the SDK will look for the *last* available matching API version when
loading the service object. For instance, you can also load the 2011-12-05
DynamoDB API by using the following code:

```javascript
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-04-04'});
```

Note that 2012-04-04 is later than the first API release (2011-12-05)
but earlier than the next revision of the API (2012-08-10), so the *first*
revision will be used.

You can also use this strategy to globally lock your application to a point
in time. For instance, if you begin developing your application on 2012-07-05,
you can add the following global `apiVersion` lock value:

```javascript
AWS.config.apiVersion = '2012-07-05';
```

This will allow *all* created service objects to use the latest available
API versions at the specified lock time. You can override any API versions
if you need a newer version, or if the service had not yet been released,
by adding the `apiVersion` parameter to the constructor call as normal:

```javascript
// Amazon Redshift was not yet released in 2012-07-05
var redshift = new AWS.Redshift({apiVersion: '2012-12-01'});
```

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

[api]: /AWSJavaScriptSDK/latest/_index.html
