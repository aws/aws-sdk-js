var AWS = require('../core');

AWS.CloudFront = AWS.Service.defineService('cloudfront', ['2012-05-05', '2013-05-12*', '2013-08-26*', '2013-09-27*', '2013-11-11']);

module.exports = AWS.CloudFront;
