const {AWS, MockServiceFromApi, spyOn} = require('../../helpers');
const {mockResponses} = require('./utils/mock_http_client');
const {validateEvents} = require('./utils/validateEvents');
const {Publisher} = require('../../../lib/publisher');
const schemes = require('./cases');
const {fork} = require('child_process');
const dgram = require('dgram');
const path = require('path');
const client = dgram.createSocket('udp4');
const csmConfigProvider = AWS.util.clientSideMonitoring.configProvider;

const FAKE_SERVCIE = 'CSM Test';

describe('run functional test', () => {
  let defaultConfiguration;
  let processEnvBackup;
  before(() => {
    AWS.config.clientSideMonitoring = true;
    processEnvBackup = Object.assign({}, process.env);
  });

  beforeEach(async () => {
    defaultConfiguration = Object.assign({}, schemes.defaults.configuration);

  });

  afterEach(async () => {
    process.env = processEnvBackup;
  });

  for (const scenario of schemes.cases) {
    it(scenario.description, async function() {
      const scenarioConfiguration = Object.assign(defaultConfiguration, scenario.configuration);
      //mock of resolving configuration from shared config file
      spyOn(AWS.util.ini, 'parse').andReturn({
        default: scenarioConfiguration.sharedConfigFile || {}
      });

      const defaultConstructParams = getConstructParam(defaultConfiguration);

      process.env = Object.assign({}, process.env, scenarioConfiguration.environmentVariables);

      const resolvedCSMConfig = csmConfigProvider();
      AWS.Service.prototype.publisher = new Publisher(resolvedCSMConfig);

      //start a subprocess to echo back the udp datagrams
      let fakeAgent = await agentStart(resolvedCSMConfig.port || 31000);

      // listen to the monitoring events echo-ed back
      let monitoringEvents = [];
      fakeAgent.stdout.on('data', function(data) {
        const str = data.toString('utf8');
        const parsed = str.trim().split('\n').map(JSON.parse);
        monitoringEvents = monitoringEvents.concat(parsed);
      })

      //start call according to test cases
      for (const apiCall of scenario.apiCalls) {
        const Klass = getServiceClass(apiCall.serviceId);
        const client = new Klass(defaultConstructParams);
        if (scenarioConfiguration.accessKey) {
          client.config.credentials.accessKeyId = scenarioConfiguration.accessKey;
        }
        if (scenarioConfiguration.sessionToken) {
          client.config.credentials.sessionToken = scenarioConfiguration.sessionToken;
        }
        const operation = apiCall.operationName[0].toLowerCase() + apiCall.operationName.substring(1);
        const request = client.makeRequest(operation, apiCall.params);
        mockResponses(apiCall.attemptResponses, request);
        request.send();
      }

      spyOn(AWS.util.ini, 'parse').andReturn(defaultConfiguration.sharedConfigFile || {});
      //close agent and then validate the datagram echo-ed back from agent
      await agentFinished(fakeAgent);
      // console.log('____', monitoringEvents);
      // console.log('||||', scenario.expectedMonitoringEvents);
      expect(validateEvents(monitoringEvents, scenario.expectedMonitoringEvents)).to.eql(true);
    })
  }

})

function getConstructParam(configurations) {
  let constructParams = {};
  if(configurations.userAgent) constructParams.customUserAgent = configurations.userAgent;
  if(configurations.region) constructParams.region = configurations.region;
  if(configurations.paramValidation === false) constructParams.paramValidation = configurations.paramValidation;
  if(configurations.clientSideMonitoring) constructParams.clientSideMonitoring = configurations.clientSideMonitoring;
  return constructParams;
}


function agentStart(port) {
   //start up an udp agent echoing back monitoring events
   //pass in --inspect={port} to debug the subprocess
  return new Promise((resolve) => {
    port = port || '';
    const fakeAgent = fork(path.join(__dirname, 'utils/mock_agent.js'), [`port=${port}`], {stdio: ['pipe', 'pipe', 'pipe', 'ipc']});
    fakeAgent.once('message', (m) => {
      if (m.serverStarted === true) {
        //udp agent starts to echo back monitoring events
        resolve(fakeAgent);
      } else {
        reject(new Error('agent start error'));
      }
    })
  })
}

function agentFinished(agentProcess) {
  return new Promise(resolve => {
    agentProcess.once('message', (m) => {
      // fake csm agent notifies the echo-ing is done.
      if (m.recordingDone === true) {
        agentProcess.kill(9)
      }
      resolve();
    });
    agentProcess.send({message: 'Sending Done'});
  });
}

function getServiceClass(serviceId) {
  if (serviceId === FAKE_SERVCIE) {
    return AWS.Service.defineService('csmtest', {api: new AWS.Model.Api(require('./utils/csmtest/2018-06-19/service-2.json'))});
  } else {
    return AWS[serviceId];
  }
}
