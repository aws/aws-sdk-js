# Examples

All of these examples assume that the AWS library is required,
credentials are loaded via environment variables (`AWS_ACCESS_KEY_ID`
and `AWS_SECRET_ACCESS_KEY`), and the region is set via 
`AWS.config.update({region: 'us-west-2'});` or the `AWS_REGION` environment
variable.

The common preamble code can be summarized as follows:

```js
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
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

## Amazon Glacier

### Amazon Glacier: Creating a Vault

The following example creates a vault named "YOUR_VAULT_NAME":

```js
var glacier = new AWS.Glacier();
glacier.client.createVault({vaultName: 'YOUR_VAULT_NAME'}, function(err) {
  if (!err) console.log("Created vault!")
});
```

### Amazon Glacier: Uploading an Archive

<p class="note"><em>Note: this example assumes you have already created a vault
named "YOUR_VAULT_NAME".</em></p>

The following example will upload a single Buffer object as an entire archive.
The SDK will automatically compute the tree hash checksum for the data being
uploaded, though you can override it by passing your own `checksum` parameter.

```js
var glacier = new AWS.Glacier(),
    vaultName = 'YOUR_VAULT_NAME',
    buffer = new Buffer(2.5 * 1024 * 1024); // 2.5MB buffer

var params = {vaultName: vaultName, body: buffer};
glacier.client.uploadArchive(params, function(err, data) {
  if (err) console.log("Error uploading archive!", err);
  else console.log("Archive ID", data.archiveId);
});
```

### Amazon Glacier: Multi-part Upload

<p class="note"><em>Note: this example assumes you have already created a vault
named "YOUR_VAULT_NAME".</em></p>

The following example will create a multi-part upload out of 1MB chunks of a
Buffer object. Note that a complete SHA-256 tree hash is manually computed
using the `computeChecksums` method:

```js
var glacier = new AWS.Glacier(),
    vaultName = 'YOUR_VAULT_NAME',
    buffer = new Buffer(2.5 * 1024 * 1024), // 2.5MB buffer
    partSize = 1024 * 1024, // 1MB chunks,
    numPartsLeft = Math.ceil(buffer.length / partSize),
    startTime = new Date(),
    params = {vaultName: vaultName, partSize: partSize.toString()};

// Compute the complete SHA-256 tree hash so we can pass it
// to completeMultipartUpload request at the end
var treeHash = glacier.client.computeChecksums(buffer).treeHash;

// Initiate the multi-part upload
console.log('Initiating upload to', vaultName);
glacier.client.initiateMultipartUpload(params, function (mpErr, multipart) {
  if (mpErr) { console.log('Error!', mpErr.stack); return; }
  console.log("Got upload ID", multipart.uploadId);

  // Grab each partSize chunk and upload it as a part
  for (var i = 0; i < buffer.length; i += partSize) {
    var end = Math.min(i + partSize, buffer.length),
        partParams = {
          vaultName: vaultName,
          uploadId: multipart.uploadId,
          range: 'bytes ' + i + '-' + (end-1) + '/*',
          body: buffer.slice(i, end)
        };

    // Send a single part
    console.log('Uploading part', i, '=', partParams.range);
    glacier.client.uploadMultipartPart(partParams, function(multiErr, mData) {
      if (multiErr) return;
      console.log("Completed part", this.request.params.range);
      if (--numPartsLeft > 0) return; // complete only when all parts uploaded

      var doneParams = {
        vaultName: vaultName,
        uploadId: multipart.uploadId,
        archiveSize: buffer.length.toString(),
        checksum: treeHash // the computed tree hash
      };

      console.log("Completing upload...");
      glacier.client.completeMultipartUpload(doneParams, function(err, data) {
        if (err) {
          console.log("An error occurred while uploading the archive");
          console.log(err);
        } else {
          var delta = (new Date() - startTime) / 1000;
          console.log('Completed upload in', delta, 'seconds');
          console.log('Archive ID:', data.archiveId);
          console.log('Checksum:  ', data.checksum);
        }
      });
    });
  }
});
```
