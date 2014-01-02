# @title Configuring Web Identity Federation in the Browser

# Configuring Web Identity Federation in the Browser

This guide will walk through the steps required to configure your application
and vend federated credentials using trusted identity providers such
as [Login with Amazon](http://login.amazon.com/),
[Facebook](https://www.facebook.com/about/login/), or
[Google](https://developers.google.com/+/features/sign-in). In short, you will
want to:

1. Register an application with the identity provider
2. Create an IAM role for the identity provider
3. Setup permissions for the IAM role
4. Use the identity provider's SDK to get an access token after logging in
5. Use the AWS SDK for JavaScript to get temporary credentials to your application

You can find more information about web identity federation in the
[AWS Security Token Service documentation](http://docs.aws.amazon.com/STS/latest/UsingSTS/CreatingWIF.html).

## 1. Register an application with the identity provider

The first step is to register an application with the provider you are
interested in using. In order to do this, visit the identity provider through
the URLs above. You will be asked to provide some information that identifies
your application, and, in some cases, identifies the author of the application.
This is to ensure that the identity provider knows whom it is handing off its
user information to. In each case, you will get an application ID after you
have registered the application. This ID will be used to configure user roles. 

## 2. Create an IAM role for the identity provider

Once you have the application ID, you can visit the Roles section of the
[IAM console](https://console.aws.amazon.com/iam) to create a new role. Click
the "Create New Role" button and use the "Role for Web Identity Provider Access"
radio button when configuring the role. This will ask for the identity provider
and application ID that you got when you registered your application.

**Note** that you can also provide other constraints to the role, like scoping
the role to specific user IDs. If your role is providing write permissions
to your resources, you should make sure that you have correctly scoped this
to users with the correct privileges, otherwise any user with an Amazon,
Facebook, or Google identity will be able to modify resources in your
application.

## 3. Setup permissions for the IAM role

<p class="note">
  If you are configuring permissions for an Amazon S3 bucket, you may also
  need to configure CORS. See the
  <a href="#Cross-Origin_Resource_Sharing__CORS_">last section in this chapter</a>
  for details on configuring CORS for your bucket.
</p>

The next step of the role creation wizard will ask you to configure permissions
for the resources you want to expose. This is where you would allow access to
specific operations on specific resources. You can use the policy generator
provided in the wizard to easily manage these permissions. You can also read
more about how to configure policies in the
[IAM documentation](http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html).

After you have configured permissions you will now have an IAM role. You can
view the details pane of the role to get the role ARN. Store this value for
later, as you will use it at the end of this guide to setup authentication in
the SDK.

## 4. Use the identity provider's SDK to get an access token after logging in

For the next step, you will setup the login action for your application,
which will rely on the identity provider's SDK. In order to setup the relevant
SDK code in your application, you can visit the documentation for your
identity provider. In each case you will want to download and install a
JavaScript SDK that allows users to login either by OAuth or OpenID. We will
see examples of this in step 6.

To get the SDK for your identity provider, you can visit the following
web-specific documentation pages which will guide you through the process
of downloading and configuring the relevant JavaScript code to allow users
to login to your application:

1. [Login with Amazon](http://login.amazon.com/website)
2. [Facebook Login](https://developers.facebook.com/docs/reference/javascript/)
3. [Google+ Sign-In](https://developers.google.com/+/web/signin/)

## 5. Use the AWS SDK for JavaScript to get temporary credentials

After you have configured your application, roles, and resource permissions,
it is now time to write the code that you will use in your application to get
temporary credentials. These credentials will be provided through the AWS
Security Token Service using web identity federation. Users will login to
the identity provider using the SDK code setup in the previous step, which
will get them an access token. Using the IAM role ARN and the access token from
your provider, you will setup the `AWS.WebIdentityCredentials` helper object in
the SDK like so:

```javascript
AWS.config.credentials = new AWS.WebIdentityCredentials({
  RoleArn: 'arn:aws:iam::<AWS_ACCOUNT_ID>:role/<WEB_IDENTITY_ROLE_NAME>',
  ProviderId: 'graph.facebook.com|www.amazon.com', // this is null for Google
  WebIdentityToken: ACCESS_TOKEN
});

// You can now load service objects. Note that any objects created before
// setting the global config.credentials property will not have the
// credentials copied over.

var s3 = new AWS.S3;
```

<p class="note">The <code>ProviderId</code> parameter should be set to null
  or left unset when configuring web identity federation through Google.
</p>

Remember, the `ACCESS_TOKEN` value is the access token you got from your
identity provider.

Note that you can also create the `AWS.WebIdentityCredentials` object before
retrieving the access token. This will allow you to create service objects
that depend on credentials before loading the access token. To do this,
simply create the credentials object without the `WebIdentityToken` parameter
and add it in later:

```javascript
AWS.config.credentials = new AWS.WebIdentityCredentials({
  RoleArn: 'arn:aws:iam::<AWS_ACCOUNT_ID>:role/<WEB_IDENTITY_ROLE_NAME>',
  ProviderId: 'graph.facebook.com|www.amazon.com' // this is null for Google
});

// Create a service object
var s3 = new AWS.S3;
```

In the callback from the identity provider's SDK with the access token:

```javascript
AWS.config.credentials.params.WebIdentityToken = accessToken;
```

## 6. Putting it all together

<p class="note">
  This example code must be run from a http:// or https:// host scheme.
  This is to ensure that the Facebook login page is able to redirect back
  to your application.
</p>

Here is some example code using Facebook's SDK to get credentials
into your application. Other identity providers will have a similar setup
step that involves loading the respective SDK, logging in, and receiving
an access token.

    <button id="login">Login</button>
    <div id="fb-root"></div>
    <script type="text/javascript">
    var s3 = null;
    var appId = 'FACEBOOK_APP_ID';
    var roleArn = 'arn:aws:iam::<AWS_ACCOUNT_ID>:role/<WEB_IDENTITY_ROLE_NAME>';

    window.fbAsyncInit = function() {
      // init the FB JS SDK
      FB.init({appId: appId});

      document.getElementById('login').onclick = function() {
        FB.login(function (response) {
          if (response.authResponse) { // logged in
            AWS.config.credentials = new AWS.WebIdentityCredentials({
              RoleArn: roleArn,
              ProviderId: 'graph.facebook.com',
              WebIdentityToken: response.authResponse.accessToken
            });

            s3 = new AWS.S3;

            console.log('You are now logged in.');
          } else {
            console.log('There was a problem logging you in.');
          }
        });
      };
    };

    // Load the FB JS SDK asynchronously
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/all.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
    </script>
