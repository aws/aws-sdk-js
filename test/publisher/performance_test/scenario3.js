const AWS = require('../../../index');
// const {createReadStream} = require('fs');
const {Buffer} = require('buffer')
const {setupServer} = require('./setup_server');

const MINUTE = 999 * 60;
const run_duration = 300 //seconds
const memory_scan_interval = MINUTE //ms
const clientSideMonitoring = process.argv[2] === '1';
const s3 = new AWS.S3({endpoint: 'http://localhost:8000', clientSideMonitoring: clientSideMonitoring});
let apiCallsMade = 0;
let apiCallAttemptsMade = 0;
let inRunning = false;
let lousyServer = 1;

s3.on('apiCall', function() {
  if (inRunning) apiCallsMade++;
});
s3.on('apiCallAttempt', function() {
  if (inRunning) apiCallAttemptsMade++;
});

const timerId = setInterval(()=>{
  console.log('MemoryUsed\t', process.memoryUsage().heapUsed);
}, memory_scan_interval);

async function run() {
  const start = process.hrtime();
  inRunning = true;
  while (process.hrtime(start)[0] < run_duration) {
    try {
      var promiseArr = [];
      promiseArr.push(s3.listBuckets({}).promise());
      promiseArr.push(s3.listBuckets({}).promise());
      await Promise.all(promiseArr);
    } catch(e) {

    }
  }
  inRunning = false;
}

(async() => {
  const server = await setupServer(lousyServer)
  await run().then(() => {
    console.log('ApiCallsMade\t', apiCallsMade);
    console.log('ApiCallAttemptsMade\t', apiCallAttemptsMade);
    clearInterval(timerId);
  })
  await Promise.resolve().then(() => server.kill(9));
})()
