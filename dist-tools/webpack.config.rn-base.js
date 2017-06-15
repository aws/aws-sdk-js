// import path for resolving file paths
var path = require('path');
module.exports = {
    // Specify the entry point for our app.
    entry: {
        'aws-sdk-core-react-native': path.join(__dirname, '..', 'lib', 'core.js'),
        'aws-sdk-util-react-native': path.join(__dirname, '..', 'lib', 'util.js'),
    },
    // Specify the output file containing our bundled code
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        //library: 'AWS'
    },
    resolve: {},
    module: {
        /**
         * Tell webpack how to load 'json' files.
         * By default, webpack only knows how to handle
         * JavaScript files.
         * When webpack comes across a 'require()' statement
         * where a json file is being imported, it will use
         * the json-loader.
         */
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    }
}