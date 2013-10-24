# @title Configuring the SDK in the Browser

# Configuring the SDK in the Browser

The SDK requires two settings to be configured in order to make requests,
a region for the service(s) being used, and credentials to access the resources.

In addition to configuring these settings in the application, you may also have
to configure permissions on the resources you control on AWS. We will discuss
the basics of this at the end of this chapter.

## The Global Configuration Object (`AWS.config`)

By default, you can set global configuration by updating the `AWS.config` object with
new settings. The most common settings are:

1. `credentials` &mdash; the credentials object that contains authentication keys.
2. `region` &mdash; to set the region for requests
3. `sslEnabled` &mdash; whether SSL is enabled or not
4. `maxRetries` &mdash; to control the number of retries for a request
5. `logger` &mdash; a logger object to write debug information to. Set to `process.stdout`
   to get logging information about service requests.

More configuration settings can be found in the
[API reference documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).

If you have multiple service objects that work in different regions, you can
look at the *Service-Specific Configuration* section below to see how to pass
the region to each individual service.

### Loading Credentials in the Client's Browser

<p class="note">Never hard-code credentials to your web application unless the
  credentials are scoped to an
  <a href="http://aws.amazon.com/iam/faqs/#What_is_a_user">IAM user</a>
  with read-only permissions to very specific resources. Remember that when
  developing a client-side application in the browser, all source code you
  write is downloaded and available to be inspected by your users, so you
  should never put secrets inside of your application.
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

#### Using Web Identity Federation to Authenticate Users

TODO

#### Hard-Coding Credentials

<p class="note">If you hard-code credentials in your application, ensure that
  the credentials you are vending in your application are scoped to an
  <a href="http://aws.amazon.com/iam/faqs/#What_is_a_user">IAM user</a>
  with read-only permissions to very specific resources. Remember that when
  hard-coding credentials in your application, you are allowing all of your
  users access to the secret key in plain text.
</p>

You can hard-code credentials by passing the credential information to the
configuration object using `AWS.config.update()`:

```js
AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
```

### Setting the Region

The AWS SDK for JavaScript doesn't select the region by default. You can choose
a region by setting the `region` property on the global configuration object,
or by setting it per-service. The following code sets the region globally for
all subsequent service objects:

```js
AWS.config.region = 'us-west-1';
```

## Service-Specific Configuration

Occasionally, you might want to apply configuration only to one service.
For instance, you want to use multiple EC2 objects in different regions.
You can do this by passing configuration data directly to the service object 
constructor:

```js
var s3 = new AWS.S3({region: 'ap-southeast-2', maxRetries: 15});
```

Note that the constructor takes all of the same configuration data as the
`AWS.config` object described above, including credential information.

## Configuring Resources and Permissions

### CORS

TODO

### Permissions for IAM Roles

WIF INFO HERE
