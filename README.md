# AWS JavaScript SDK

The official JavaScript implementation of the AWS SDK for node.js.

## Installing

    npm install aws-sdk

## Using

Require the AWS package in your node application via `require`:

```js
var AWS = require('aws');
```

Load up a configuration by passing your AWS credentials to `AWS.Config`:

```js
var creds = {'accessKeyId': 'ACCESSKEY', 'secretAccessKey': 'SECRET'};
var config = new AWS.Config(creds);
```

You can also specify a region in the configuration:

```js
config.region = 'us-east-1';
```

Create a service request by passing the configuration to the service:

```js
db = new AWS.DynamoDB(config);
var req = db.listTables();
```

Operations return an `AWSRequest` promise object that can be registered with
callbacks. The callbacks give you an `AWSResponse` object:

```js
req.done(function(response) {
  console.log(response.data)
})
req.fail(function(response) {
  console.log(response.error)
})

// prints: {TableNames: ["Table1", "Table2", ...]}
```

You can also **chain** callbacks:

```js
req.done(function() { ... }).fail(function() { ... })
```

# License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

    Copyright 2012 Amazon Web Services

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
