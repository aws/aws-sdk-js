# Examples

All of these examples assume that the AWS library is required,
credentials are loaded via environment variables (`AWS_ACCESS_KEY_ID`
and `AWS_SECRET_ACCESS_KEY`), and the region is set via 
`AWS.config.update({region: 'us-east-1'});`.

The common preamble code can be summarized as follows:

```js
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
```

## Amazon Simple Storage Service (Amazon S3)

### Amazon S3: List All of Your Buckets (listBuckets)

The following example lists all buckets associated with your AWS account:

```js
var s3 = new AWS.S3();
s3.client.listBuckets(function(err, data) {
  for (var index in data.Buckets) {
    var bucket = data.Buckets[index];
    console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
  }
});
```

### Amazon S3: Create a New Bucket and Object (createBucket, putObject)

The following example puts the string 'Hello!' inside the
object 'myKey' of bucket 'myBucket':

```js
var s3 = new AWS.S3();
s3.client.createBucket({Bucket: 'myBucket'}, function() {
  var data = {Bucket: 'myBucket', Key: 'myKey', Body: 'Hello!'};
  s3.client.putObject(data, function() {
    console.log("Successfully uploaded data to myBucket/myKey");
  });
});
```

### Amazon S3: Streaming Objects to Files on Disk (getObject)

You can use the `createReadStream()` method on a request object to
get a handle to a stream object which supports piping raw HTTP
body data to a file. This is especially useful when streaming
objects to streams like filesystem objects. The following example
shows how you can stream an object from Amazon S3 directly to a file
on disk:

```js
var s3 = new AWS.S3();
var params = {Bucket: 'myBucket', Key: 'myImageFile.jpg'};
var file = require('fs').createWriteStream('/path/to/file.jpg');
s3.client.getObject(params).createReadStream().pipe(file);
```

Alternatively, you can register an 'httpData' event listener on
the request object to access each chunk of data received across
the wire (as Buffer objects):

```js
var s3 = new AWS.S3();
var params = {Bucket: 'myBucket', Key: 'myImageFile.jpg'};
var file = require('fs').createWriteStream('/path/to/file.jpg');

s3.client.getObject(params).
on('httpData', function(chunk) { file.write(chunk); }).
on('httpDone', function() { file.end(); }).
send();
```

## Amazon DynamoDB

### Amazon DynamoDB: Listing Tables (listTables)

The following example will list all tables in a DynamoDB instance:

```js
var db = new AWS.DynamoDB();
db.client.listTables(function(err, data) {
  console.log(data.TableNames);
});
```