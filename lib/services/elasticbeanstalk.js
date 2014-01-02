var AWS = require('../core');

AWS.ElasticBeanstalk = AWS.Service.defineService('elasticbeanstalk', ['2010-12-01']);

module.exports = AWS.ElasticBeanstalk;
