const path = require('path');
const {spawn} = require('child_process');

module.exports.setupServer = function(isLousyServer) {
  return new Promise((resolve, reject) => {
    const fakeServer = spawn('node', [path.join(__dirname, 'fake_s3_service.js'), isLousyServer]);
    fakeServer.stdout.once('data', (data) => {
      var str = data.toString('utf8')
      // console.log(str);
      if (str.indexOf('Server running') === 0) {
        resolve(fakeServer);
      } else {
        reject(new Error('server did not spin up'))
      }
    })
    fakeServer.stderr.on('data', data => {
      reject(data.toString('utf8'));
    })
  })
}
