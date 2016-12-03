import S3 = require('../clients/s3');
import fs = require('fs');

// Instantiate S3 without options
var s3 = new S3();

// Instantiate S3 with config
var s3Config: S3.Types.ClientConfiguration = {
    apiVersion: '2006-03-01',
    region: 'us-west-2',
    params: {
        Bucket: 'BUCKET'
    },
    signatureVersion: 'v4'
};
s3 = new S3(s3Config);

/**
 * Call operation with:
 *  * params
 *  * callback
 */
s3.listObjects({
    Bucket: 'BUCKET2'
}, function(err, data) {
    if (err) {
        console.log(err.extendedRequstId);
    } else if (data && data.Contents) {
        data.Contents.forEach(function(content) {
            console.log(content.Key);
        });
    }
});

/**
 * Call operation with:
 *  * no params
 *  * callback
 */
s3.listObjects(function(err, data) {
    if (err) {
        console.log(err.code);
    } else if (data && data.Contents) {
        data.Contents.forEach(function(content) {
            console.log(content.Key);
        });
    }
});

/**
 * Call operation with:
 *  * no params
 *  * no callback
 */
var listObjectsReq = s3.listObjects();
// Test success/error event listeners
listObjectsReq.on('error', function(err, resp) {
    console.log(err.code);
    console.log(resp.error);
});
listObjectsReq.on('success', function(resp) {
    if (resp.data && resp.data.Contents) {
        resp.data.Contents.forEach(function(content) {
            console.log(content.Key);
        });
    }
});
// test complete event listener
listObjectsReq.on('complete', function(resp) {
    if (resp.error) {
        console.log(resp.error.code);
    } else if (resp.data && resp.data.Contents) {
        resp.data.Contents.forEach(function(content) {
            console.log(content.Key);
        });
    }
});
// test send
listObjectsReq.send(function(err, data) {
    if (err) {
        console.log(err.code);
    } else if (data && data.Contents) {
        data.Contents.forEach(function(content) {
            console.log(content.Key);
        });
    }
});
// test promise support
listObjectsReq.promise().then(function(data) {
    data.Contents = data.Contents || [];
    data.Contents.forEach(function(content) {
        console.log(content.Key);
    });
}).catch(function(err) {
    console.log(err);
});

// test stream
var s3GetObjectStream = s3.getObject({
    Bucket: 'BUCKET',
    Key: 'KEY'
}).createReadStream();

// test putObject
s3.putObject({
    Bucket: 'BUCKET',
    Key: 'Test',
    Body: 'text'
});

s3.putObject({
    Bucket: 'BUCKET',
    Key: 'Test',
    Body: new Buffer('text')
});

s3.putObject({
    Bucket: 'BUCKET',
    Key: 'Test',
    Body: fs.createReadStream('/fake/path')
});

const upload = s3.upload({
    Bucket: 'BUCKET',
    Key: 'KEY',
    Body: new Buffer('some data')
});

// test managed upload promise support
upload.promise()
    .then((data) => data.Location);

const uploader = new S3.ManagedUpload({
    queueSize: 4
});
uploader.on('httpUploadProgress', function(progress) {
    console.log(progress.loaded);
    console.log(progress.total);
});
uploader.send(function(err, data) {
    if (err) {
        console.log(err.code);
    } else if (data) {
        console.log(data.Bucket);
    }
});
uploader.abort();
uploader.promise().then(function(data) {
    console.log(data.Bucket);
});

var uploader2: S3.ManagedUpload = new S3.ManagedUpload(<S3.ManagedUpload.ManagedUploadOptions>{
    service: s3,
    params: {
        Bucket: 'bucket',
        Key: 'key',
        Body: 'test'
    }
});

uploader2.send((err, data) => {

});