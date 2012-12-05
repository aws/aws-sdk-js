# @title Installing

# Installing

## NPM Installation

The preferred way to install the AWS SDK for Node.js is to use the
[npm](http://npmjs.org) package manager for Node.js. Simply type the following
into a terminal window:

```sh
npm install aws-sdk
```

**Please Note**: Installing the aws-sdk npm package on Windows may display errors while trying to install the optional dependency for libxmljs.  This error can be safely ignored.

## Verifying the Installation

After you've installed the SDK, you can require the AWS package in your node
application using `require`:

```js
var AWS = require('aws-sdk');
```

You should now be ready to configure and use the SDK.
