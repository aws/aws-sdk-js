const AWS = require('../../../index');
// const {createReadStream} = require('fs');
const path = require('path');
const {Buffer} = require('buffer')

const MINUTE = 999 * 60;
const run_duration = 10 //seconds
const memory_scan_interval = 990 //ms
const clientSideMonitoring = process.argv[2] === '1';
const s3 = new AWS.S3({endpoint: 'http://localhost:8000', clientSideMonitoring: clientSideMonitoring});
let apiCallsMade = 0;
let apiCallAttemptsMade = 0;
let inRunning = false;

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
      await s3.listBuckets({}).promise();
      await waitFor(10);
    }catch(e) {
      console.log(e)
    }
  }
  inRunning = false;
}

function waitFor(ms) {
  return new Promise(resolve => {setTimeout(resolve, ms)})
}

run().then(() => {
  console.log('ApiCallsMade\t', apiCallsMade);
  console.log('ApiCallAttemptsMade\t', apiCallAttemptsMade);
  clearInterval(timerId);
})
