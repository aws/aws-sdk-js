const {AWS, spyOn, MockServiceFromApi} = require('../../helpers');
const {mockResponses} = require('./utils/mock_http_client');
const {validateEvents} = require('./utils/validateEvents');
const {Publisher} = require('../../../lib/publisher')
const schemes = require('./cases')
const {fork} = require('child_process')
const dgram = require('dgram');
const path = require('path')
const client = dgram.createSocket('udp4');
const csmConfigProvider = AWS.util.clientSideMonitoring.configProvider;

const FAKE_SERVCIE = 'CSM Test';

describe('run functional test', () => {
  let fakeAgent;
  let defaultConfiguration;
  before('setup default configurations', () => {
    defaultConfiguration = schemes.defaults.configuration;
    AWS.config.clientSideMonitoring = true;
  })

  for (const scenario of schemes.cases) {
    it(scenario.description, async function() {
      const backupConfiguration = Object.assign({}, defaultConfiguration);
      AWS.util.update(defaultConfiguration, scenario.configuration);
      //mock of resolving configuration from shared config file
      spyOn(AWS.util.ini, 'parse').andReturn({
        default: defaultConfiguration.sharedConfigFile || {}
      });

      if(defaultConfiguration.accessKey) {
        AWS.config.credentials.accessKeyId = defaultConfiguration.accessKey
      }

      const defaultConstructParams = getConstructParams(defaultConfiguration);

      setEnvironmentVariables(defaultConfiguration);

      const resolvedCSMConfig = csmConfigProvider();
      AWS.Service.prototype.publisher = new Publisher(resolvedCSMConfig);

      //start a subprocess to echo back the udp datagrams
      fakeAgent = await agentStart(resolvedCSMConfig.port || 31000);

      // listen to the monitoring events echo-ed back
      let monitoringEvents = [];
      fakeAgent.stdout.on('data', function(data) {
        const str = data.toString('utf8')
        const parsed = str.trim().split('\n').map(JSON.parse);
        monitoringEvents = monitoringEvents.concat(parsed);
      })

      //start call according to test cases
      for (const apiCall of scenario.apiCalls) {
        const Klass = getServiceClass(apiCall.serviceId);
        const client = new Klass(defaultConstructParams);
        const operation = apiCall.operationName[0].toLowerCase() + apiCall.operationName.substring(1);
        const request = client.makeRequest(operation, apiCall.params);
        mockResponses(apiCall.attemptResponses, request);
        request.send();
      }

      resetEnvironmentalVariables(defaultConfiguration.environmentVariables, backupConfiguration.environmentVariables)

      if(backupConfiguration.accessKey) AWS.config.credentials.accessKeyId = backupConfiguration.accessKey
      spyOn(AWS.util.ini, 'parse').andReturn(backupConfiguration.sharedConfigFile || {});
      //close agent and then validate the datagram echo-ed back from agent
      await agentFinished(fakeAgent).then(() => {
        expect(validateEvents(monitoringEvents, scenario.expectedMonitoringEvents)).to.eql(true);
      });
      defaultConfiguration = backupConfiguration;
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

function resetEnvironmentalVariables(currentEnv, restoredEnv) {
  //reset the configuration back the original setting
  if(currentEnv) {
   for (const key of Object.keys(currentEnv)) {
     if (Object.prototype.hasOwnProperty.call(currentEnv, key)) {
       delete process.env[key];
     }
   }
 }
 if(restoredEnv) {
   for (const key of Object.keys(restoredEnv)) {
     if (Object.prototype.hasOwnProperty.call(restoredEnv, key)) {
       process.env[key] = restoredEnv[key];
     }
   }
 }
}

function agentStart(port) {
   //start up an udp agent echoing back monitoring events
   //pass in --inspect={port} to debug the subprocess
  return new Promise((resolve) => {
    port = port || '';
    const fakeAgent = fork(path.join(__dirname, 'utils/mock_agent.js'), [`port=${port}`], {stdio: ['pipe', 'pipe', 'pipe', 'ipc'], execArgv: ['--inspect=9223']});
    fakeAgent.once('message', (m) => {
      if (m.message.toLowerCase().indexOf('server listening') === 0) {
        //udp agent starts to echo back monitoring events
        resolve(fakeAgent);
      } else {
        reject(new Error('agent start error'))
      }
    })
  })
}

function agentFinished(agentProcess) {
  return new Promise((resolve, reject) => {
    agentProcess.once('message', (m) => {
      // fake csm agent notifies the echo-ing is done.
      if (m.message && m.message.toLowerCase() === 'recording done') {
        agentProcess.kill(9)
      }
      resolve();
    });
    agentProcess.send({message: 'Sending Done'});
  });
}

function getServiceClass(serviceId) {
  if (serviceId === FAKE_SERVCIE) {
    return AWS.Service.defineService('csmtest', {api: new AWS.Model.Api(require('./utils/csmtest/2018-06-19/service-2.json'))})
  } else {
    return AWS[serviceId];
  }
}
