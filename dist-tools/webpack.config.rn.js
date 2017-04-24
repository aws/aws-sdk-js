// import path for resolving file paths
var path = require('path');
module.exports = {
    // Specify the entry point for our app.
    entry: [
        path.join(__dirname, '..', 'react-native.js')
    ],
    // Specify the output file containing our bundled code
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'aws-sdk-react-native.js',
        libraryTarget: 'umd',
        library: 'AWS'
    },
    resolve: {
      aliasFields: ['react-native']
    }
}