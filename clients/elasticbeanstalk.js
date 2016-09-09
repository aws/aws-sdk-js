require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elasticbeanstalk'] = {};
ElasticBeanstalk = Service.defineService('elasticbeanstalk', ['2010-12-01']);

apiLoader.services['elasticbeanstalk']['2010-12-01'] = require('../apis/elasticbeanstalk-2010-12-01.min.json');
apiLoader.services['elasticbeanstalk']['2010-12-01'].paginators = require('../apis/elasticbeanstalk-2010-12-01.paginators.json').pagination;
if (!Object.prototype.hasOwnProperty.call(AWS, 'ElasticBeanstalk')) {
  AWS.ElasticBeanstalk = ElasticBeanstalk;
}

module.exports = ElasticBeanstalk;
