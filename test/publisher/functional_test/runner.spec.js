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

  beforeEach('set up fake mock udp agent', (done) => {
    fakeAgent = spawn('node', [path.join(__dirname, 'utils/mock_agent.js')]);
    fakeAgent.stdout.once('data', (data) => {
      var str = data.toString('utf8')
      if (data.indexOf('server listening') === 0) {
        // console.log('fake agent:   ', str);
        done();
      }
    });
    AWS.config.paramValidation = true;
  });

  afterEach('kill mock udp agent', (done) => {
    AWS.config.paramValidation = false;
    fakeAgent.kill(9)
    done();
  });

  for (const scenario of schemes.cases) {

    it(scenario.description, function(done) {
      const backupConfiguration = Object.assign({}, defaultConfiguration);
      AWS.util.update(defaultConfiguration, scenario.configuration);

      spyOn(AWS.util.ini, 'parse').andReturn(defaultConfiguration.sharedConfigFile || {});
      if (!defaultConfiguration) return;
      let defaultConstructParams = {};
      if(defaultConfiguration.accessKey) AWS.config.credentials.accessKeyId = defaultConfiguration.accessKey

      if(defaultConfiguration.userAgent) defaultConstructParams.customUserAgent = defaultConfiguration.userAgent;
      if(defaultConfiguration.region) defaultConstructParams.region = defaultConfiguration.region;
      if(defaultConfiguration.paramValidation === false) defaultConstructParams.paramValidation = defaultConfiguration.paramValidation;
      if(defaultConfiguration.clientSideMonitoring) defaultConstructParams.clientSideMonitoring = defaultConfiguration.clientSideMonitoring;

      if(defaultConfiguration.environmentVariables) {
        for (const key of Object.keys(defaultConfiguration.environmentVariables)) {
          if (Object.prototype.hasOwnProperty.call(defaultConfiguration.environmentVariables, key)) {
            process.env[key] = defaultConfiguration.environmentVariables[key];
          }
        }
      }

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

      for (const apiCall of scenario.apiCalls) {
        mockResponses(apiCall.attemptResponses);
        AWS.Service.prototype.publisher = new Publisher();
        const client = new AWS[apiCall.serviceId](defaultConstructParams);
        const operation = apiCall.operationName[0].toLowerCase() + apiCall.operationName.substring(1);
        client[operation](apiCall.params).send();
      }

      defaultConfiguration = backupConfiguration;
      if(defaultConfiguration.accessKey) AWS.config.credentials.accessKeyId = defaultConfiguration.accessKey
      spyOn(AWS.util.ini, 'parse').andReturn(defaultConfiguration.sharedConfigFile || {});
      if(defaultConfiguration.environmentVariables) {
        for (const key of Object.keys(defaultConfiguration.environmentVariables)) {
          if (Object.prototype.hasOwnProperty.call(defaultConfiguration.environmentVariables, key)) {
            process.env[key] = defaultConfiguration.environmentVariables[key];
          }
        }
      }
    })
  }

})
