import AWS = require('../index');

// create request without optional params
var request: AWS.Request<{content: string}, Error> = new AWS.Request(new AWS.Service(), 'operation');
// create request with params
request = new AWS.Request(new AWS.Service(), 'operation', {});

//test request.send with callback
request.send(function(err, data) {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(data.content);
    }
});

// test request event listeners
request.on('error', function(err, response) {
    
});
request.on('build', function(request) {
    console.log(request.httpRequest.method);
});
request.on('complete', function(response) {
    if (response.error) {
        console.log(response.error.message);
    } else if (response.data) {
        response.data.content;
    }
});