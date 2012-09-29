helpers = require('../helpers'); 

AWS = helpers.AWS
AWS.configuration = new AWS.FileSystemConfig(__dirname + '/../../configuration')

module.exports = helpers
