import AWS = require('../index');

// create endpoint
var endpoint = new AWS.Endpoint('awsproxy.example.com');
endpoint.host = 'host';
endpoint.hostname = 'hostname';
endpoint.href = 'url';
endpoint.port = 8080;
endpoint.protocol = 'https';