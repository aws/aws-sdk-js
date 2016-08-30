require('../lib/global');
var AWS = require('../lib/core');

AWS.apiLoader.services['elasticbeanstalk'] = {};
AWS.ElasticBeanstalk = AWS.Service.defineService('elasticbeanstalk', ['2010-12-01']);

AWS.apiLoader.services['elasticbeanstalk']['2010-12-01'] = require('../apis/elasticbeanstalk-2010-12-01.min');
AWS.apiLoader.services['elasticbeanstalk']['2010-12-01'].paginators = require('../apis/elasticbeanstalk-2010-12-01.paginators').pagination;

module.exports = AWS.ElasticBeanstalk;
