var fs = require('fs');
var path = require('path');

var defaultServices = 'acm,apigateway,applicationautoscaling,autoscaling,cloudformation,cloudfront,cloudhsm,cloudtrail,cloudwatch,cloudwatchlogs,cloudwatchevents,codecommit,codedeploy,codepipeline,cognitoidentity,cognitoidentityserviceprovider,cognitosync,configservice,devicefarm,directconnect,dynamodb,dynamodbstreams,ec2,ecr,ecs,elasticache,elasticbeanstalk,elastictranscoder,elb,emr,firehose,gamelift,inspector,iotdata,kinesis,kms,lambda,marketplacecommerceanalytics,mobileanalytics,machinelearning,opsworks,rds,redshift,route53,route53domains,s3,ses,sns,sqs,ssm,storagegateway,sts,waf';
var sanitizeRegex = /[^a-zA-Z0-9,-]/;

// Generate service clients
function ClientCreator() {
  this._metadata = require('../apis/metadata');
  this._apisFolderPath = path.join(__dirname, '..', 'apis');
  this._clientFolderPath = path.join(__dirname, '..', 'clients');
  this._serviceCustomizationsFolderPath = path.join(__dirname, '..', 'lib', 'services');
  this._apiFileNames = null;
}

ClientCreator.prototype.getAllApiFilenames = function getAllApiFilenames() {
    if (this._apiFileNames) {
        return this._apiFileNames;
    }
    var apiFileNames = fs.readdirSync(this._apisFolderPath);
    // filter out metadata
    this._apiFileNames = apiFileNames.filter(function(name) {
        return name !== 'metadata.json';
    });
    return this._apiFileNames;
};

ClientCreator.prototype.getAllApiFilenamesForService = function getAllApiFilenamesForService(modelName) {
    var serviceRegex = new RegExp('(^' + modelName + '-([\\d]{4}-[\\d]{2}-[\\d]{2})\\.([\\w]+))\\.json$');
    var modelRegex = /(([\d]{4}-[\d]{2}-[\d]{2})\.([\w]+))\.json$/;

    var models = {};
    var versions = {};
    this.getAllApiFilenames().filter(function(name) {
        return name.search(serviceRegex) === 0;
    }).forEach(function(name) {
        var matches = name.match(serviceRegex);
        if (!matches) {
            return;
        }
        var model = matches[1];
        var version = matches[2];
        var modelType = matches[3];
        if (!versions.hasOwnProperty(version)) {
            versions[version] = {};
        }
        var versionInfo = versions[version];
        switch (modelType) {
            case 'min':
                versionInfo.api = model;
                break;
            case 'paginators':
                versionInfo.paginators = model;
                break;
            case 'waiters2':
                versionInfo.waiters = model;
                break;
            default:
                return;
        }
    });
    models.versions = versions;
    return models;
};

ClientCreator.prototype.customizationsExist = function customizationsExist(serviceName) {
    var customizationsFolder = this._serviceCustomizationsFolderPath;
    return fs.existsSync(path.join(customizationsFolder, serviceName + '.js'));
};

ClientCreator.prototype.generateClientFileSource = function generateClientFileSource(serviceMetadata) {
  var clientFolderPath = this._clientFolderPath;
  var className = serviceMetadata.name;
  var serviceName = className.toLowerCase();
  var modelName = serviceMetadata.prefix || serviceName;

  // get models for the service
  var models = this.getAllApiFilenamesForService(modelName);

  var modelVersions = models && models.versions;
  if (!modelVersions) {
      throw new Error('Unable to get models for ' + modelName);
  }
  var versionNumbers = Object.keys(modelVersions);
  var code = '';
  code += 'require(\'../lib/global\');\n';
  code += 'var AWS = require(\'../lib/core\');\n\n';
  code += 'AWS.apiLoader.services[\'' + serviceName +'\'] = {};\n';
  code += 'AWS.' + className + ' = AWS.Service.defineService(\'' + serviceName + '\', [\'' + versionNumbers.join('\', \'') + '\']);\n';
  // pull in service customizations
  if (this.customizationsExist(serviceName)) {
      code += 'require(\'../lib/services/' + serviceName + '\');\n';
  }
  versionNumbers.forEach(function(version) {
      var versionInfo = modelVersions[version];
      if (!versionInfo.hasOwnProperty('api')) {
          throw new Error('No API model for ' + serviceName + '-' + version);
      }
      var loaderPrefix = 'AWS.apiLoader.services[\'' + serviceName + '\'][\'' + version + '\']';
      code += '\n';
      code += loaderPrefix + ' = require(\'../apis/' + versionInfo.api + '\');\n';
      if (versionInfo.hasOwnProperty('paginators')) {
          code += loaderPrefix + '.paginators = require(\'../apis/' + versionInfo.paginators + '\').pagination;\n';
      }
      if (versionInfo.hasOwnProperty('waiters')) {
          code += loaderPrefix + '.waiters = require(\'../apis/' + versionInfo.waiters + '\').waiters;\n';
      }
  });
  code += '\n';
  code += 'module.exports = AWS.' + className + ';\n';
//   code += 'module.exports = {\n';
//   code += '  AWS: AWS,\n';
//   code += '  ' + className + ': AWS.' + className + '\n';
//   code += '};';
  return {
      code: code,
      path: path.join(clientFolderPath, serviceName + '.js'),
      service: serviceName,
  }
};

ClientCreator.prototype.generateAllServicesSource = function generateAllServicesSource(services, fileName) {
  var clientFolderPath = this._clientFolderPath;
  var metadata = this._metadata;
  var code = '';
  code += 'module.exports = {\n';
  services.forEach(function(service, idx) {
    var className = metadata[service].name;
    var tab = '  ';
    var isLast = idx === services.length - 1;
    code += tab + service + ': require(\'./' + service + '\')' + (isLast ? '' : ',') + '\n';
  });
  code += '};';
  return {
    code: code,
    path: path.join(clientFolderPath, fileName + '.js'),
    service: fileName
  };
};

ClientCreator.prototype.writeClientServices = function writeClientServices() {
  var metadata = this._metadata;
  var services = [];
  for (var key in metadata) {
    if (!metadata.hasOwnProperty(key)) {
      continue;
    }
    var clientInfo = this.generateClientFileSource(metadata[key]);
    fs.writeFileSync(clientInfo.path, clientInfo.code);
    services.push(clientInfo.service);
  }
  var allClientInfo = this.generateAllServicesSource(services, 'all');
  fs.writeFileSync(allClientInfo.path, allClientInfo.code);
  var browserClientInfo = this.generateAllServicesSource(defaultServices.split(','), 'browser_default');
  fs.writeFileSync(browserClientInfo.path, browserClientInfo.code);
  console.log('complete');
};

var cc = new ClientCreator();

cc.writeClientServices();
