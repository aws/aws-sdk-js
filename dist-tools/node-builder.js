#!/usr/bin/env node

var build = require('./builder');
var path = require('path');

var buildOptions = { basedir: path.resolve(__dirname, '..'),
                    standalone: 'AWS',
                    detectGlobals: false,
                    browserField : false,
                    builtins : false,
                    ignoreMissing: true,
                    commondir : false,
                    insertGlobalVars : {
                        process: undefined,
                        global: undefined,
                        'Buffer.isBuffer': undefined,
                        Buffer: undefined
                    }
                  };

// run if we called this tool directly
if (require.main === module) {
  var opts = {
    services: process.argv[2] || process.env.SERVICES,
    minify: process.env.MINIFY ? true : false,
  };

  opts.build = buildOptions;

  build(opts, function(err, code) {
    if (err) console.error(err.message);
    else console.log(code);
  });
}
