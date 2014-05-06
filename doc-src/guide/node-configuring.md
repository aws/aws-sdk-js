# @title Configuring the SDK in Node.js

# Configuring the SDK in Node.js

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

1. `accessKeyId`, `secretAccessKey`, `sessionToken` &mdash; for credential management
2. `region` &mdash; to set the region for requests
3. `sslEnabled` &mdash; whether SSL is enabled or not
4. `maxRetries` &mdash; to control the number of retries for a request
5. `logger` &mdash; a logger object to write debug information to. Set to `process.stdout`
   to get logging information about service requests.

More configuration settings can be found in the
[API reference documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).

The only things you *need* to set in order to use the SDK are credentials and
the region value. Let's discuss how to do that.

### Setting AWS Credentials

<p class="note">Remember, if you set your AWS credentials in the shared
  credentials file or via environment variables, the AWS SDK for Node.js will
  automatically detect them, and you will not need to perform any manual
  credential configuration in your application.
</p>

Credentials are the most important thing you need to set when using any AWS SDK.
Credentials can be set globally on the `AWS.config` object or per service by
passing the credential information to the service object directly.

There are a few ways to load credentials. Here they are, in order of
recommendation:

1. Loaded from IAM Roles for Amazon EC2 (if running on EC2),
2. Loaded from the shared credentials file (`~/.aws/credentials`),
3. Loaded from environment variables,
4. Loaded from a JSON file on disk,
5. Hardcoded in your application

We do not recommend that you hard-code your AWS credentials in your application;
however, it is reasonable to temporarily hard-code credential information
in small personal scripts or for testing purposes.

#### Credentials from the Shared Credentials File (`~/.aws/credentials`)

By default, the SDK will automatically search the shared credentials file
for credentials when loading. If you use this file for other SDKs and tools
(like the CLI), you do not need to take any extra steps to configure
credentials in the SDK.

You may configure credentials for multiple access keys in the same shared
configuration file using *profiles*. This is discussed in the last part of
this section.

##### Creating the Shared Credentials File

If you do not already have a shared credentials file, you can create one in
your home directory, specifically inside of `~/.aws/credentials`. Create and
open the file, and add the following text, filling in the
`<YOUR_ACCESS_KEY_ID>` and `<YOUR_SECRET_ACCESS_KEY>` values:

```
[default]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```

The `[default]` heading defines credentials for the "default" profile. You
can define credentials for other profiles too. This is discussed in the next
section.

Once this file is saved, the SDK will load these credentials without any
extra configuration.

##### Using Profiles with the SDK

It is possible to have credential information for multiple access keys in the
same shared configuration file. You can make use of different credentials
through the use of "profiles". Each profile maps to a set of credentials.
For example, multiple profiles could be configured like so:

```
[default] ; the default profile
aws_access_key_id = ...
aws_secret_access_key = ...

[personal-account] ; my "personal-account" profile
aws_access_key_id = ...
aws_secret_access_key = ...

[work-stuff] ; work profile
aws_access_key_id = ...
aws_secret_access_key = ...
```

By default, the SDK checks the `AWS_PROFILE` environment variable for the
profile name to use. If no `AWS_PROFILE` variable is set in your environment,
the SDK will use the "default" profile.

In the above case, we could use `AWS_PROFILE=work-stuff`
to load our work credentials when using the SDK. If we had some `script.js`
file that used the SDK, we could run it with those credentials by typing:

```
$ AWS_PROFILE=work-stuff node script.js
```

It is also possible to explicitly select the profile using the SDK, either
by setting `process.env.AWS_PROFILE` prior to loading the SDK, or by selecting
the credential provider manually:

```js
var credentials = new AWS.SharedIniFileCredentials({profile: 'work-stuff'});
AWS.config.credentials = credentials;
```

#### Credentials from Environment Variables

By default, the SDK will automatically detect AWS credentials
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

```javascript
{ "accessKeyId": "akid", "secretAccessKey": "secret", "region": "us-east-1" }
```

You can load the JSON data using the command:

```javascript
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

```javascript
AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
```

### Setting the Region

The AWS SDK for Node.js doesn't select the region by default. You can choose
a region similarly to setting credentials by either loading from disk or
using `AWS.config.update()`:

```javascript
AWS.config.update({region: 'us-west-1'});
```

### Locking API Versions

<p class="note">For more information on API version locking in the SDK, see the
{file:node-services.md Working With Services} section.
</p>

You can globally configure a set of API versions to use for each service by
specifying the `apiVersions` parameter in `AWS.config`. For example,
you can choose to set specific versions of the DynamoDB and EC2 services,
while selecting the "latest" version of Redshift:

```javascript
AWS.config.apiVersions = {
  dynamodb: '2011-12-05',
  ec2: '2013-02-01',
  redshift: 'latest'
}
```

Note that by default, the SDK will use the "latest" available API version
when constructing a service.

You can also lock all services at a specific point in time by using a "fuzzy
version":

```javascript
// Try to use latest available APIs before this date
AWS.config.apiVersion = '2012-05-04';
```

### Configuring a Proxy

If you cannot connect to the internet directly, the SDK supports the use of
HTTP or HTTPS proxies through global or per-service configuration options. To
set a proxy, pass the `proxy` option to the `httpOptions` setting of your
config object. This is how you could set a global proxy:

```javascript
AWS.config.update({
  httpOptions: {
    proxy: 'http://localhost:8080'
  }
});

var s3 = new AWS.S3();
s3.getObject({Bucket: 'bucket', Key: 'key'}, function (err, data) {
  console.log(err, data);
});
```

## Service-Specific Configuration

Occasionally, you might want to apply configuration only to one service.
For instance, you want to use multiple EC2 objects in different regions.
You can do this by passing configuration data directly to the service object 
constructor:

```javascript
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
existing `s3` service object):

```javascript
s3 = new AWS.S3(s3.config);
```
