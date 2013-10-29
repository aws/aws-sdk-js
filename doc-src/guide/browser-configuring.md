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
5. `logger` &mdash; a logger object to write debug information to. Set to `console`
   to get logging information about service requests.

More configuration settings can be found in the
[API reference documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html).

If you have multiple service objects that work in different regions, you can
look at the [Service-Specific Configuration](#Service-Specific_Configuration)
section below to see how to pass the region to each individual service.

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

There are a couple of ways to load credentials. Here they are, in order of
recommendation:

1. Using web identity federation to authenticate users
2. Hard-coded in your application

We recommend you not hard-code your AWS credentials in your application;
however, it is reasonable to temporarily hard-code credential information
in small personal scripts or for testing purposes. It is also sometimes
necessary to hard-code **read-only** credentials in your application.

#### Using Web Identity Federation to Authenticate Users

The recommended way to authorize users of your application to access
AWS resources is to set up federated login through a trusted third-party
identity provider. This feature is known as Web Identity Federation. Amazon
Web Services currently supports authenticating users using web identity
federation through 3 identity providers:

1. [Login with Amazon](http://login.amazon.com/)
2. [Facebook](https://www.facebook.com/about/login/)
3. [Google](https://developers.google.com/+/)

After you select an identity provider, you must register an application with
the provider, create an IAM role, and setup permissions for this role. The
IAM role you create will be used to grant the permissions you configured
to the users that login through the respective identity provider. For example,
you can setup a role that allows users who login through Facebook to get read
access to a specific S3 bucket that you control.

Once you have an IAM role with configured privileges and an application
registered with your identity provider of choice, you can setup the SDK to
get credentials for this role using the following credential management helper
code:

```javascript
AWS.config.credentials = new AWS.WebIdentityCredentials({
  RoleArn: 'arn:aws:iam::<AWS_ACCOUNT_ID>:role/<WEB_IDENTITY_ROLE_NAME>',
  ProviderId: 'graph.facebook.com|www.amazon.com', // this is null for Google
  WebIdentityToken: ACCESS_TOKEN
});
```

The `ProviderId` parameter will depend on the identity provider you choose,
and the `WebIdentityToken` will be the access token retrieved from the login
process with the identity provider. You can visit the following
web-specific documentation pages in order to find out how to configure and
retrieve access tokens for users logging in through each respective identity
provider:

1. [Login with Amazon](http://login.amazon.com/website)
2. [Facebook Login](https://developers.facebook.com/docs/reference/javascript/)
3. [Google+ Sign-In](https://developers.google.com/+/web/signin/)


A full look at how to setup web identity federation for your application can
be found in the {file:browser-configuring-wif.md Configuring Web Identity Federation}
chapter of this guide. You can also read the
[AWS Security Token Service documentation](http://docs.aws.amazon.com/STS/latest/UsingSTS/CreatingWIF.html)
on creating temporary credentials using web identity federation, or see the
[Web Identity Federation Playground](https://web-identity-federation-playground.s3.amazonaws.com/index.html),
which provides a hands-on look at how this process works.

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

```javascript
AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
```

### Setting the Region

The AWS SDK for JavaScript doesn't select the region by default. You can choose
a region by setting the `region` property on the global configuration object,
or by setting it per-service. The following code sets the region globally for
all subsequent service objects:

```javascript
AWS.config.region = 'us-west-1';
```

## Service-Specific Configuration

Occasionally, you might want to apply configuration only to one service.
For instance, you want to use multiple EC2 objects in different regions.
You can do this by passing configuration data directly to the service object 
constructor:

```javascript
var s3 = new AWS.S3({region: 'ap-southeast-2', maxRetries: 15});
```

Note that the constructor takes all of the same configuration data as the
`AWS.config` object described above, including credential information.

## Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing, or CORS, is a security feature of modern web
browsers that allow them to negotiate which domains they will allow to make
requests against which external websites or services. This is an important
feature to keep in mind when developing applications with the AWS SDK for
JavaScript in the browser, since most requests to resources will be sent to an
external domain (the endpoint for the given AWS service). If your browser or
environment enforces CORS security, you will need to configure CORS with the
service.

Fortunately, only Amazon S3 requires explicit configuration for CORS. Other
services only require that the request is signed using authentication keys
that have permissions on the resource (discussed above).

### Configuring CORS for an Amazon S3 Bucket

In order to configure an Amazon S3 bucket to use CORS, you can visit the
[Amazon S3 console](https://console.aws.amazon.com/s3), click on the properties
tab of the bucket you want to configure, and then click "Edit CORS
Configuration" in the Permissions section. A set of
[sample configurations](http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html#how-do-i-enable-cors)
are provided in the S3 documentation.

A quick CORS configuration sample is shown below. This sample allows a user to
view, add, remove, or update objects inside of a bucket from any external domain,
though it is recommended that you scope the "AllowedOrigin" to the domain that
your website runs from.

    <?xml version="1.0" encoding="UTF-8"?>
    <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
      <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>HEAD</AllowedMethod>
        <AllowedMethod>GET</AllowedMethod>
        <AllowedMethod>PUT</AllowedMethod>
        <AllowedMethod>POST</AllowedMethod>
        <AllowedMethod>DELETE</AllowedMethod>
        <AllowedHeader>*</AllowedHeader>
      </CORSRule>
    </CORSConfiguration>

**Note** that this does *not* authorize the user to perform any actions on the
bucket, it simply enables the browser's security model to allow a request
to S3. Actual permissions for the user must be configured either via bucket
permissions, or IAM role level permissions.

### When CORS is Not Required

CORS does not always need to be configured explicitly. In some environments,
like local desktop or mobile devices, CORS may not be enforced, and configuring
it is not necessary.

Furthermore, if you host your application from within S3 and access
resources from "*.s3.amazonaws.com" (or a specific regional endpoint), your
requests will not be accessing an external domain and therefore will not
require CORS. CORS will still be used for services besides S3 in this case.
