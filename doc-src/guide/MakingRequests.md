# @title Making Requests

# Making Requests

## Asynchronous Promise Objects (`AWS.AWSRequest`)

All requests made through the SDK are asynchronous and use an
event-based promise callback interface. Each service method
that kicks off a request returns an `AWS.AWSRequest` promise
object that you can use to register callbacks.

For example, the following service method returns the request
object as "request", which can be used to register callbacks:

```js
// request is an AWS.AWSRequest object
var request = ec2.client.describeInstances();

// register callbacks on request to retrieve response data
request.done(function(response) {
  console.log(resp.data);
});
```

### The Response Object (`AWS.AWSResponse`)

The response object is passed into each callback function so
that you can access response data. The `AWS.AWSResponse` object that
is passed in contains two important properties to get at this data:

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
using the following methods:

#### `done(function(response) { ... })`

This event registers a callback to be called when a successful response
from the server is returned. The response contains a `.data` field
with the serialized response data from the service.

For example:

```js
s3.client.listBuckets().done(function(response) {
  console.log(response.data);
});
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
});
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
});
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
  });
```

The above example will print either "Success! Always!", or "Error! Always!",
depending on whether the request succeeded or not.
