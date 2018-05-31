const {execSync} = require('child_process');
const path = require('path');

//run scenario 1
let csmOn = 1
let data = execSync('node ' + [path.join(__dirname, 'scenario1.js'), csmOn].join(' '));
var scenario1_csmOn = processRawMetrics(data.toString());
scenario1_csmOn.AverageMemoryUsed = average(scenario1_csmOn.MemoryUsed)
csmOn = 0
data = execSync('node ' + [path.join(__dirname, 'scenario1.js'), csmOn].join(' '));
var scenario1_csmOff = processRawMetrics(data.toString());
scenario1_csmOff.AverageMemoryUsed = average(scenario1_csmOff.MemoryUsed);
console.log(`scenario1:
setting MemoryUsed  ApiCallsMade  ApiCallAttemptsMade
csm_off  ${scenario1_csmOff.AverageMemoryUsed}  ${scenario1_csmOff.ApiCallsMade} ${scenario1_csmOff.ApiCallAttemptsMade}
csm_on  ${scenario1_csmOn.AverageMemoryUsed}  ${scenario1_csmOn.ApiCallsMade} ${scenario1_csmOn.ApiCallAttemptsMade}
delta   ${Math.round(scenario1_csmOn.AverageMemoryUsed * 100 / scenario1_csmOff.AverageMemoryUsed)} ${Math.round(scenario1_csmOn.ApiCallsMade * 100 / scenario1_csmOff.ApiCallsMade)} ${Math.round(scenario1_csmOn.ApiCallAttemptsMade * 100 / scenario1_csmOff.ApiCallAttemptsMade)}
`);

//run scenario 2
csmOn = 1
data = execSync('node ' + [path.join(__dirname, 'scenario2.js'), csmOn].join(' '));
var scenario2_csmOn = processRawMetrics(data.toString());
scenario2_csmOn.AverageMemoryUsed = average(scenario2_csmOn.MemoryUsed)
csmOn = 0
data = execSync('node ' + [path.join(__dirname, 'scenario2.js'), csmOn].join(' '));
var scenario2_csmOff = processRawMetrics(data.toString());
scenario2_csmOff.AverageMemoryUsed = average(scenario2_csmOff.MemoryUsed)
console.log(`scenario2:
setting MemoryUsed  ApiCallsMade  ApiCallAttemptsMade
csm_off  ${scenario2_csmOff.AverageMemoryUsed}  ${scenario2_csmOff.ApiCallsMade} ${scenario2_csmOff.ApiCallAttemptsMade}
csm_on  ${scenario2_csmOn.AverageMemoryUsed}  ${scenario2_csmOn.ApiCallsMade} ${scenario2_csmOn.ApiCallAttemptsMade}
delta   ${Math.round(scenario2_csmOn.AverageMemoryUsed * 100 / scenario2_csmOff.AverageMemoryUsed)} ${Math.round(scenario2_csmOn.ApiCallsMade * 100 / scenario2_csmOff.ApiCallsMade)} ${Math.round(scenario2_csmOn.ApiCallAttemptsMade * 100 / scenario2_csmOff.ApiCallAttemptsMade)}
`);

//run scenario 3
csmOn = 1
data = execSync('node ' + [path.join(__dirname, 'scenario3.js'), csmOn].join(' '));
var scenario3_csmOn = processRawMetrics(data.toString());
scenario3_csmOn.AverageMemoryUsed = average(scenario3_csmOn.MemoryUsed)
csmOn = 0
data = execSync('node ' + [path.join(__dirname, 'scenario3.js'), csmOn].join(' '));
var scenario3_csmOff = processRawMetrics(data.toString());
scenario3_csmOff.AverageMemoryUsed = average(scenario3_csmOff.MemoryUsed)
console.log(`scenario3:
setting MemoryUsed  ApiCallsMade  ApiCallAttemptsMade
csm_off  ${scenario3_csmOff.AverageMemoryUsed}  ${scenario3_csmOff.ApiCallsMade} ${scenario3_csmOff.ApiCallAttemptsMade}
csm_on  ${scenario3_csmOn.AverageMemoryUsed}  ${scenario3_csmOn.ApiCallsMade} ${scenario3_csmOn.ApiCallAttemptsMade}
delta   ${Math.round(scenario3_csmOn.AverageMemoryUsed * 100 / scenario3_csmOff.AverageMemoryUsed)} ${Math.round(scenario3_csmOn.ApiCallsMade * 100 / scenario3_csmOff.ApiCallsMade)} ${Math.round(scenario3_csmOn.ApiCallAttemptsMade * 100 / scenario3_csmOff.ApiCallAttemptsMade)}
`)


function processRawMetrics(rawMetrics){
  let metrics = {
    MemoryUsed: [],
    ApiCallsMade: 0,
    ApiCallAttemptsMade: 0,
  }
  for (const entry of rawMetrics.split('\n')) {
    const key = entry.split('\t')[0];
    const value = entry.split('\t')[1];
    if (key === 'MemoryUsed') {
      metrics.MemoryUsed.push(Math.round(parseInt(value) / 1024));
    } else if (key === 'ApiCallsMade') {
      metrics.ApiCallsMade = parseInt(value);
    } else if (key === 'ApiCallAttemptsMade') {
      metrics.ApiCallAttemptsMade = parseInt(value);
    }
  }
  return metrics;
}

function average(list) {
  return list.reduce((accumulator, curr, index) => {
    accumulator += curr;
    if (index === list.length) {
      accumulator = Math.round(accumulator / list.length);
    }
    return accumulator;
  }, 0)
}
