var AWS = require('./core');
module.exports = AWS;

require('./services/dynamodb');
require('./services/ec2');
require('./services/simpleworkflow');

