const {execSync} = require('child_process');
const path = require('path');

let data = execSync('node ' + [path.join(__dirname, 'scenario1.js'), 1].join(' '));
data = data.toString();
console.log(data);



