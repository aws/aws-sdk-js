# @title Making Requests

# Making Requests

## Asynchronous Callbacks

All requests made through the SDK are asynchronous and use a
callback interface. Each service method that kicks off a request
can accept a callback as the last parameter with the signature
`function(error, data) { ... }`. This callback will be called when
the response or error data is available.

For example, the following service method can be called with
a standard callback to retrieve the response data or error:

```js
new AWS.EC2().client.describeInstances(function(error, data) {
  if (error) {
    console.log(error); // an error occurred
  } else {
    console.log(data); // request succeeded
  }
});
```

The `error` and `data` parameters are described in the "Response Object"
section below.

Note that if you do not specify a callback, the operation will
return an `AWS.AWSRequest` object that must be manually sent using
the `send()` method:

```js
// create the AWS.AWSRequest object
var request = new AWS.EC2().client.describeInstances();

// register a callback to report on the data
request.done(function(resp) {
  console.log(resp.data); // log the successful data response
});

// send the request
request.send();
```

### The Response Object (`AWS.AWSResponse`)

The response object is passed into each callback function so
that you can access response data. The `AWS.AWSResponse` object that
is passed in contains two important properties to get at this data:

When using the standard callback mechanism, the two properties will
be made available as parameters on the callback method in the form:
`function(error, data) { ... }`

#### The `data` property

The `response.data` property contains the serialized object data
retrieved from the service request. For instance, for an
Amazon DynamoDB `listTables` method call, the response data might 
look like this:

```js
> resp.data
{ TableNames: 
   [ 'table1', 'table2', ... ] }
```

The `data` property can be null if an error occurs (see below).

#### The `error` property

In the event of a service error (or transfer error), the
`response.error` property will be filled with the given
error data in the form:

```js
{ code: 'SHORT_UNIQUE_ERROR_CODE',
  message: 'Some human readable error message' }
```

In the case of an error, the `data` property will be null.
Note that if you handle events that can be in a failure state,
you should always check whether `response.error` is set
before attempting to access the `response.data` property.

### Supported Callbacks

Currently, you can register callbacks for various events by
either using the simplified callback syntax, or by using the callback
methods on the returned `AWS.AWSRequest` object.

#### Simplified Callback Method

Each operation supports a simplified callback that can be passed as the last
parameter to any low-level client operation. The callback function should
accept an `error` parameter, followed by the `data` from the response.

For example:

```js
s3.client.listBuckets(function(error, data) {
  if (err) {
    console.log(error); // error is AWSResponse.error
  } else {
    console.log(data); // data is AWSResponse.data
  }
});
```

Prints (assuming the request succeeded):

```js
{ Owner: { ID: '...', DisplayName: '...' },
  Buckets:
   [ { Name: 'someBucketName', CreationDate: someCreationDate },
     { Name: 'otherBucketName', CreationDate: otherCreationDate } ],
  RequestId: '...' }
```

The error and data parameters accepted are equivalent to the `error` and
`data` properties discussed in the `AWS.AWSResponse` response object section
above.

If you are passing parameters to the operation, the callback should be placed
after the parameters:

```
s3.client.getObject({Bucket: 'bucket', Key: 'key'}, function(err, data) {
  // ...
});
```

#### AWS.AWSRequest Callbacks

You can alternatively register callbacks on events provided by the
`AWS.AWSRequest` object returned by each low-level client operation method.
This request object exposes the `done`, `fail`, `data`, and `always`
events, each taking a callback that accepts the response object.

Note that if you omit the simplified callback parameter on the operation
method, you must call `send()` on the returned request object in order to
kick off the request to the remote server.

##### `done(function(response) { ... })`

This event registers a callback to be called when a successful response
from the server is returned. The response contains a `.data` field
with the serialized response data from the service.

For example:

```js
s3.client.listBuckets().done(function(response) {
  console.log(response.data);
}).send();
```

Prints:

```js
{ Owner: { ID: '...', DisplayName: '...' },
  Buckets: 
   [ { Name: 'someBucketName', CreationDate: someCreationDate },
     { Name: 'otherBucketName', CreationDate: otherCreationDate } ],
  RequestId: '...' }
```

#### `fail(function(response) { ... })`

The `fail` event works similarly to the `done` event, except that it
triggers in the case of a request failure. In this case, `response.data`
will be `null` and the `response.error` field will be filled with
the error data:

```js
s3.config.credentials.accessKeyId = 'invalid';
s3.client.listBuckets().fail(function(response) {
  console.log(response.error);
}).send();
```

Prints:

```js
{ code: 'Forbidden', message: null }
```

#### `data(function(response) { ... })`

<p class="note">If you register a <code>data</code> callback,
  <code>response.data</code> will not contain serialized output
  for the entire request. Instead, it will be your responsibility
  to stream the output and de-serialize the result on your own.
</p>

The `data` callback is used to stream response data from the
service packet-by-packet. This event is mostly used for large responses,
when it is inefficient (or impossible) to load the entire response into
memory.

#### `always(function(response) { ... })`

The `always` event triggers a callback in any final state of a request, i.e.,
both `done` and `fail`. Use this callback to handle any request cleanup
that must be executed regardless of the success state. Note that if you
do intend to use response data inside of this callback, you must check
for the presence of `response.data` or `response.error` before attempting
to access either property. For example:

```js
request.always(function(response) {
  if (response.error) {
    // an error occurred, handle it
  } else {
    // we can use response.data here
  }
}).send();
```

## Binding Custom Context Data on a Callback

TODO: discuss bindings.

## Multiple Callbacks and Chaining

You can register multiple callbacks on any request object. The
callbacks can be registered for different events, or all for the
same event. In addition, you can chain callback registration, for
example:

```js
request.
  done(function(response) {
    console.log("Success!");
  }).
  fail(function(response) {
    console.log("Error!");
  }).
  always(function(response) {
    console.log("Always!");
  }).
  send();
```

The above example will print either "Success! Always!", or "Error! Always!",
depending on whether the request succeeded or not.
