const helpers = require('../../helpers');
const {mockResponses} = require('./utils/mock_http_client');
const {validateEvents} = require('./utils/validateEvents');
const {Publisher} = require('../../../lib/publisher')
const schemes = require('./cases')
const {spawn} = require('child_process')
const dgram = require('dgram');
const path = require('path')
const client = dgram.createSocket('udp4');
const AWS = helpers.AWS;
const spyOn = helpers.spyOn;

describe('run functional test', () => {
  let fakeAgent;
  let defaultConfiguration;
  before('setup default configurations', () => {
    defaultConfiguration = schemes.defaults.configuration;
  })

  //start up an udp agent echoing back monitoring events
  beforeEach('set up fake mock udp agent', (done) => {
    fakeAgent = spawn('node', [path.join(__dirname, 'utils/mock_agent.js')]);
    fakeAgent.stdout.once('data', (data) => {
      var str = data.toString('utf8')
      if (data.indexOf('server listening') === 0) {
        //udp agent starts to echo back monitoring events
        done();
      }
    });
    AWS.config.paramValidation = true;
  });

  //stop udp agent
  afterEach('kill mock udp agent', (done) => {
    AWS.config.paramValidation = false;
    fakeAgent.kill(9)
    done();
  });

  for (const scenario of schemes.cases) {

    it(scenario.description, function(done) {
      const backupConfiguration = Object.assign({}, defaultConfiguration);
      AWS.util.update(defaultConfiguration, scenario.configuration);
      //mock of resolving configuration from shared config file
      spyOn(AWS.util.ini, 'parse').andReturn(defaultConfiguration.sharedConfigFile || {});
      if(defaultConfiguration.accessKey) {
        AWS.config.credentials.accessKeyId = defaultConfiguration.accessKey
      }

      const defaultConstructParams = getConstructParams(defaultConfiguration);

      setEnvironmentVariables(defaultConfiguration);

      //listen to the monitoring events echo-ed back
      let monitoringEvents = [];
      fakeAgent.stdout.on('data', function(data) {
        const str = data.toString('utf8')
        const parsed = str.trim().split('\n').map(JSON.parse);
        monitoringEvents = monitoringEvents.concat(parsed);
        if (monitoringEvents.length === scenario.expectedMonitoringEvents.length) {
          expect(validateEvents(monitoringEvents, scenario.expectedMonitoringEvents)).to.eql(true)
          done();
        }
      })
      //start call according to test cases
      for (const apiCall of scenario.apiCalls) {
        AWS.Service.prototype.publisher = new Publisher();
        const client = new AWS[apiCall.serviceId](defaultConstructParams);
        const operation = apiCall.operationName[0].toLowerCase() + apiCall.operationName.substring(1);
        const request = client[operation](apiCall.params);
        mockResponses(apiCall.attemptResponses, request);
        request.send();
      }

      //reset the configuration back the original setting
      if(defaultConfiguration.environmentVariables) {
        for (const key of Object.keys(defaultConfiguration.environmentVariables)) {
          if (Object.prototype.hasOwnProperty.call(defaultConfiguration.environmentVariables, key)) {
            delete process.env[key];
          }
        }
      }
      defaultConfiguration = backupConfiguration;
      if(defaultConfiguration.environmentVariables) {
        for (const key of Object.keys(defaultConfiguration.environmentVariables)) {
          if (Object.prototype.hasOwnProperty.call(defaultConfiguration.environmentVariables, key)) {
            process.env[key] = defaultConfiguration.environmentVariables[key];
          }
        }
      }
      if(defaultConfiguration.accessKey) AWS.config.credentials.accessKeyId = defaultConfiguration.accessKey
      spyOn(AWS.util.ini, 'parse').andReturn(defaultConfiguration.sharedConfigFile || {});
    })
  }

})

function getConstructParams(configurations) {
  let constructParams = {};
  if(configurations.userAgent) constructParams.customUserAgent = configurations.userAgent;
  if(configurations.region) constructParams.region = configurations.region;
  if(configurations.paramValidation === false) constructParams.paramValidation = configurations.paramValidation;
  if(configurations.clientSideMonitoring) constructParams.clientSideMonitoring = configurations.clientSideMonitoring;
  return constructParams;
}

function setEnvironmentVariables(configurations) {
  if(configurations.environmentVariables) {
    for (const key of Object.keys(configurations.environmentVariables)) {
      if (Object.prototype.hasOwnProperty.call(configurations.environmentVariables, key)) {
        process.env[key] = configurations.environmentVariables[key];
      }
    }
  }
}
