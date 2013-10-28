# @title AWS SDK for Node.js

# Getting Started with the SDK in Node.js

## Installing with npm

The preferred way to install the AWS SDK for JavaScript in Node.js is to
use the [npm](http://npmjs.org) package manager for Node.js. To install the SDK,
simply type the following into a terminal window:

```sh
npm install aws-sdk
```

## Loading the SDK

After you've installed the SDK, you can require the AWS package in your node
application using `require()`:

```javascript
var AWS = require('aws-sdk');
```

## Next Steps

Now that you have installed and loaded the SDK, continue on to learn how to
configure and use the SDK to make requests to API operations on services.

* {file:node-configuring.md Configuring the SDK}
* {file:node-services.md Working with Services}
* {file:node-making-requests.md Making Requests}
* {file:node-examples.md Common Examples}
