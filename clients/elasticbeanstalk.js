require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elasticbeanstalk'] = {};
AWS.ElasticBeanstalk = Service.defineService('elasticbeanstalk', ['2010-12-01']);

apiLoader.services['elasticbeanstalk']['2010-12-01'] = require('../apis/elasticbeanstalk-2010-12-01.min.json');
apiLoader.services['elasticbeanstalk']['2010-12-01'].paginators = require('../apis/elasticbeanstalk-2010-12-01.paginators.json').pagination;

module.exports = AWS.ElasticBeanstalk;
