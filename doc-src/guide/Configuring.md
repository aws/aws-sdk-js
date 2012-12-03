# @title Configuring

# Configuration Guide

## The Configuration Object

Configuration in the SDK can be done in two ways:

1. Global configuration on `AWS.config`, or,
2. Passing extra configuration to a service object

Setting global configuration with `AWS.config` is often easier to get up
and running with, but service level configuration can provide much more control
over your requests. Both of these configuration mechanisms are discussed.

## Global Configuration (`AWS.config`)

By default, you can set global configuration by updating the `AWS.config` object with
new settings. The most common settings are:

* `accessKeyId`, `secretAccessKey`, `sessionToken` &mdash; for credential management
* `region` &mdash; to set the region for requests
* `sslEnabled` &mdash; whether SSL is enabled or not
* `maxRetries` &mdash; to control the number of retries for a request

The only things you *need* to set in order to use the SDK are credentials and
the region value. Let's discuss how to do that.

### Setting AWS Credentials

<p class="note">Remember, if you set your AWS credentials in your environment
  variables, the AWS SDK for Node.js will automatically detect them, and you
  will not need to perform any manual credential configuration in your
  application.
</p>

Credentials are the most important thing you need to set when using any AWS SDK.
Credentials can be set globally on the `AWS.config` object or per service by
passing the credential information to the service object directly.

There are a few ways to load credentials. Here they are, in order of
recommendation:

1. Loaded from environment variables,
2. Loaded from a JSON file on disk,
3. Loaded from EC2 metadata service,
4. Hardcoded in your application

We recommend you not hard-code your AWS credentials in your application;
however, it is reasonable to temporarily hard-code credential information
in small personal scripts or for testing purposes.

#### Credentials from Environment Variables

By default, the AWS SDK for Node.js will automatically detect AWS credentials
set in your environment and use them for requests. This means that if you
properly set your environment variables, you do not need to manage credentials
in your application at all.

The keys that the SDK looks for are as follows:

```plain
AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN (optional)
```

Alternately, the SDK can accept the `AMAZON_` prefix instead:

```plain
AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY, AMAZON_SESSION_TOKEN (optional)
```

#### Credentials from Disk

You can also load configuration and credentials from disk using
`AWS.config.loadFromPath` by passing a file to a JSON document
containing the configuration data. For example, if you had a file
named 'config.json' with the contents:

```js
{ "accessKeyId": "akid", "secretAccessKey": "secret", "region": "us-east-1" }
```

You can load the JSON data using the command:

```js
AWS.config.loadFromPath('./config.json');
```

Note that the `loadFromPath` method clobbers all existing configuration on
the object. If you are adding extra configuration, make sure you add it
after this call.

#### Hard-Coding Credentials

<p class="note">We recommend you <strong>not</strong> hard-code
  credentials inside an application. Use this method only for
  small personal scripts or for testing purposes.
</p>

You can hard-code credentials by passing the credential information to the
configuration object using `AWS.config.update()`:

```js
AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
```

### Setting the Region

The AWS SDK for Node.js doesn't select the region by default. You can choose
a region similarly to setting credentials by either loading from disk or
using `AWS.config.update()`:

```js
AWS.config.update({region: 'us-west-1'});
```

## Service-Specific Configuration

Occasionally, you might want to apply configuration only to one service.
For instance, you want to use multiple EC2 objects in different regions.
You can do this by passing configuration data directly to the service object 
constructor:

```js
var ec2 = new AWS.EC2({region: 'ap-southeast-2', maxRetries: 15});
```

Note that the constructor takes all of the same configuration data as the
`AWS.config` object described above, including credential information.

## Immutable Configuration Data

Global configuration changes apply to all requests for all *newly* created
services. Any newly created service will merge its local options on top of
the global configuration data at the time of creation. This means that any
future updates to the global `AWS.config` object will *not* apply to existing
service objects. These services would have to be manually updated with the new
configuration data, or recreated using the following command (assuming an
existing s3 service object):

```js
s3 = new AWS.S3(s3.config);
```
